import React from 'react'
import styles from './MiddleNav.module.scss';
import addidasheader from '../../../images/addidasheader.svg';
import cart2 from '../../../images/cart2.svg';
import heart from '../../../images/heart.svg';
import user from '../../../images/user.svg';
import search from '../../../images/search.svg';






export const MiddleNav = () => {
    return (
        <div className={styles.MiddleNav}>
            <div className={styles.container}>


            <div className={styles.searchbar}>
                <img alt='search' className={styles.search} src={search} />
                <div className={styles.text}>Search</div>

            </div>

            <div className={styles.logo}>
                <img alt='addidasheader' src={addidasheader} />

            </div>
           
            <div className={styles.logowithtext}>
                <img alt='contact' className={styles.icon} src={cart2} />
                <div className={styles.text}>Cart</div>

            </div>
            <div className={styles.logowithtext}>
                <img alt='cart' className={styles.icon} src={heart} />
                <div className={styles.text}>Wishlist</div>

            </div>
            <div className={`${styles.logowithtext} ${styles.noMarginRight}`}>
                <img alt='location' className={styles.icon} src={user} />
                <div className={styles.text}>Login</div>
                </div>
            </div>
        </div>
    )
}
