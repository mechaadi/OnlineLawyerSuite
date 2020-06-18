import React from 'react'
import styles from './css/aboutLawyer.module.css';
import Nav from '../Components/Navbar/Navbar.js';
import app from './css/app.module.css';
import Button from '../Components/Buttons/Button';
import Comment from '../Components/Comment/Comment';
import Cases from '../Components/Cases/Cases';
import Profile from '../Components/Profile/Profile';
const Lawyer = () => {
    return (
        <div>
            <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
          height: 100%;
        }
      `}</style>
            <div className={app.navbarhandler}>
                <Nav />
            </div>
            <div className={styles.lawyer_main_container + " " + styles.flex_center}>
                <div className={styles.lawyer_container}>
                    <div className={styles.lawyer_box}>
                        <div className={styles.lawyer_cases_section}>
                            <Cases />
                            <Cases />
                            <Cases />
                            <div className={styles.lawyer_cases_readmore}>Read More...</div>
                        </div>
                        <div className={styles.lawyer_profile + " " + styles.flex_center}>

                            <Profile name="Harvey Spector" type="Actor" about="About Lawyer " />

                            <div style={{ display: "flex", marginBottom: 10 , marginTop: 10 }}>
                                <div className={styles.lawyer_button}>
                                    <Button name="Hire" />
                                </div>
                                <div className={styles.lawyer_button}>
                                    <Button name="Contact Me" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.lawyer_reviews_section}>
                        <div className={styles.lawyer_reviews_heading}>
                            Reviews
                        </div>
                        <Comment
                            username="Harvey Spector" timestamp="5 hours ago" stars="⭐⭐⭐⭐⭐"
                            review="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
                        <Comment
                            username="Harvey Spector" timestamp="5 hours ago" stars="⭐⭐⭐⭐⭐"
                            review="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Lawyer;
