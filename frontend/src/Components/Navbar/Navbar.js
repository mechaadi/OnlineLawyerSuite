import React, { useState } from "react";
import nav from "./navbar.module.css";
import Button from '../Buttons/Button'
import Input from '../Inputs/Input.js';
import { Link } from "react-router-dom";
export default function Navbar() {

  const [state, setstate] = useState(false);

  const toogle = () => {
    setstate(!state);
    console.log("Show");
    console.log(state);
  };

  return (
    <div className={nav.nav}>
      <Link to="/" >
        <div className={nav.logo}>
          <img src={require('../../assets/images/uplawwhite.png')} height={60} />
        </div>
      </Link>
      <div className={nav.ab}>
        <ul className={nav.items}>
          <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
            <li className={nav.li}> Features </li>
          </Link>
          <Link to="/Pricing" style={{ textDecoration: 'none', color: 'black' }}>
            <li className={nav.li}> Pricing </li>
          </Link>

        </ul>
        <Input placeholder="Search" />
        <ul className={nav.navbuttons}>
          <Link to="/Login">
            <Button name="Login"></Button>
          </Link>
          <Link to="/Register">
            <Button name="Register"></Button>
          </Link>
        </ul>
      </div>
      <div className={nav.toggler} onClick={toogle}>
        <img
          src="https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/menu-alt-512.png"
          alt="toggle"
          className={nav.img}
        />
      </div>
      {state && (
        <div className={nav.overlay}>
          <div className={nav.overlay_men}>
            <ul>
              <li className={nav.li}>
                <div className={nav.overlay_close} onClick={toogle}>
                  <img
                    className={nav.overlay_close_button}
                    src="https://www.materialui.co/materialIcons/navigation/close_white_2048x2048.png"
                    alt="close"
                  />
                </div>
              </li>
              <li className={nav.li}>Features</li>
              <Link to="/Pricing">
                <li className={nav.li}>Pricing</li>
              </Link>
              <Link to="/Login">
                <li className={nav.li}>Login</li>
              </Link>
              <Link to="/Register">
                <li className={nav.li}>Register</li>
              </Link>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
