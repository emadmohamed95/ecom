import React from 'react'
import styles from './Footer.module.scss';
import logoYellow from '../../images/logoYellow.svg';
import send from '../../images/send.svg';
import facebook from '../../images/facebook.svg';
import instagram from '../../images/instagram.svg';
import twitter from '../../images/twitter.svg';
import linkedin from '../../images/linkedin.svg';
import mastercard from '../../images/mastercard.png';
import visa from '../../images/visa.png';
import cod from '../../images/cod.png';
import nasnav from '../../images/nasnav.svg';



// 


export const Footer = () => {
    return (
        <div className={styles.Footer}>

            <div className={styles.container}>

                <div className={styles.infoAndLinks}>
                    <div className={styles.info}>
                        <img alt='logoYellow' className={styles.logoYellow} src={logoYellow} />

                        <div className={styles.textLines}>
                            <div className={styles.text}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</div>
                            <div className={styles.text}>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed dia </div>
                            <div className={styles.text}>m nonummy nibh euisobortis nisl ut aliqu Du feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit</div>
                        </div>
                    </div>


                    <div className={styles.vrLarge}></div>




                    <div className={styles.links}>
                        <div className={styles.subtitle}>Subscribe to our newsletter</div>
                        <div className={styles.subscribe}>
                            <div className={styles.mail}>Enter Your Mail</div>
                            <div className={styles.subscribeButton}>Subscribe
                                <img alt='send' className={styles.send} src={send} />

                            </div>
                        </div>


                        <div className={styles.linksAndSocial}>
                            <div className={styles.infoLink}>
                                <div className={styles.infoLink}>About Us</div>
                                <div className={styles.infoLink}>Contact Us</div>
                                <div className={styles.infoLink}>Track Order</div>
                                <div className={styles.infoLink}>Terms & Conditions</div>
                                <div className={styles.infoLink}>Privacy Policy</div>
                                <div className={styles.infoLink}>Sell With Us</div>
                                <div className={styles.infoLink}>Shipping And Returns</div>

                            </div>
                            <div className={styles.vr}></div>
                            <div className={styles.socialMedia}>
                                <div className={styles.mediaLink}><img alt='facebook' className={styles.mediaIcon} src={facebook} />/YESHTERY</div>
                                <div className={styles.mediaLink}><img alt='linkedin' className={styles.mediaIcon} src={linkedin} />/YESHTERY</div>
                                <div className={styles.mediaLink}><img alt='instagram' className={styles.mediaIcon} src={instagram} />/YESHTERY</div>
                                <div className={styles.mediaLink}><img alt='twitter' className={styles.mediaIcon} src={twitter} />/YESHTERY</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.hr}></div>

                <div className={styles.bottom}>

                    <div className={styles.rights}>© 2021 yeshtery, all rights reserved.</div>
                    <div className={styles.payments}>
                        <img alt='cod' className={styles.paymentsIcon} src={cod} />
                        <img alt='visa' className={styles.paymentsIcon} src={visa} />
                        <img alt='mastercard' className={styles.paymentsIcon} src={mastercard} />
                    </div>
                    <div className={styles.powered}>
                        Powered By
                        <img alt='nasnav' className={styles.nasnav} src={nasnav} />
                    </div>

                </div>

            </div>

        </div>
    )
}
