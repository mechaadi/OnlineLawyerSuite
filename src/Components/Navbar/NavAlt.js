import React, { useState } from "react";
import nav from "./navbar.module.css";
import Link from 'next/link'
import { useRouter } from 'next/router'
import Button from '../Buttons/Button'


export default function NavAlt() {
    const router = useRouter()

    const [state, setstate] = useState(false);

    function handleLoginButton(event) {
    router.push('/Login')
  }

  function handleRegisterButton(event) {
    router.push('/Register')
  }

    function handleLogoClick() {
        router.push('/')
    }


    const toogle = () => {
        setstate(!state);
        console.log("Show");
        console.log(state);
    };

    return (
        <div className={nav.nav}>
            <div className={nav.logo} onClick={handleLogoClick}>
                <img src={require('../../../public/static/uplaw.png')} height={40} />
            </div>
            <div className={nav.ab}>
                <ul className={nav.items}>
                    <li className={nav.li}> Features </li>
                    <li className={nav.li}> Pricing </li>
                    <li className={nav.li}> Community </li>
                    <li className={nav.li}> Support </li>
                </ul>
                <ul className={nav.navbuttons}>
                    <Button name="Login" onChildClick={handleLoginButton}></Button>
                    <Button name="Register" onChildClick={handleRegisterButton}></Button>
                    {/* <Link href="../Login/Login" as={"/Login"}>
            <button className={nav.button} >
              <li className={nav.li}> Login </li>
            </button>
          </Link>
          <Link href="/Components/Register/Register" as={"/Register"}>
            <button className={nav.button}>
              <li className={nav.li}> Register</li>
            </button>
          </Link> */}
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
                            <li className={nav.li}>Pricing</li>
                            <li className={nav.li}>Community</li>
                            <li className={nav.li}>Support</li>
                            {/* <Link href="/Components/Login/Login" as={"/Login"}>
                <li className={nav.li}>Login</li>
              </Link>
              <Link href="/Components/Login/Login" as={"/Register"}>
                <li className={nav.li}>Register</li>
              </Link> */}
              <Button name="Login" onChildClick={handleLoginButton}></Button>
              <Button name="Register" onChildClick={handleRegisterButton}></Button>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
}
