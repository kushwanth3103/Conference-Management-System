import React, { useState } from 'react';
import loginImage from '../assets/login.png';
import { useNavigate } from 'react-router-dom';
import { isLoggedIn } from "../utils/authUtils.js";
import classes from './Login.module.css'; // Import CSS module

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const navigate = useNavigate();

    const handleLogin = async () => {
        if (!email || !password) {
            setError('Please enter both email and password.');
            return;
        }

        setLoading(true);
        setError('');
        setSuccess('');

        try {
            if(email=='guest@gmail.com' && password=="Guest@123"){
                localStorage.setItem('user', JSON.stringify({
                    name:'Guest',
                    email:'guest@gmail.com',
                    phone:'+1 6746883789',
                    expertise:'Cloud Computing',
                    password:'Guest@123',
                  }));
                setEmail('');
                setPassword('');
                navigate('/');
            }
            else if(email=='admin@gmail.com' && password=="Admin@123"){
                localStorage.setItem('user', JSON.stringify({
                    name:'Admin',
                    email:'admin@gmail.com',
                    password:'Admin@123',
                  }));
                setEmail('');
                setPassword('');
                navigate('/admin');
            }
            else{
                throw new Error("");
            }

        } catch (err) {
            setLoading(false);
            setError(err.response?.data?.error || 'Please enter email : guest@gmail.com Password : Guest@123');
        }
    };

    if (isLoggedIn()) {
        return (
            <div className={'h-screen center flex-col'}>
                <div className="loading loading-spinner mb-6 loading-lg text-warning"></div>
                <div className="mb-6 text-center">You are already logged in!</div>
                <button
                    onClick={() => {
                        localStorage.removeItem('user');
                        navigate('/login');
                    }}
                    className="bg-red-500 text-white py-3 px-5 rounded-lg font-semibold hover:bg-red-600 transition">
                    Logout
                </button>
            </div>
        );
    }

    return (
        <div className={classes.container}>
            <img src={loginImage} alt="Login" className={classes.image} />
            <div className={classes.formContainer}>
                <h1 className={classes.heading}>Login</h1>
                {error && <div className={classes.errorMessage}>{error}</div>}
                {success && <div className={classes.successMessage}>{success}</div>}
                <form className="space-y-6">
                    <div className={classes.formGroup}>
                        <label className={classes.label}>Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={classes.inputField}
                        />
                    </div>
                    <div className={classes.formGroup}>
                        <label className={classes.label}>Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className={classes.inputField}
                        />
                    </div>
                    <button
                        type="button"
                        onClick={handleLogin}
                        disabled={loading}
                        className={`${classes.button} ${loading ? classes.buttonDisabled : ''}`}
                    >
                        {loading ? 'Logging in...' : 'Login'}
                    </button>
                </form>
                <div className={classes.linkContainer}>
                    <a href='/register' className={classes.link}>Register</a>
                </div>
            </div>
        </div>
    );
};

export default Login;
