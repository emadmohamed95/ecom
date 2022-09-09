import React, { useState } from 'react'
import styles from './SimilarProducts.module.scss';


// import adidasSmall from '../../../images/adidasSmall.svg';
import starFull from '../../../images/starFull.svg';
import starEmpty from '../../../images/starEmpty.svg';

import minus from '../../../images/minus.svg';
import plus from '../../../images/plus.svg';
import { Card } from '../Card/Card';







export const SimilarProducts = ({ }) => {

    let similarProducts = [{
        image:'sp1.png',
        title:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        logo: 'adidasSmall.svg',
        rating: 4.2,
        price: '19,999',
        discountedPrice: '9,999',
        discountPercentage: '50%',
        shipment:{
            type: 'pickup', //pickup, delivery
            from:'Genena Mall',
            to:'',
            in:''
        }
    },
    {
        image:'sp2.png',
        title:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        logo: 'adidasSmall.svg',
        rating: 4.2,
        price: '',
        discountedPrice: '9,999',
        discountPercentage: '',
        shipment:{
            type: 'delivery', //pickup, delivery
            from:'UK',
            to:'Egypt',
            in:'10 Days'
        }
    },
    {
        image:'sp3.png',
        title:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        logo: 'adidasSmall.svg',
        rating: 4.2,
        price: '12,999',
        discountedPrice: '9,999',
        discountPercentage: '30%',
        shipment:{
            type: 'pickup', //pickup, delivery
            from:'Genena Mall',
            to:'',
            in:''
        }
    },
    {
        image:'sp4.png',
        title:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        logo: 'adidasSmall.svg',
        rating: 4.2,
        price: '19,999',
        discountedPrice: '9,999',
        discountPercentage: '50%',
        shipmentType:'local', //local,abroad
        shipment:{
            type: 'delivery', //pickup, delivery
            from:'Egypt',
            to:'Egypt',
            in:'2 Days'
        }
    },
    {
        image:'sp1.png',
        title:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        logo: 'adidasSmall.svg',
        rating: 4.2,
        price: '19,999',
        discountedPrice: '9,999',
        discountPercentage: '50%',
        shipment:{
            type: 'pickup', //pickup, delivery
            from:'Genena Mall',
            to:'',
            in:''
        }
    },
    {
        image:'sp2.png',
        title:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        logo: 'adidasSmall.svg',
        rating: 4.2,
        price: '',
        discountedPrice: '9,999',
        discountPercentage: '',
        shipment:{
            type: 'delivery', //pickup, delivery
            from:'UK',
            to:'Egypt',
            in:'10 Days'
        }
    },
    {
        image:'sp3.png',
        title:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        logo: 'adidasSmall.svg',
        rating: 4.2,
        price: '12,999',
        discountedPrice: '9,999',
        discountPercentage: '30%',
        shipment:{
            type: 'pickup', //pickup, delivery
            from:'Genena Mall',
            to:'',
            in:''
        }
    },
    {
        image:'sp4.png',
        title:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        logo: 'adidasSmall.svg',
        rating: 4.2,
        price: '19,999',
        discountedPrice: '9,999',
        discountPercentage: '50%',
        shipmentType:'local', //local,abroad
        shipment:{
            type: 'delivery', //pickup, delivery
            from:'Egypt',
            to:'Egypt',
            in:'2 Days'
        }
    }


]


    return (
        <div className={styles.SimilarProducts}>
            
            <div className={styles.title}>Similar Products</div>
            <div className={styles.subtitle}>You may like these products also</div>

            <div className={styles.cards}>
                {similarProducts.map((sp,i)=>(
                    <Card key={i} similarProduct={sp}/>
                ))}
            </div>


        </div>
    )
}
