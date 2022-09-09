import React, { useState } from 'react'
import styles from './ImagesSection.module.scss';
// import p1 from '../../../images/p1.png';
// import p2 from '../../../images/p2.png';
// import p3 from '../../../images/p3.png';
// import p4 from '../../../images/p4.png';

import nextimg from '../../../images/nextimg.svg';
import previmg from '../../../images/previmg.svg';
import tagLogo from '../../../images/360.svg';
import { LazyLoadImage } from 'react-lazy-load-image-component';







export const ImagesSection = ({ }) => {

    let images = ['p1.png', 'p2.png', 'p3.png', 'p4.png']

    let [mainImg, setMainImg] = useState("2x" + images[0])

    // let [mainImgIndex, setMainImgIndex] = useState(0)

    const changeMainImg = (index) => {

        setMainImg("2x" + images[index])

    }

    return (
        <div className={styles.ImagesSection}>

            <div className={styles.mainImgContainer}>

                <div className={styles.tag}>
                    <img alt='tagLogo' className={styles.tagLogo} src={tagLogo} />

                </div>

                <LazyLoadImage
                    alt={'mainImg'}
                    height={568}
                    src={require(`../../../images/${mainImg}`)} // use normal <img> attributes as props
                    width={568} />

                {/* <img alt='mainImg' className={styles.mainImg} src={require(`../../../images/${mainImg}`)} /> */}
            </div>

            <div className={styles.images}>

                <img alt='previmg' className={styles.previmg} src={previmg} />

                <div className={styles.imagesRow}>

                    {images.map((img, i) => (

                        <img key={i} alt={img} className={styles.img} src={require(`../../../images/${img}`)} onClick={() => { changeMainImg(i) }} />

                    ))}

                </div>

                <img alt='nextimg' className={styles.nextimg} src={nextimg} />


            </div>
        </div>
    )
}
