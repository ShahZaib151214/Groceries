import React, { useContext, useState } from "react";
import styles from './LoginPage.module.css'; // Import CSS Module
import { loginPic } from '../../assets/login';
import Context from '../../Context/Context';
import { Navigate, useNavigate } from "react-router-dom";

import LoginNavbar from "./LoginNavbar";
import Footer from "./Footer/Footer";

const LoginPage = () => {
  const { setLogin } = useContext(Context);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    if (!email || !password) {
      setError("Please enter both email and password");
    } else {
      setLogin(true);
      navigate('/Product')
      setError("");
    }
  };

  return (
    <>
 <LoginNavbar/>
     
      <div className={styles.loginPage}>
        <div className={styles.loginPageLeft}>
          <div className={styles.loginPageLeftContent}>
            <h2>User LogIn</h2>
            <div className={styles.socialLogin}>
              <button className={styles.googleBtn} aria-label="Login with Google">
                <img src={loginPic.gmail} style={{ height: '20px', width: '20px' }} alt="Google Login" />
              </button>
              <p>Or</p>
              <button className={styles.facebookBtn} aria-label="Login with Facebook">
                <img src={loginPic.fb} style={{ height: '20px', width: '20px' }} alt="Facebook Login" />
              </button>
            </div>
            <form className={styles.loginForm} onSubmit={handleLogin}>
              {error && <p className="error">{error}</p>}
              <label htmlFor="email">E-Mail:</label>
              <input 
                type="email" 
                placeholder="Enter your Email" 
                id="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
              />
              <label htmlFor="password">Password:</label>
              <input 
                type="password" 
                placeholder="Enter your Password" 
                id="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
              />
              <button type="submit" className={styles.loginBtn}>Log In
              </button>
            </form>
            <div className={styles.loginOptions}>
              <a href="/forgot-password">Forgot Password?</a>
              <p>Need Help?</p>
            </div>
          </div>
        </div>

        <div className={styles.loginPageRight}>
          <div className={styles.rightImageContent}>
            <img src={loginPic.pic} alt="Login Visual" className={styles.loginImage} />
            <div className={styles.overlayText}>
              <h3>Welcome to Website</h3>
              <p>TextFree is a mobile application and web service that allows users to send and receive text messages, as well as make and receive VoIP phone calls, for free over the...</p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default LoginPage;
