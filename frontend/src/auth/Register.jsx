import { useState } from 'react';
import axios from 'axios';
import registerImage from '../assets/register.png';
import styles from './Register.module.css';  // Import your CSS module

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [expertise, setExpertise] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const response = await axios.post('http://localhost:3000/api/users/register', {
        name,
        email,
        phone,
        expertise,
        password,
      });

      setLoading(false);
      setSuccess(response.data.message);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      setName('');
      setEmail('');
      setPhone('');
      setExpertise('');
      setPassword('');
      setConfirmPassword('');

      window.location.href = '/login';
    } catch (err) {
      setLoading(false);
      setError(err.response?.data?.error || 'An error occurred. Please try again.');
    }
  };

  return (
    <div className={styles.container}>
      <img src={registerImage} alt="Register" className={styles.image} />
      <div className={styles.formContainer}>
        <h1 className={styles.title}>Register</h1>
        {error && <div className={styles.errorMessage}>{error}</div>}
        {success && <div className={styles.successMessage}>{success}</div>}
        <form className={styles.form}>
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={styles.inputField}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.inputField}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className={styles.inputField}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Select area of Expertise</label>
            <select
              value={expertise}
              onChange={(e) => setExpertise(e.target.value)}
              className={styles.inputField}
            >
              <option value="">Select area of Expertise</option>
              <option value="Student">Student</option>
              <option value="Researcher">Researcher</option>
              <option value="Industry Professional">Industry Professional</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.inputField}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className={styles.inputField}
            />
          </div>
          <button
            type="button"
            onClick={handleRegister}
            disabled={loading}
            className={`${styles.button} ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {loading ? 'Signing up...' : 'Sign up'}
          </button>
        </form>
        <div className={styles.link}>
          <a href="/login">Login</a>
        </div>
      </div>
    </div>
  );
};

export default Register;
