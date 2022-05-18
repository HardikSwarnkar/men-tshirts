import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../HomePageComponents/Navbar';
import styles from './loginnavbar.module.css';

export const Empty = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <div className={styles.empty_div}>
        <h3 className={styles.empty_heading1}>PLEASE LOG IN</h3>
        <h5 className={styles.empty_heading2}>LOG IN TO VIEW YOUR WISHLIST</h5>
        <img
          src="https://www.nykaa.com/assets/desktop/images/empty_wishlist.svg"
          alt="img"
        />
        <br />
        <button
          className={styles.empty_button}
          onClick={() => navigate('/login')}
        >
          Login
        </button>
      </div>
    </div>
  );
};
