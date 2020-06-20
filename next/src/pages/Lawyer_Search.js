import styles from './css/lawyerSearch.module.css';
import Nav from '../Components/Navbar/Navbar.js';
import Chips from '../Components/Chips/Chips';
import Card from '../Components/Card/Card';
import Filter from '../Components/Filters/Filter';
import Input from '../Components/Inputs/Input.js';
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
                                <Chips name="Personal Injury" />
                                <Chips name="Bankruptcy" />
                                <Chips name="Estate Planning" />
                            </div>
                            <Filter filter_title="Supported Category" />
                            <Filter filter_title="Other Category" />
                        </div>
                    </div>
                    <div className={styles.lawyer_search_results_container}>
                        <div className={styles.search_bar}>
                            <Input placeholder="Search For Lawyers ..." />
                            <div className={styles.search_icon_container}>
                                <img alt="" src="https://cdn.discordapp.com/attachments/715197944202002584/716624918674145280/icons8-search-96.png" style={{ height: "90%", width: "90%", objectFit: "cover" }}/>
                            </div>
                        </div>

                        <div className={styles.lawyer_search_heading}>
                            Lawyers (0)
                        </div>
                        <div className={styles.lawyer_search_items}>

                            <Card price="69" name="Harvey" total_cases="12" />

                            <Card price="420" name="Spector" total_cases="22" />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Lawyer_Search
