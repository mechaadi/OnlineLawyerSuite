import styles from './css/lawyerSearch.module.css';
import Nav from '../Components/Navbar/Navbar.js';
import Chips from '../Components/Chips/Chips';
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
            <div className={styles.main_container}>
                
    
                <div className={styles.lawyer_search_container}>

                    <div className={styles.lawyer_filter_container}>


                        <div className={styles.lawyer_filter_box}>

                            <div className={styles.lawyer_filter_box_title}>

                                Filters

                             </div>


                            <div className={styles.laywer_filter_cheecked_items_container}>




                                <Chips name= "Adidas"/> 


                                







                            </div>

                            <div>
                                <div className={styles.lawyer_filter_box_heading}>

                                    Stores Supported

                            </div>

                                <div className={styles.lawyer_filter_box_contaienr}>



                                    <div className={styles.lawyer_filter_box_check_box_container}>

                                        <input type="checkbox" style={{ border: "red", width: 20, height: 20 }} />

                                        <div className={styles.checkbox}>
                                            One
                                    </div>


                                    </div>







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
                                        ₹200
                                    </div>
                                </div>
                                <div className={styles.items_card_details_container}>
                                    <div className={styles.items_card_image_container}>
                                        <img src = "https://cdn.discordapp.com/attachments/715197944202002584/715890541312868492/Gabriel-Macht-as-Harvey-Specter-copy-5-copy.jpg" className={styles.items_card_image}/>
                                        
                                    </div>
                                    <div className={styles.items_card_name}>
                                        Harvey Spector
                                        </div>
                                    <div className={styles.items_card_cases}>
                                        total cases : 0
                                        </div>
                                </div>
                            </div>






                            <div className={styles.lawyer_items_card}>
                                <div className={styles.items_card_price_container}>
                                    <div className={styles.items_card_price}>
                                        ₹200
                                    </div>
                                </div>
                                <div className={styles.items_card_details_container}>
                                    <div className={styles.items_card_image_container}>
                                        <img src = "https://cdn.discordapp.com/attachments/715197944202002584/715890541312868492/Gabriel-Macht-as-Harvey-Specter-copy-5-copy.jpg" className={styles.items_card_image}/>
                                        
                                    </div>
                                    <div className={styles.items_card_name}>
                                        Harvey Spector
                                        </div>
                                    <div className={styles.items_card_cases}>
                                        total cases : 0
                                        </div>
                                </div>
                            </div>
                            



                            

                            <div className={styles.lawyer_items_card}>
                                <div className={styles.items_card_price_container}>
                                    <div className={styles.items_card_price}>
                                        ₹200
                                    </div>
                                </div>
                                <div className={styles.items_card_details_container}>
                                    <div className={styles.items_card_image_container}>
                                        <img src = "https://cdn.discordapp.com/attachments/715197944202002584/715890541312868492/Gabriel-Macht-as-Harvey-Specter-copy-5-copy.jpg" className={styles.items_card_image}/>
                                        
                                    </div>
                                    <div className={styles.items_card_name}>
                                        Harvey Spector
                                        </div>
                                    <div className={styles.items_card_cases}>
                                        total cases : 0
                                        </div>
                                </div>
                            </div>
                            




                            

                            <div className={styles.lawyer_items_card}>
                                <div className={styles.items_card_price_container}>
                                    <div className={styles.items_card_price}>
                                        ₹200
                                    </div>
                                </div>
                                <div className={styles.items_card_details_container}>
                                    <div className={styles.items_card_image_container}>
                                        <img src = "https://cdn.discordapp.com/attachments/715197944202002584/715890541312868492/Gabriel-Macht-as-Harvey-Specter-copy-5-copy.jpg" className={styles.items_card_image}/>
                                        
                                    </div>
                                    <div className={styles.items_card_name}>
                                        Harvey Spector
                                        </div>
                                    <div className={styles.items_card_cases}>
                                        total cases : 0
                                        </div>
                                </div>
                            </div>
                            



                            

                            <div className={styles.lawyer_items_card}>
                                <div className={styles.items_card_price_container}>
                                    <div className={styles.items_card_price}>
                                        ₹200
                                    </div>
                                </div>
                                <div className={styles.items_card_details_container}>
                                    <div className={styles.items_card_image_container}>
                                        <img src = "https://cdn.discordapp.com/attachments/715197944202002584/715890541312868492/Gabriel-Macht-as-Harvey-Specter-copy-5-copy.jpg" className={styles.items_card_image}/>
                                        
                                    </div>
                                    <div className={styles.items_card_name}>
                                        Harvey Spector
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
    )
}

export default Lawyer_Search
