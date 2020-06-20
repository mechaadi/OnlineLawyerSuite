import styles from './css/pricing.module.css';
import Banner from '../Components/Banner/Banner';
import React from 'react';
import Nav from '../Components/Navbar/Navbar';
const Pricing = () => {
    return (
        <div>
            <div className = {styles.navbarhandler}>
                <Nav />
            </div>
            <div className={styles.main_container}>

                <div className={styles.container}>
                    <div className={styles.heading}>
                        Simple Pricing
                    </div>
                    <div className={styles.sub_heading}>
                        No subscription required. Just download and use
                    </div>
                    <div className={styles.banner_container}>
                        <Banner
                            planName="Basic"
                            price="200 INR/Month"
                            description="Get Started With Basic plan." point_zero="Key Point"
                            point_one="Key Point"
                            button="Button" />
                        <Banner
                            planName="Pro"
                            price="500 INR/Month"
                            description="Experience the pro membership." point_zero="Key Point"
                            point_one="Key Point"
                            button="Button" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing
