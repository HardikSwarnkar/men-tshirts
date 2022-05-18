import React from "react";
import styles from "./cartnavbar.module.css";
import VerifiedUser from "@mui/icons-material/VerifiedUser";
import { Link } from "react-router-dom";

export const CartNavbar = () => {
  return (
    <div className={styles.navbar}>
      <Link to="/">
        <img
          className={styles.logo}
          src="https://images.news18.com/ibnlive/uploads/2021/01/1611996262_ynt.jpeg?im=FitAndFill,width=1200,height=900"
          alt="logo"
        />
      </Link>
      <div className={styles.listDiv}>
        <ol className={styles.orderedList}>
          <li className={styles.bag}>BAG</li>
          <li className={styles.divider}></li>
          <li>ADDRESS</li>
          <li className={styles.divider}></li>
          <li>PAYMENT</li>
        </ol>
      </div>
      <div className={styles.iconDiv}>
        <VerifiedUser
          style={{
            fill: "rgb(87,205,178)",
            fontSize: "32px",
            marginTop: "-8px",
          }}
        />
        <span className={styles.iconText}>100 % SECURE</span>
      </div>
    </div>
  );
};
