import React, { useState } from 'react'
import styles from './DescriptionSection.module.scss';


// import adidasSmall from '../../../images/adidasSmall.svg';
import starFull from '../../../images/starFull.svg';
import starEmpty from '../../../images/starEmpty.svg';

import minus from '../../../images/minus.svg';
import plus from '../../../images/plus.svg';







export const DescriptionSection = ({ }) => {

    let product = {
        logo: 'adidasSmall.svg',
        title: 'Adidas black t-shirt lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        category: 'Men',
        rating: 4.9,
        numberOfRatings: '22',
        price: '12,999',
        discountedPrice: '9,999',
        discountPercentage: '30%',
        sizes: [{ type: 'Small', available: true },
        { type: 'Medium', available: true },
        { type: 'Large', available: false },
        { type: 'X Large', available: true },
        { type: 'XX Large', available: true }],
        colors: ['black.png', 'red.png'],

    }


    let [quantity, setQuantity] = useState(1)

    // let [mainImgIndex, setMainImgIndex] = useState(0)

    // const changeMainImg = (index) => {

    //     setMainImg("2x" + images[index])

    // }

    const incrementQuantity = ()=>{
        setQuantity(quantity+1)
    }

    const decrementQuantity = ()=>{
        if(quantity!=1){
            setQuantity(quantity-1)
        }
        
    }




    return (
        <div className={styles.DescriptionSection}>

            <img alt={'logoSmall'} className={styles.logo} src={require(`../../../images/${product.logo}`)} />

            <div className={styles.title}>{product.title}</div>

            <div className={styles.category}>{product.category}</div>

            <div className={styles.ratings}>

                <div className={styles.stars}>

                    {[...Array(Math.floor(product.rating))].map((s, i) => (

                        <img alt={'starFull'} className={styles.star} src={starFull} />

                    ))}


                    {[...Array(Math.ceil(5 - product.rating))].map((s, i) => (

                        <img alt={'starEmpty'} className={styles.star} src={starEmpty} />

                    ))}

                </div>

                <div className={styles.rating}>
                    {product.rating} of 5
                </div>

                <div className={styles.numberOfRatings}>
                    {product.numberOfRatings} Rates
                </div>


            </div>


            <div className={styles.pricing}>

                <div className={styles.discountedPrice}>

                    {product.discountedPrice}&nbsp;

                    <div className={styles.discountedPriceCurrency}>{" LE"}</div>



                </div>

                <div className={styles.price}>

                    {product.price}&nbsp;

                    <div className={styles.priceCurrency}>{" LE"}</div>



                </div>
                <div className={styles.discountPercentage}>{product.discountPercentage} Off</div>
            </div>

            <div className={styles.hr}></div>



            <div className={styles.subtitle}>Size</div>

            <div className={styles.sizes}>
                {product.sizes.map((s, i) => (

                    <div key={i} className={`${styles.sizeDiv} ${!s.available ? styles.sizeDivDisabled : ''}`}>{s.type}</div>

                ))}
            </div>




            <div className={styles.hr}></div>

            <div className={styles.subtitle}>Color</div>

            <div className={styles.colors}>

                {product.colors.map((c, i) => (

                    <img key={i} alt={c} className={styles.color} src={require(`../../../images/${c}`)} />

                ))}
            </div>




            <div className={styles.hr}></div>

            <div className={styles.subtitle}>Quantity</div>


            <div className={styles.quantity}>
                <div className={styles.circle} onClick={decrementQuantity}>
                    <img alt={'minus'} className={styles.minus} src={minus} />
                </div>
                <div className={styles.quantityText}>{quantity}</div>
                <div className={styles.circle}>
                    <img alt={'plus'} className={styles.plus} src={plus} onClick={incrementQuantity} />
                </div>

            </div>


            <div className={styles.actions}>

            <div className={styles.addToCart}>
            Add To Cart
                </div>

                <div className={styles.pickup}>
                Pickup From Store
            </div>

            </div>






        </div>
    )
}
