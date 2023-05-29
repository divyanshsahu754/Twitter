import React from 'react';
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import styles from "./SignUp.module.css"
import { useState } from 'react';

const SignUp = () => {
  const [data, setData] = useState('');
  return (
    <div className={styles.container}>
      
      <TwitterIcon className={styles.twitter_icon} />
        <h1>Join Twitter today</h1>
        <div className={styles.signin_container}>
          <button className={styles.button}>
            <span className={styles.sign_button}>
              <GoogleIcon className={styles.sign_icon} />
              Sign in with Google
            </span>
          </button>

          <button className={styles.button}>
            <span className={styles.sign_button}>
              <AppleIcon className={styles.sign_icon} />
              Sign in with Apple
            </span>
          </button>

          <button className={styles.create_button}>
         
          Create Account
          </button>

           <p className={styles.content}>
            By signing up, you agree to the Terms of Service and Privacy Policy, including Cookie Use.</p>
            <p>
          Have an account already?<button className={styles.login_button}>Log in</button>
          </p>
        </div>
      
    </div>
  )
}

export default SignUp
