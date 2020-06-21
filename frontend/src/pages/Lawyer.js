/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import styles from "./css/aboutLawyer.module.css";
import Nav from "../Components/Navbar/Navbar.js";
import app from "./css/app.module.css";
import Button from "../Components/Buttons/Button";
import Comment from "../Components/Comment/Comment";
import Cases from "../Components/Cases/Cases";
import Profile from "../Components/Profile/Profile";
import { useLocation } from "react-router-dom";
import { getLawyerByUsername, addReview, getReviews } from "../api/lawyers";
import {getAllCases} from "../api/cases"

const Lawyer = (props) => {
  const location = useLocation();
  const [lawyer, setLawyer] = useState({
    name: "",
    profile_picture: "",
    about: "",
    id: "",
  });

  const [review, setReview] = useState("");
  const [stars, setStars] = useState(0);
  const [reviews, setReviews] = useState([]);

  const [cases, setCases] = useState([])

  useEffect(() => {
    console.log(location.state);
    async function getLawyerDetails() {
      const lawyerDetails = await getLawyerByUsername(location.state);
      setLawyer(lawyerDetails.data);
      const reviews = await getReviews(lawyerDetails.data.id);
      setReviews(reviews.data);

      const resp = await getAllCases(lawyerDetails.data.id)
      setCases(resp.data)
    }
    getLawyerDetails();
  }, [location]);

  const handleSubmitReview = async () => {
    await addReview(lawyer.id, review, stars);
    const reviews = await getReviews(lawyer.id);
    setReviews(reviews.data);
    
  };

  const handleReviewChange = (e) => {
    setReview(e.target.value);
  };

  const handleStarCountChange = (e) => {
    setStars(parseInt(e.target.value));
  };

  return (
    <div>
      <div className={app.navbarhandler}>
        <Nav />
      </div>
      <div className={styles.lawyer_main_container + " " + styles.flex_center}>
        <div className={styles.lawyer_container}>
          <div className={styles.lawyer_box}>
            <div className={styles.lawyer_cases_section}>
            {cases.map((caseObj) => (
                      <div
                        style={{
                          width: "100%",
                          boxShadow: "0px 2px 4px black",
                          borderRadius: 8,
                          padding: 10,
                          marginTop: 10,
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <h3>
                          {caseObj.title}{" "}
                          <span style={{ fontSize: 10 }}>{caseObj.pub_at}</span>
                        </h3>
                        <div
                          style={{
                            width: "100%",
                            height: 2,
                            backgroundColor: "grey",
                            marginBottom: 4,
                            marginTop: 4,
                          }}
                        >
                          {" "}
                        </div>
                        <div>
                          <h4>Client</h4>
                          <h5>Email: {caseObj.user.email}</h5>
                          <h5>Name: {caseObj.user.name}</h5>
                        </div>

                        <div
                          style={{
                            width: "100%",
                            height: 2,
                            backgroundColor: "grey",
                            marginTop: 4,
                            marginBottom: 4,
                          }}
                        ></div>
                        <p>{caseObj.description}</p>
                      </div>
                    ))}
              <div className={styles.lawyer_cases_readmore}>Read More...</div>
            </div>
            <div className={styles.lawyer_profile + " " + styles.flex_center}>
              <Profile
                image={
                  process.env.REACT_APP_API_URL +
                  "/files/" +
                  lawyer.profile_picture
                }
                name={lawyer.name}
                type=""
                about={lawyer.about}
              />

              <div style={{ display: "flex", marginBottom: 10, marginTop: 10 }}>
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
            <div className={styles.lawyer_reviews_heading}>Reviews</div>
            <textarea
              onChange={handleReviewChange}
              placeholder="Write a review"
              style={{ height: 60, padding: 10 }}
            ></textarea>
            <input
              onChange={handleStarCountChange}
              placeholder="star count"
              style={{ padding: 10 }}
            ></input>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <Button name="Submit" function={handleSubmitReview}></Button>
            </div>
            {reviews.map((review) => (
              <Comment
                username={review.user.name}
                timestamp={review.pub_at}
                stars={review.stars}
                review={review.review}
                image={`${process.env.REACT_APP_API_URL}/files/${review.user.profile_picture}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lawyer;
