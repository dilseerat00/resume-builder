import React, { useContext, useState } from 'react';
import { authStyles as styles } from '../assets/dummystyle';
import { UserContext } from '../context/userContext';
import { useNavigate } from 'react-router-dom';
import { validateEmail } from '../utils/helper';
import axiosInstance from '../utils/axiosInstance';
import { API_PATHS } from '../utils/apiPath';
import {Input} from '../components/Inputs';

const SignUp = ({ setCurrentPage }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const { updateUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (!fullName) {
      setError('Enter Full Name');
      return;
    }
    if (!validateEmail(email)) {
      setError('Enter a valid email');
      return;
    }
    if (!password) {
      setError('Enter password');
      return;
    }
    setError('');

    try {
      const response = await axiosInstance.post(API_PATHS.AUTH.REGISTER, {
        name: fullName,
        email,
        password,
      });
      const token = response.data.token; // Critical fix: extract token

      if (token) {
        localStorage.setItem('token', token);
        updateUser(response.data);
        navigate('/dashboard');
      } else {
        setError('Registration failed, please try again.');
      }
    } catch (error) {
      setError(
        error.response?.data?.message || 'Something went wrong. Try again'
      );
    }
  };

  return (
    <div className={styles.signupContainer}>
      <div className={styles.headerWrapper}>
        <h4 className={styles.signupTitle}>Create Account</h4>
        <p className={styles.signupSubtitle}>Join us to build your dream resume</p>
      </div>

      {/* Form Section */}
      <form onSubmit={handleSignUp} className={styles.signupForm}>
        <Input
          value={fullName}
          onChange={({ target }) => setFullName(target.value)}
          label="Full Name"
          placeholder="ABC"
          type="text"
        />

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
          placeholder="At least 6 characters" // Corrected text
          type="password"
        />

        {error && <div className={styles.errorMessage}>{error}</div>}

        <button type="submit" className={styles.signupSubmit}>
          Create Account
        </button>

        {/* Footer */}
        <p className={styles.switchText}>
          Already have an account?{' '}
          <button
            onClick={() => setCurrentPage('login')}
            type="button"
            className={styles.signupSwitchButton}
          >
            Sign In
          </button>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
