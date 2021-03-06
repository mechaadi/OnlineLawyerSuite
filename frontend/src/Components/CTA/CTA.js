/* eslint-disable react/jsx-no-duplicate-props */
import styles from './CTA.module.css';
import LightButton from '../Buttons/LightButton'
import React from 'react'
const Component = () => {
    return (
        <div className={styles.main}>
            <div className={styles.h1}> Brief Features on Uplaw </div>
            <div className={styles.ABContainer}>
                <div className={styles.A}>
                    <div className={styles.one}>
                        <div className={styles.infographic + " " + styles.infographic_one}>
                        <div className={styles.heading}>
                            Search
                    </div>
                        <div className={styles.description}>
                            Search for lawyers nearby your location and as per your law requirements.
                    </div>
                        <div className={styles.button} className={styles.Abutton}>
                            <LightButton name="Learn More" />
                            </div>
                            </div>
                    </div>
                    <div className={styles.one}>
                    <div className={styles.infographic + " " + styles.infographic_two}>
                        <div className={styles.heading}>
                            Book Anywhere 
                    </div>
                        <div className={styles.description}>
                            Book messages / voice / video consultation with best lawyers of India &.&nbsp;&nbsp;&nbsp;&nbsp; 
                    </div>
                        <div className={styles.button} className={styles.Abutton}>
                            <LightButton name="Learn More" />
                            </div>
                            </div>
                    </div>
                </div>
                <div className={styles.A}>
                    <div className={styles.one}>
                    <div className={styles.infographic + " " + styles.infographic_three}>
                        <div className={styles.heading}>
                            Know as you go
                    </div>
                        <div className={styles.description}>
                        Get notifications when someone give you legal advice and follow you.
                                 
                            
                    </div>
                        <div className={styles.button}>
                            <LightButton name="Learn More" />
                            </div>
                            </div>
                    </div>
                    <div className={styles.one}>
                    <div className={styles.infographic + " " + styles.infographic_four}>
                        <div className={styles.heading}>
                            Arrange Meetings as you like it
                            
                    </div>
                        <div className={styles.description}>
                            Have a meeting consultation with experience Lawyer at his/her office.
                            
                    </div>
                        <div className={styles.button}>
                            <LightButton name="Learn More" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Component