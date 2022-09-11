import React from 'react'
import styles from './DescriptionSection.module.scss';
import starFull from '../../../images/starFull.svg';
import starEmpty from '../../../images/starEmpty.svg';

import minus from '../../../images/minus.svg';
import plus from '../../../images/plus.svg';







export const DescriptionSection = ({ product, quantity,incrementQuantity,decrementQuantity, addProductToCart}) => {
    return (
        <div className={styles.DescriptionSection}>

            <img alt={'logoSmall'} className={styles.logo} src={product?require(`../../../images/${product.logo}`):''} />

            <div className={styles.title}>{product?product.title:''}</div>

            <div className={styles.category}>{product?product.category:''}</div>

            <div className={styles.ratings}>

                <div className={styles.stars}>

                    {[...Array(Math.floor(product?product.rating:0))].map((s, i) => (

                        <img key={i} alt={'starFull'} className={styles.star} src={starFull} />

                    ))}


                    {[...Array(Math.ceil(5 - (product?product.rating:0)))].map((s, i) => (

                        <img key={i} alt={'starEmpty'} className={styles.star} src={starEmpty} />

                    ))}

                </div>

                <div className={styles.rating}>
                    {product?product.rating:0} of 5
                </div>

                <div className={styles.numberOfRatings}>
                    {product?product.numberOfRatings:0} Rates
                </div>


            </div>


            <div className={styles.pricing}>

                <div className={styles.discountedPrice}>

                    {product?product.discountedPrice:0}&nbsp;

                    <div className={styles.discountedPriceCurrency}>{" LE"}</div>



                </div>

                <div className={styles.price}>

                    {product?product.price:0}&nbsp;

                    <div className={styles.priceCurrency}>{" LE"}</div>



                </div>
                <div className={styles.discountPercentage}>{product?product.discountPercentage:0} Off</div>
            </div>

            <div className={styles.hr}></div>



            <div className={styles.subtitle}>Size</div>

            <div className={styles.sizes}>
                {product?product.sizes.map((s, i) => (

                    <div key={i} className={`${styles.sizeDiv} ${!s.available ? styles.sizeDivDisabled : ''}`}>{s.type}</div>

                )):''}
            </div>




            <div className={styles.hr}></div>

            <div className={styles.subtitle}>Color</div>

            <div className={styles.colors}>

                {product?product.colors.map((c, i) => (

                    <img key={i} alt={c} className={styles.color} src={require(`../../../images/${c}`)} />

                )):''}
            </div>




            <div className={styles.hr}></div>

            <div className={styles.subtitle}>Quantity</div>


            <div className={styles.quantity}>
                <div className={styles.circle} onClick={decrementQuantity}>
                    <img alt={'minus'} className={styles.minus} src={minus} />
                </div>
                <div className={styles.quantityText}>{quantity}</div>
                <div className={styles.circle} onClick={incrementQuantity}>
                    <img alt={'plus'} className={styles.plus} src={plus}  />
                </div>

            </div>


            <div className={styles.actions}>

            <div className={styles.addToCart} onClick={addProductToCart}>
            Add To Cart
                </div>

                <div className={styles.pickup}>
                Pickup From Store
            </div>

            </div>






        </div>
    )
}
