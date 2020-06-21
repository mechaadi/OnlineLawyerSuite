/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import app from "./css/app.module.css";
import Navbar from "../Components/Navbar/Navbar.js";
import Footer from "../Components/Footer/Footer";
import LeftRight from "../Components/LeftRightLeft/LeftRight";
import RightLeft from "../Components/LeftRightLeft/RightLeft";
import Membership from "../Components/Membership/Membership";
import CTA from "../Components/CTA/CTA.js";
import Testimonials from "../Components/Testimonials/Testimonials.js";
import Button from "../Components/Buttons/Button";

function About() {
  const [contactModal, setContactModal] = useState(false);
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactMessage, setContactMessage] = useState("");

  const handleNameChange = (e) => {
    setContactName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setContactEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setContactMessage(e.target.value);
  };


  const handleToggleModal = (e) => {
      const modal = !contactModal
      setContactModal(modal);
  }

  const handleContactSend = () => {
    var request = new XMLHttpRequest();
    request.open(
      "POST",
      "https://discordapp.com/api/webhooks/724005233751228426/2zKwDklC6DhD1nONgQ4q38KmJZXNWupoYLjFxnYRoAfLIeaT6wwSSjBXhiBh9A1Lru4_"
    );
    request.setRequestHeader("Content-type", "application/json");
    var params = {
      username: "Messenger",
      avatar_url:
        "https://cdn.discordapp.com/attachments/715197944202002584/715198566997557338/image_1.png",
      embeds: [
        {
          author: {
            name: "Contact",
          },
          color: 15258703,
          fields: [
            {
              name: "Name",
              value: contactName,
              inline: false,
            },
            {
              name: "Email",
              value: contactEmail,
              inline: false,
            },
            {
              name: "Message",
              value: contactMessage,
            },
          ],

          footer: {
            text: "A7A LABS",
            icon_url:
              "https://cdn.discordapp.com/attachments/715197944202002584/715198566997557338/image_1.png",
          },
        },
      ],
    };
    request.send(JSON.stringify(params));
  };

  return (
    <div>
      {contactModal && (
        <div
          style={{
            position: "fixed",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            width: "100%",
            backgroundColor: "#000000aa",
            margin: "auto",
          }}
        >
          <div
            style={{
              height: 500,
              width: 500,
              backgroundColor: "white",
              borderRadius: "20px",
              boxShadow: "2px 2px 4px black",
              display: "flex",
              flexDirection: "column",
              padding: "10px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "10px",
              }}
            >
              <div>
                <h1>Contact us</h1>
              </div>
              <div>
                <h1 onClick={handleToggleModal} style={{ cursor: "pointer" }}>&#10006;</h1>
              </div>
            </div>
            <div style={{ padding: "10px", width: "95%"}}>
              <input
                onChange={handleNameChange}
                placeholder="Name"
                style={{ padding: "10px", width: "95%" }}
              ></input>
            </div>
            <div style={{ padding: "10px", width: "95%" }}>
              <input
                onChange={handleEmailChange}
                placeholder="Email"
                style={{ padding: "10px", width: "95%" }}
              ></input>
            </div>
            <div style={{ padding: "10px", width: "95%" }}>
              <textarea
                onChange={handleMessageChange}
                placeholder="Message"
                style={{ padding: "10px", width: "95%", height: 200 }}
              ></textarea>
            </div>
            <div
              style={{
                padding: "10px",
                width: "95%",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Button function={handleContactSend} name="Send"></Button>
            </div>
          </div>
        </div>
      )}
      <div className={app.body}>
        <div className={app.navbarhandler}>
          <Navbar />
        </div>
        <div className={app.jumbotron}>
          <h1>
            People become really quite remarkable when they start thinking that
            they can do things. When they believe in themselves, they have the
            first secret of success. {process.env.NEXT_SERVER_TEST_1} <br />{" "}
            <p>-Norman Vincent Peale</p>
          </h1>
        </div>
        <div className={app.section}>
          <CTA />
        </div>
        <div className={app.section}>
          <LeftRight
            title="ShortList"
            desc="We had hand-picked some of the best Lawyers, you can browse through the website and shortlist few according to your legal need, city, and specialization."
            img="https://cdn.discordapp.com/attachments/631529399203921962/715069452299010119/Scrutinize.jpg"
            alt="AOIh"
          />
        </div>
        <div className={app.specialSection}>
          <div className={app.section}>
            <RightLeft
              title="Scrutinize"
              desc="Once you’re done shortlisting, you can compare the Lawyers according to their experience on the specialization you need and also consider other things."
              img="https://cdn.discordapp.com/attachments/715197944202002584/715202495240208445/Untitled.png"
            />
          </div>
        </div>
        <div className={app.section}>
          <LeftRight
            title="Select"
            desc="Once you’re done analysing, you can select and hire the best lawyer in your area ensuring a seamless experience.
                    "
            img="https://cdn.discordapp.com/attachments/715197944202002584/715197974288007178/Untitled.png"
            alt={"wefiu"}
          />
        </div>
        <div className={app.section}>
          <Testimonials />
        </div>
        <div className={app.specialSection}>
          <div className={app.section}>
            <div className={app.membership}>
              <Membership />
            </div>
          </div>
        </div>
        <div className={app.section}>
          <div className={app.footer}>
            <h1>
              <Footer onContactClick={handleToggleModal} />
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
