import login_styles from './css/login.module.css';
import Link from 'next/link'
import Button from '../Components/Buttons/Button';
import Input from '../Components/Inputs/Input';
import Nav from '../Components/Navbar/Navbar.js'
import app from './css/app.module.css';
import { useRouter } from "next/router"
import { login } from "../api/user"
import { useState, useEffect } from 'react';

const Login = () => {

    const [Email, setEmail] = useState('');

    const [Password, setPassword] = useState('');

    const router = useRouter()
    function handleLoginButton(event) {
        login(Email, Password)
    }

    function handleRegisterButton(event) {
        router.push('/Register')
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
        margin: 0;
        height: 100%;
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
                                <Button onChildClick={handleLoginButton} name="Login" />
                                <Button onChildClick={handleRegisterButton} name="Register" />
                            </div>
                        </div>
                    </div>
                    <div className={login_styles.membership}>
                        <div className={login_styles.mem_left}>
                            <div className={login_styles.mem_text}>Enjoy our exclusive service with uplaw Premium with high prioritiy acess and other benifits  </div>
                        </div>
                        <div className={login_styles.mem_right}>
                            <Link href="/" passHref >
                                <Button name="Join Today" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login