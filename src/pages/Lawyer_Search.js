import styles from './css/lawyerSearch.module.css';
import Nav from '../Components/Navbar/Navbar.js';
const Lawyer_Search = () => {
    return (
        <div>
            <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
          height: 100%;
          width: 100%;
        }
      `}</style>
            <div className={styles.navbarhandler}>
                <Nav />
            </div>
            <div className={styles.main_container + " " + styles.flex_center}>
                <div className={styles.lawyer_search_container}>





                    <div className={styles.lawyer_filter_container}>


                        <div className={styles.lawyer_filter_box}>



                            <div className={styles.lawyer_filter_box_title}>

                                Stores Supported

                             </div>

                            <div className={styles.lawyer_filter_box_heading}>

                                Stores Supported

                            </div>

                            <div className={styles.lawyer_filter_box_contaienr}>



                                <div className={styles.lawyer_filter_box_check_box_container}>
                                    <input type="checkbox" checked="checked" />
                                    <label className={styles.lawyer_filter_box_check_box_label}>
                                        One
                                    </label>
                                </div>





                            </div>


                        </div>






                    </div>










                    <div className={styles.lawyer_search_results_container}>
                        <div className={styles.lawyer_search_heading}>
                            Lawyers (0)
                        </div>
                        <div className={styles.lawyer_search_items}>






                            <div className={styles.lawyer_items_card}>
                                <div className={styles.items_card_price_container}>
                                    <div className={styles.items_card_price}>
                                        200$
                                    </div>
                                </div>
                                <div className={styles.items_card_details_container}>
                                    <div className={styles.items_card_image_container}>
                                        <div className={styles.items_card_image}>
                                            image
                                        </div>
                                        <div className={styles.items_card_name}>
                                            name
                                        </div>
                                        <div className={styles.items_card_cases}>
                                            total cases : 0
                                        </div>
                                    </div>
                                </div>
                            </div>






                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Lawyer_Search
