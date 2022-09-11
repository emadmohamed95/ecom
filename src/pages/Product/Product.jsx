import React, { useEffect, useState } from 'react'
import { DescriptionSection } from '../../components/Product/DescriptionSection/DescriptionSection';
import { ImagesSection } from '../../components/Product/ImagesSection/ImagesSection';
import { SimilarProducts } from '../../components/Product/SimilarProducts/SimilarProducts';
import styles from './Product.module.scss';
import { getProduct } from '../../services/dataAPI'


export const Product = ({ addToCart }) => {




  const [product, setProduct] = useState();


  useEffect(() => {
    let prod = getProduct()
    setProduct(prod)
  }, []);

  let [quantity, setQuantity] = useState(1)


  const incrementQuantity = () => {
    setQuantity(quantity + 1)
  }

  const decrementQuantity = () => {
    if (quantity !== 1) {
      setQuantity(quantity - 1)
    }

  }

  const addProductToCart = () => {

    let totalPrice = (product?parseFloat(product.discountedPrice.replace(/,/g, '')):0) * quantity

    let cartProduct = {
      title:product?product.title:'',
      quantity:quantity,
      mainImg:product?product.images[0]:'',
      price:product?product.discountedPrice:0,
      totalPrice:totalPrice
    }

    addToCart(cartProduct)


  }


  return (
    <div className={styles.Product}>

      <div className={styles.container}>

        <div className={styles.productInfo}>
          <ImagesSection images={product?.images ? product.images : []} />
          <DescriptionSection product={product} quantity={quantity} incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity} addProductToCart={addProductToCart} />
        </div>

        <SimilarProducts similarProducts={product?.similarProducts ? product.similarProducts : []} />

      </div>


    </div>
  )
}
