import React from 'react'
import styles from './Breadcrumbs.module.scss';






export const Breadcrumbs = () => {
    // Men / Clothing / Tops / Adidas / Adidas Black T-Shirt
    // let breadcrumbs = ['Men','Clothing','Tops','Adidas','Adidas Black T-Shirt']

    return (
        <div className={styles.Breadcrumbs}>

            <div className={styles.container}>

            <div className={styles.text}><u>Men</u> / <u>Clothing</u> / <u>Tops</u> / <u>Adidas</u> / Adidas Black T-Shirt</div>

                {/* {breadcrumbs.map((bc,i)=>{
                
                return(
                <div className={styles.text}>Men</div>
                )
                })} */}

               
            </div>

        </div>
    )
}
