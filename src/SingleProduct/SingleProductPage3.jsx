import React, { useState, useRef } from 'react';
import DriveEtaIcon from '@mui/icons-material/DriveEta';
import styles from './SingleProductPage3.module.css';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import Alert from '@mui/material/Alert';

export const SingleProductPage3 = ({ price }) => {
  const [pin, setPin] = useState();
  const pinCheck = () => {
    if (pin.length < 6) {
      alert('Please enter a valid code');
    }
  };

  return (
    <>
      <small>Item avilable on COD</small>
      <hr />
      <br />
      <br />
      <br /> <br />
      <h2>BEST OFFERS</h2>
      <br />
      <h3>
        Best Price: <span>Rs. {price}</span>
      </h3>
      <div style={{ marginLeft: '20px' }}>
        <ul>
          <li> Coupon code: NIGHTOWL200</li>
          <li>Coupon Discount: Rs. 200 off (check cart for final savings)</li>
          <li>Applicable on: Orders above Rs. 1199 (only on first purchase)</li>
        </ul>
      </div>
      <br /> <br /> <br />
    </>
  );
};
