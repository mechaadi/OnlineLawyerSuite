/* eslint-disable jsx-a11y/alt-text */
import styles from "./css/lawyerSearch.module.css";
import React, { useEffect, useState } from "react";
import {useHistory} from 'react-router-dom'
import Nav from "../Components/Navbar/Navbar.js";
import Chips from "../Components/Chips/Chips";
import Card from "../Components/Card/Card";
import Filter from "../Components/Filters/Filter";
import Input from "../Components/Inputs/Input.js";
import { getLawyers } from "../api/lawyers";

const Lawyer_Search = () => {

  const history = useHistory()

  const [lawyers, setLawyers] = useState([]);
  useEffect(() => {
    async function loadLawyers() {
      const lawyersList = await getLawyers();
      setLawyers(lawyersList.data);
      console.log(lawyersList.data);
    }

    loadLawyers();
  }, []);

  const handleLawyerCardClick = (e)=>{
      history.push({pathname: `/lawyer/${e}`, state: e})
  }

  return (
    <div>
      <div className={styles.navbarhandler}>
        <Nav />
      </div>
      <div className={styles.main_container}>
        <div className={styles.lawyer_search_container}>
          <div className={styles.lawyer_filter_container}>
            <div className={styles.lawyer_filter_box}>
              <div className={styles.lawyer_filter_box_title}>Filters</div>
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
                <img
                  src="https://cdn.discordapp.com/attachments/715197944202002584/716624918674145280/icons8-search-96.png"
                  style={{ height: "90%", width: "90%", objectFit: "cover" }}
                />
              </div>
            </div>

            <div className={styles.lawyer_search_heading}>
              Lawyers ({lawyers.length})
            </div>
            <div className={styles.lawyer_search_items}>
              {lawyers.map((lawyer, i) => (
                <Card key={lawyer.id} click={handleLawyerCardClick} id={lawyer.id} username={lawyer.username} price="69" image={lawyer.profile_picture} name={lawyer.name} total_cases="12" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lawyer_Search;
