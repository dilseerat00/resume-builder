import React, { useContext, useState } from 'react';
import { authStyles as styles } from '../assets/dummystyle';
import { UserContext } from '../context/userContext';
import { useNavigate } from 'react-router-dom';
import { validateEmail } from '../utils/helper';
import axiosInstance from '../utils/axiosInstance';
import { API_PATHS } from '../utils/apiPath';
import Input from '../components/Inputs'; 


const Login = ({ setCurrentPage }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const { updateUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError('Enter a valid email');
      return;
    }
    if (!password) {
      setError('Enter your password');
      return;
    }

    setError('');

    try {
      const response = await axiosInstance.post(API_PATHS.AUTH.LOGIN, {
        email,
        password,
      });

      const  token  = response.data.token;

      if (token) {
        localStorage.setItem('token', token);
        updateUser(response.data);
        navigate('/dashboard');
      }
    } catch (error) {
      setError(error.response?.data?.message || 'Something went wrong. Try again');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.headerWrapper}>
        <h4 className={styles.title}>Welcome Back</h4>
        <p className={styles.subtitle}>Sign in to access your dashboard</p>
      </div>

      {/*Form Section*/}
      <form onSubmit={handleLogin} className={styles.form}>
        <Input
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          label="Email"
          placeholder="abc@example.com"
          type="email"
        />

        <Input
          value={password}
          onChange={({ target }) => setPassword(target.value)}
          label="Password"
          placeholder="Enter your password"
          type="password"
        />

        {error && <div className={styles.errorMessage}>{error}</div>}

        <button type="submit" className={styles.submitButton}>
          Sign In
        </button>

        {/*Footer*/}
        <p className={styles.switchText}>
          Don't have an account?{' '}
          <button
            onClick={() => setCurrentPage('signup')}
            type="button"
            className={styles.switchButton}
          >
            Create Account
          </button>
        </p>
      </form>
    </div>
  );
};

export default Login;
