import React from 'react'
import BurgerMenu from '../../../images/burger.svg';
import styles from './TopNav.module.scss';
import logo from '../../../images/logo.svg';
import nextSmall from '../../../images/nextsmall.svg';
import previousSmall from '../../../images/previoussmall.svg';
import location from '../../../images/location.svg';
import cart from '../../../images/cart.svg';
import contact from '../../../images/contact.svg';






export const TopNav = () => {
    return (
        <div className={styles.TopNav}>
            <div className={styles.container}>

                <div className={styles.burgermenu}>
                    <img alt='burgermenu' src={BurgerMenu} />
                </div>
                <div className={styles.logo}>
                    <img alt='logo' src={logo} />

                </div>
                <div className={styles.offers}>
                    <img alt='previoussmall' src={previousSmall} />
                    <div className={styles.offersText}>Valentine’s Day Offers! Buy Two Get One Free</div>
                    <div className={styles.textunderline}>Shop Now</div>
                    <img alt='nextsmall' src={nextSmall} />


                </div>
                <div className={styles.logowithtext}>
                    <img alt='contact' className={styles.icon} src={contact} />
                    <div className={styles.text}>Contact Us</div>

                </div>
                <div className={styles.logowithtext}>
                    <img alt='cart' className={styles.icon} src={cart} />
                    <div className={styles.text}>Track Order</div>

                </div>
                <div className={styles.logowithtext}>
                    <img alt='location' className={styles.icon} src={location} />
                    <div className={styles.text}>Find A Store</div>
                </div>
            </div>
        </div>
    )
}
