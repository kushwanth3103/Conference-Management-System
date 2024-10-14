import { useEffect, useState } from 'react';
import registerImage from '../assets/register.png';
import styles from './Register.module.css';  // Import your CSS module
import Multiselect from 'multiselect-react-dropdown';
import { CONFERENCES } from '../utils/dataConferences';

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
  const [conferences,setConferences]=useState([]);

  useEffect(() => {
      const conferenceNames = CONFERENCES.map((conference) => ({
          name: conference.conferenceName // Create an object with a "name" property
      }));
      setConferences(conferenceNames);
  }, []);

  const handleRegister = async () => {
   
  };

  const onSelect=()=>{}
  const onRemove=()=>{}

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
          <div className={styles.formGroup}>
                        <label className={styles.label}>Select your Area of Interest:</label>
                        <Multiselect
                        options={conferences} // Options to display in the dropdown
                        selectedValues={[]} // Preselected value to persist in dropdown
                        onSelect={onSelect} // Function will trigger on select event
                        onRemove={onRemove} // Function will trigger on remove event
                        displayValue="name" // Property name to display in the dropdown options
                        />
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
