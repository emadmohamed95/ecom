import React from 'react'
import { DescriptionSection } from '../../components/Product/DescriptionSection/DescriptionSection';
import { ImagesSection } from '../../components/Product/ImagesSection/ImagesSection';
import { SimilarProducts } from '../../components/Product/SimilarProducts/SimilarProducts';
import styles from './Product.module.scss';


export const Product = () => {
  return (
    <div className={styles.Product}>

      <div className={styles.container}>

      <div className={styles.productInfo}>
      <ImagesSection/>
        <DescriptionSection/>
      </div>

      <SimilarProducts/>
        
      </div>

      
    </div>
  )
}
