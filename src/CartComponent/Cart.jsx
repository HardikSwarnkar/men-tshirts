import React, { useContext } from 'react';
import { CartNavbar } from './CartNavbar';
import styles from './Cart.module.css';
import { Coupons } from './Coupons';
import { AuthContext } from '../Logincomponent/AuthContext';
import { PlaceOrder } from './PlaceOrder';
import { Item } from './Item';
export const Cart = () => {
  const { checked } = useContext(AuthContext);

  return (
    <>
      <div className={styles.cartbody}>
        <CartNavbar />
        <div className={styles.cart_mainDiv}>
          <div>
            <Item />
          </div>
          <div className={styles.vertical}></div>
          <div>{!checked ? <Coupons /> : <PlaceOrder />}</div>
        </div>
      </div>
    </>
  );
};
