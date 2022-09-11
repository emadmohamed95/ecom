import React from 'react'
import styles from './DrawerCard.module.scss';








export const DrawerCard = ({ cartProduct, index,removeFromCart}) => {

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
