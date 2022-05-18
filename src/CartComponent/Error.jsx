import React from 'react';
import Navbar from '../HomePageComponents/Navbar';
import styles from '../Logincomponent/loginnavbar.module.css';

export const Error = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.empty_div}>
        <img
          src="https://constant.myntassets.com/web/assets/img/11488523304066-search404.png"
          alt=""
        />
        <h2 className={styles.empty_heading1}>
          {' '}
          We couldn't found any Matches
        </h2>
        <h5 className={styles.empty_heading2}>
          Please check the spelling or try searching something else.
        </h5>
        <input
          className={styles.error_input_search}
          type="text"
          placeholder="search"
        />
        <button className={styles.error_input_search_button}>Search</button>
        <p className={styles.error_para}>Search Again</p>
      </div>
    </div>
  );
};
