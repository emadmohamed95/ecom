import React from 'react'
import styles from './SimilarProducts.module.scss';
import { Card } from '../Card/Card';







export const SimilarProducts = ({ similarProducts }) => {

    return (
        <div className={styles.SimilarProducts}>
            
            <div className={styles.title}>Similar Products</div>
            <div className={styles.subtitle}>You may like these products also</div>

            <div className={styles.cards}>
                {similarProducts?similarProducts.map((sp,i)=>(
                    <Card key={i} similarProduct={sp}/>
                )):''}
            </div>


        </div>
    )
}
