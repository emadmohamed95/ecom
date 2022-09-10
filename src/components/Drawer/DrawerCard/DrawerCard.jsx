import React from 'react'
import styles from './DrawerCard.module.scss';

import tagLogo from '../../../images/360.svg';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import starFull from '../../../images/starFull.svg';
import starEmpty from '../../../images/starEmpty.svg';






export const DrawerCard = ({ cartProduct, index,removeFromCart}) => {

    // let cartProduct = {
    //     "title": "Adidas black t-shirt lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    //     "quantity": 1,
    //     "mainImg": "p1.png",
    //     "price": "9,999"
    // }


    return (
        <div className={styles.Card}>


            <img alt='drawerCardImg' className={styles.mainImg} src={cartProduct ? require(`../../../images/${cartProduct.mainImg}`) : ''} />



            <div className={styles.cardProductInfo}>
                <div className={styles.title}>{cartProduct.title}</div>
                <div className={styles.quantity}>Quantity: {cartProduct.quantity}</div>
                <div className={styles.pricingAndAction}>



                    <div className={styles.discountedPrice}>

                        {cartProduct.price}&nbsp;

                        <div className={styles.discountedPriceCurrency}>{" LE"}</div>
                    </div>




                    <div className={styles.action} onClick={()=>{removeFromCart(index)}}>Remove</div>

                </div>




            </div>


        </div>
    )
}
