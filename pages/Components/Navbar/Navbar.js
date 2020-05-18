import React, { useState } from "react";
import "./navbar.module.css";
import Link from 'next/link'
export default function Navbar() {
  const [state, setstate] = useState(false);

  const toogle = () => {
    setstate(!state);
    console.log("Show");
    console.log(state);
  };

  return (
    <div className="nav">
      <div className="logo">Branding</div>
      <div className="ab">
        <ul className="items">
          <li> Features </li>
          <li> Pricing </li>
          <li> Community </li>
          <li> Support </li>
        </ul>
        <ul className="navbuttons">
          <Link href="/Components/Login/Login">
            <button className="button" >
              <li> Login </li>
            </button>
          </Link>
          <Link href="/Components/Register/Register">
            <button className="button">
              <li> Register</li>
            </button>
          </Link>
        </ul>
      </div>
      <div className="toggler" onClick={toogle}>
        <img
          src="https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/menu-alt-512.png"
          alt="toggle"
          className="img"
        />
      </div>
      {state && (
        <div className="overlay">
          <div className="overlay_men">
            <ul>
              <li>
                <div className="overlay_close" onClick={toogle}>
                  <img
                    className="overlay_close_button"
                    src="https://www.materialui.co/materialIcons/navigation/close_white_2048x2048.png"
                    alt="close"
                  />
                </div>
              </li>
              <li>Features</li>
              <li>Pricing</li>
              <li>Community</li>
              <li>Support</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
