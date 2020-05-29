import styles from './css/aboutLawyer.module.css';
import Nav from '../Components/Navbar/Navbar.js';
import app from './css/app.module.css';
import Button from '../Components/Buttons/Button';
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
                            <div className={styles.lawyer_cases_box}>
                                <div className={styles.lawyer_cases_name}>
                                    Where does it come from?
                                </div>
                                <div className={styles.lawyer_cases_description}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </div>
                            </div>
                            <div className={styles.lawyer_cases_box}>
                                <div className={styles.lawyer_cases_name}>
                                    Where does it come from?
                                </div>
                                <div className={styles.lawyer_cases_description}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </div>
                            </div>
                            <div className={styles.lawyer_cases_box}>
                                <div className={styles.lawyer_cases_name}>
                                    Where does it come from?
                                </div>
                                <div className={styles.lawyer_cases_description}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </div>
                                <div className={styles.lawyer_cases_readmore}>Read More...</div>
                            </div>

                        </div>


                        <div className={styles.lawyer_profile + " " + styles.flex_center}>

                            <div className={styles.lawyer_profile_picture_container}>
                                <img src="https://cdn.discordapp.com/attachments/715197944202002584/715890541312868492/Gabriel-Macht-as-Harvey-Specter-copy-5-copy.jpg" className={styles.lawyer_profile_picture} />
                            </div>
                            <div className={styles.lawyer_profile_name}>
                                Harvey Spector
                            </div>
                            <div className={styles.lawyer_profile_category}>
                                Actor
                            </div>
                            <div className={styles.lawyer_profile_about_lawyer}>
                                About Lawyer
                            </div>
                            <div style={{ display: "flex", marginBottom: 10 }}>
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
                        <div className={styles.lawyer_reviews_container}>

                            <div className={styles.lawyer_reviews_profile_pic}>
                                <img className={styles.lawyer_reviews_image} src="https://cdn.discordapp.com/attachments/715197944202002584/715890541312868492/Gabriel-Macht-as-Harvey-Specter-copy-5-copy.jpg" />
                            </div>

                            <div>
                                <div style={{ display: "flex" }}>
                                    <div className={styles.lawyer_reviews_username}>
                                        Harvey Spector
                                    </div>
                                    <div style={{ fontSize: 15, marginLeft: 10, color: "grey", marginTop: 8 }}>
                                        15 hours ago
                                    </div>
                                </div>
                                <div className={styles.lawyer_reviews_username_rating}>
                                    ⭐⭐⭐⭐⭐
                                </div>
                                <div className={styles.lawyer_reviews_username_comment}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </div>
                            </div>
                        </div>




                        <div className={styles.lawyer_reviews_container}>

                            <div className={styles.lawyer_reviews_profile_pic}>
                                <img className={styles.lawyer_reviews_image} src="https://cdn.discordapp.com/attachments/715197944202002584/715890541312868492/Gabriel-Macht-as-Harvey-Specter-copy-5-copy.jpg" />
                            </div>

                            <div>
                                <div style={{ display: "flex" }}>
                                    <div className={styles.lawyer_reviews_username}>
                                        Harvey Spector
                                    </div>
                                    <div style={{ fontSize: 15, marginLeft: 10, color: "grey", marginTop: 8 }}>
                                        15 hours ago
                                    </div>
                                </div>
                                <div className={styles.lawyer_reviews_username_rating}>
                                    ⭐⭐⭐⭐⭐
                                </div>
                                <div className={styles.lawyer_reviews_username_comment}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </div>
                            </div>
                        </div>




                    </div>


                </div>
            </div>
        </div>
    )
}

export default Lawyer;
