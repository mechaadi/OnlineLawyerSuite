import React from 'react'
import login_styles from './css/login.module.css';
import Button from '../Components/Buttons/Button';
import Input from '../Components/Inputs/Input';
import Nav from '../Components/Navbar/Navbar.js'
import app from './css/app.module.css';
import { login } from "../api/user"
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Login = () => {
    const [Email, setEmail] = useState('');

    const [Password, setPassword] = useState('');

    // const router = useRouter()
    function handleLoginButton() {
        login(Email, Password);
        console.log("I called");
    }

    function handleRegisterButton(event) {
        // console.log("dab raha hu lawde")
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
        console.log(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
        console.log(e.target.value);
    }

    // useEffect(() => {
    //     return () => {
    //         {Email}
    //     }
    // }, )

    return (
        <div>
            <style jsx global>{`
      body {
        background: #e5e5e5;
      }
    `}</style>
            <div className={app.navbarhandler}>
                <Nav />
            </div>
            <div className={login_styles.body}>
                <div className={login_styles.login + ' ' + login_styles.flex_center}>
                    <div className={login_styles.main + ' ' + login_styles.flex_center}>
                        <div className={login_styles.header}>
                            Welcome Back. {process.env.NEXT_APP_API_URL}
                        </div>
                        <div className={login_styles.subheader}>
                            Login to get access.
                </div>
                        <div className={login_styles.box + ' ' + login_styles.flex_center}>


                            <div className={login_styles.form}>
                                <div className={login_styles.box_title}>
                                    Login
                                </div>

                            </div>
                            <div className={login_styles.formc}>

                                <div className={login_styles.border}>
                                    <Input placeholder="Email Address" onChange={handleEmailChange} autoComplete={true} type="email" />
                                </div>
                                <div className={login_styles.border}>
                                    <Input placeholder="Enter Password" onChange={handlePasswordChange} autoComplete={false} type="password" />
                                </div>

                            </div>
                            <div className={login_styles.buttons}>
                                {/* <Link to="/Lawyer" > */}
                                <Button function={handleLoginButton} name="Login" />
                                {/*  </Link> */}
                                {/* <Link to="/Register">*/}
                                <Button function={handleRegisterButton} name="Register" />
                                {/*  </Link> */}
                            </div>
                        </div>
                    </div>
                    <div className={login_styles.membership}>
                        <div className={login_styles.mem_left}>
                            <div className={login_styles.mem_text}>Enjoy our exclusive service with uplaw Premium with high prioritiy acess and other benifits  </div>
                        </div>
                        <div className={login_styles.mem_right}>
                            {/* <Link to="/" > */}
                            <Button name="Join Today" />
                            {/*  </Link>  */}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login