import React, { useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../Store/AuthReducer/actions';
import styles from './profile.module.css';
import { AuthContext } from '../Logincomponent/AuthContext';

export const Profile = ({ visible }) => {
  const { mobileNo, setMobileNo, setAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handelLogin = () => {
    navigate('/login');
  };

  const handelLogout = () => {
    setAuth(false);
    dispatch(logoutUser());
    setMobileNo('');
  };

  const isLoggedIn = useSelector((state) => state.auth.status);
  console.log(mobileNo);
  const [mouseOver, setMouseOver] = useState(false);
  return (
    <div
      className={visible || mouseOver ? styles.container : styles.displayNonde}
      onMouseEnter={() => setMouseOver(true)}
      onMouseLeave={() => setMouseOver(false)}
    >
      {isLoggedIn ? (
        <>
          <div className={styles.heading}>GOcomet</div>
          <div className={styles.head}>{mobileNo}</div>
        </>
      ) : (
        <>
          <div className={styles.heading}>Welcome</div>
          <div className={styles.head}>To access account and manage orders</div>
          <div className={styles.buttonContainer}>
            <button className={styles.button} onClick={() => handelLogin()}>
              LOGIN
            </button>
          </div>
        </>
      )}

      <ul>
        <li className={styles.listItem}>Orders</li>
        <li className={styles.listItem}>Wishlist</li>
        <li className={styles.listItem}>Contact Us</li>
        <li className={styles.listItem}>Coupons</li>
        <li className={styles.listItem}>Saved Cards</li>
        {isLoggedIn && (
          <li className={styles.listItem} onClick={handelLogout}>
            Logout
          </li>
        )}
      </ul>
    </div>
  );
};
