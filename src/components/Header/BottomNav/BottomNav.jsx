import React from 'react'
import styles from './BottomNav.module.scss';






export const BottomNav = () => {
    return (
        <div className={styles.BottomNav}>

            <div className={styles.container}>

                <div className={styles.text}>Men</div>
                <div className={styles.text}>Women</div>
                <div className={styles.text}>Unisex</div>
                <div className={styles.text}>Kids</div>
                <div className={styles.text}>Best Sellers</div>
                <div className={styles.text}>New Arrivals</div>
                <div className={styles.textSpecial}>Offers</div>
            </div>

        </div>
    )
}
