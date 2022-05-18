import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CartNavbar } from '../CartComponent/CartNavbar';
import styles from './loginnavbar.module.css';

export const EmptyCart = () => {
  const navigate = useNavigate();
  return (
    <div>
      <CartNavbar />
      <div className={styles.empty_div}>
        <img
          height="150px"
          src="https://constant.myntassets.com/checkout/assets/img/empty-bag.webp"
          alt=""
        />
        <h2 className={styles.empty_heading1}>Hey! its feel so light</h2>
        <h4 className={styles.empty_heading2}>
          There is nothing in your bag lets add some items
        </h4>
        <button
          className={styles.emptycart_button}
          onClick={() => navigate('/emptywishlist')}
        >
          Add items from wishlist
        </button>
      </div>
    </div>
  );
};
