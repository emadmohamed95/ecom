import React from 'react'
import styles from './Drawer.module.scss';
import close from '../../images/close.svg';
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import { DrawerCard } from './DrawerCard/DrawerCard';






export const AppDrawer = ({ isOpen, toggleDrawer, cart, removeFromCart }) => {

    let total = cart.length>1?cart.reduce(function (previousValue, currentValue) {
        return previousValue.totalPrice + currentValue.totalPrice;
    }): cart.length===1?cart[0].totalPrice:0;


    return (

        <Drawer
            open={isOpen}
            onClose={toggleDrawer}
            direction='right'
            // className={styles.Drawer}
            enableOverlay={true}
            size={475}

        >
            <div className={styles.Drawer}>

                <div className={styles.container}>
                    <div className={styles.close} >
                        <img alt='close' className={styles.icon} src={close} onClick={toggleDrawer}></img>
                    </div>

                    <div className={styles.title}>My Cart</div>

                    {cart.length>0?<><div className={styles.subtitle}>Cart Summary</div>
                    <div className={styles.cards}>
                        {cart.map((cartProduct,i)=>(

                            <DrawerCard key={i} cartProduct={cartProduct} index={i}removeFromCart={removeFromCart}/>
                        ))}
                    </div>
                    <div className={styles.total}>Total: {total} LE</div>
                    <div className={styles.actions}>
                    <div className={styles.review}>Review Cart</div>
                    <div className={styles.complete}>Complete Checkout</div>
                    </div></>:
                    <div className={styles.emptyCart}>Your Cart is Empty</div>
                    }
                    
                </div>
            </div>
        </Drawer>
    )
}
