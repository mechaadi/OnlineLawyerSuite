import React, { useState } from "react";
import nav from "./navbar.module.css";
import Button from '../Buttons/Button'
import Input from '../Inputs/Input.js';
export default function Navbar() {

  // const router = useRouter()

  function handleLoginButton(event) {
    // router.push('/Login')
  }

  function handleRegisterButton(event) {
    // router.push('/Register')
  }

  function handleLogoClick() {
    // router.push('/')
  }

  function handlePricing() {
    // router.push('/Pricing')
  }

  const [state, setstate] = useState(false);

  const toogle = () => {
    setstate(!state);
    console.log("Show");
    console.log(state);
  };

  return (
    <div className={nav.nav}>
      <div className={nav.logo} onClick={handleLogoClick}>
        <img src={require('../../assets/images/uplawwhite.png')} height={60} />
      </div>
      <div className={nav.ab}>
        <ul className={nav.items}>
          <li className={nav.li}> Features </li>
          <li className={nav.li} onClick={handlePricing}> Pricing </li>
          <li className={nav.li}> Community </li>
          <li className={nav.li}> Support </li>
          
        </ul>
        <Input placeholder = "Search"/>
        <ul className={nav.navbuttons}>

          <Button name="Login" onChildClick={handleLoginButton}></Button>
          <Button name="Register" onChildClick={handleRegisterButton}></Button>
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
              <li className={nav.li} onClick={handlePricing}>Pricing</li>
              <li className={nav.li}>Community</li>
              <li className={nav.li}>Support</li>
              <li className={nav.li} onClick={handleLoginButton}>Login</li>
              <li className={nav.li} onClick={handleRegisterButton}>Register</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
