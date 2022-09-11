import React from 'react'
import styles from './Card.module.scss';

import tagLogo from '../../../images/360.svg';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import starFull from '../../../images/starFull.svg';
import starEmpty from '../../../images/starEmpty.svg';






export const Card = ({ similarProduct }) => {

    // let similarProducts = [{
    //     image:'',
    //     title:'',
    //     logo: 'adidasSmall.svg',
    //     rating: 4.9,
    //     price: '12,999',
    //     discountedPrice: '9,999',
    //     discountPercentage: '30%',
    //     shipmentType:'local', //local,abroad
    //     shipment:{
    //         type: 'pickup', //pickup, delivery
    //         from:'Genena Mall',
    //         to:'',
    //         in:''
    //     }
    // }]

    // let product = {
    //         image:'sp1.png',
    //         title:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    //         logo: 'adidasSmall.svg',
    //         rating: 4.2,
    //         price: '19,999',
    //         discountedPrice: '9,999',
    //         discountPercentage: '50%',
    //         shipmentType:'local', //local,abroad
    //         shipment:{
    //             type: 'pickup', //pickup, delivery
    //             from:'Genena Mall',
    //             to:'',
    //             in:''
    //         }
    //     }

    return (
        <div className={styles.Card}>

            <div className={styles.mainImgContainer}>

                <div className={styles.tag}>
                    <img alt='tagLogo' className={styles.tagLogo} src={tagLogo} />

                </div>

                <LazyLoadImage
                    alt={'cardimage'}
                    height={254}
                    src={require(`../../../images/${similarProduct.image}`)} // use normal <img> attributes as props
                    width={254} />

                {/* <img alt='mainImg' className={styles.mainImg} src={require(`../../../images/${mainImg}`)} /> */}
            </div>

            <div className={styles.title}>{similarProduct.title}</div>


            <div className={styles.pricingContainer}>
                <div className={styles.pricing}>

                    <div className={styles.discountedPrice}>

                        {similarProduct.discountedPrice}&nbsp;

                        <div className={styles.discountedPriceCurrency}>{" LE"}</div>



                    </div>

                    {similarProduct.discountPercentage !== '' ? <>

                        <div className={styles.price}>

                            {similarProduct.price}&nbsp;

                            <div className={styles.priceCurrency}>{" LE"}</div>



                        </div>
                        <div className={styles.discountPercentage}>{similarProduct.discountPercentage} Off</div>
                    </> : ''}
                </div>
                <img alt='logo' className={styles.logo} src={require(`../../../images/${similarProduct.logo}`)} />
            </div>

            <div className={styles.ratings}>

                <div className={styles.stars}>

                    {[...Array(Math.floor(similarProduct.rating))].map((s, i) => (

                        <img key={i} alt={'starFull'} className={styles.star} src={starFull} />

                    ))}


                    {[...Array(Math.ceil(5 - similarProduct.rating))].map((s, i) => (

                        <img key={i} alt={'starEmpty'} className={styles.star} src={starEmpty} />

                    ))}

                </div>

                <div className={styles.rating}>
                    {similarProduct.rating} of 5
                </div>

            </div>


            <div className={`${styles.shipment} ${similarProduct.shipment.type === 'pickup' ? styles.shipmentPickup : ''}`}>

                <div className={styles.label}>{similarProduct.shipment.type === 'pickup' ? 'Pickup' : ''} From:&nbsp;<div className={styles.text}>{similarProduct.shipment.from}</div></div>

                {similarProduct.shipment.type !== 'pickup' ? <><div className={styles.label}>To: &nbsp;<div className={styles.text}>{similarProduct.shipment.to}</div></div>
                    <div className={styles.label}>in: &nbsp;<div className={styles.text}>{similarProduct.shipment.in}</div></div>
                </> : ''}

            </div>


        </div>
    )
}
