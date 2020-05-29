import styles from './css/aboutLawyer.module.css';
import Nav from '../Components/Navbar/Navbar.js';
import app from './css/app.module.css';
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


                    <div className={styles.lawyer_box + " " + styles.flex_center}>



                        <div className={styles.lawyer_cases_section}>
                            <div className={styles.lawyer_cases_box}>
                                <div className={styles.lawyer_cases_name}>
                                    Where does it come from?
                                </div>
                                <div className={styles.lawyer_cases_description}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </div>
                            </div>
                            <div className={styles.lawyer_cases_box}>
                                <div className={styles.lawyer_cases_name}>
                                    Where does it come from?
                                </div>
                                <div className={styles.lawyer_cases_description}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </div>
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
                        </div>
                    </div>



                    <div className={styles.laywer_reviews_section}>
                        <div className={styles.laywer_reviews_heading}>
                            Reviews
                        </div>
                        <div className={styles.laywer_reviews_container}>
                            <div className={styles.laywer_reviews_profile_pic_container}>
                                <div className={styles.laywer_reviews_profile_pic}>

                                </div>
                            </div>
                            <div className={styles.laywer_reviews_container}>
                                <div className={styles.laywer_reviews_username}>
                                    Usernmae
                                </div>
                                <div className={styles.laywer_reviews_username_rating}>
                                    ⭐⭐⭐⭐⭐⭐
                                </div>
                                <div className={styles.laywer_reviews_username_comment}>
                                    Comment...
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
