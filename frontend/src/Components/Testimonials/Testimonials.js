import styles from "./Testimonials.module.css";
import React from 'react'
const Component = () => {
    return(
        <div className={styles.main}>
            <div className={styles.heading}>
                Testimonials
            </div>
            
            <div className={styles.description}>
            We have some of the best reviews , from consulting to legal advices. Have a look at it!
                
            </div>
            <div className ={styles.box}>
            <div className={styles.A}>
                <div className={styles.testimonialBox}><div className={styles.one}></div></div>
                <div className={styles.testimonialBox}><div className={styles.one}></div></div>
                <div className={styles.testimonialBox}><div className={styles.one}></div></div>
                <div className={styles.testimonialBox}><div className={styles.one}></div></div> 
            </div>
            <div className={styles.A}>
                <div className={styles.testimonialBox}><div className={styles.one}></div></div>
                <div className={styles.testimonialBox}><div className={styles.one}></div></div>
                <div className={styles.testimonialBox}><div className={styles.one}></div></div>
                <div className={styles.testimonialBox}><div className={styles.one}></div></div> 
            </div>
            </div>
        </div>
    )
}

export default Component