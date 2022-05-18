import React from 'react'
import styles from "./offers.module.css"


export const Offers = () => {
    return (
        <div className={styles.offer}>
            <div className={styles.iconDiv}>
                <img src="https://img.icons8.com/material-outlined/25/000000/discount.png" alt='logo' />
                <p className={styles.heading1}>Available Offers</p>

            </div>
            <p className={styles.heading2}>10% Instant Discount with Standard Chartered Credit and Debit cards on a min spent of Rs 3,000 TCA</p>
            <h4 className={styles.heading3}>Show More</h4>
        </div>
    )
}
