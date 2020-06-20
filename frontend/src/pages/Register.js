/* eslint-disable no-unused-vars */
import register_styles from './css/register.module.css';
import React from 'react'
import Button from '../Components/Buttons/Button';
import Input from '../Components/Inputs/Input';
import Nav from '../Components/Navbar/Navbar.js'
import app from './css/app.module.css';
import { register } from "../api/user"
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {

    const [FirstName, setFirstName] = useState();
    const [LastName, setLastName] = useState();
    const [EmailAddress, setEmailAddress] = useState();
    const [Password, setPassword] = useState();
    const [fullName, setfullName] = useState()
    const [Type, setType] = useState(1);

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
    }
    const handleLastName = (e) => {
        setLastName(e.target.value);
    }
    const handleEmailAddress = (e) => {
        setEmailAddress(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }
    const handleType = (e) => {
        console.log(Type, e.target.value);
        if (e.target.value == "Lawyer")
            setType(1)
        else
            setType(0)
    }

    const fullNameHandle = () => {
        var fullName = (FirstName + " " + LastName)
        setfullName(fullName);
        console.log(fullName);
    }

    // const router = useRouter();


    function handleRegisterButton(event) {
        fullNameHandle()
        const username = EmailAddress.split('@')[0]
        console.log(EmailAddress, "   asdas")
        console.log("registering..", fullName, Type);
        const resp = register(EmailAddress, Password, username, Type, 0,"" ,"this is about", FirstName + " " + LastName)

    }

    function handleLoginButton(event) {
        // router.push('/Login')
    }

    useState(()=>{
        setType(0)
        console.log(Type)
    }, [])



    return (
        <div style={{ background: "#e5e5e5" }}>
            <div className={app.navbarhandler}>
                <Nav />
            </div>
            <div className={register_styles.body + ' ' + register_styles.flex_center}>
                <div className={register_styles.register}>
                    <div className={register_styles.main + ' ' + register_styles.flex_center}>
                        <div className={register_styles.header}>
                            Ready to Take a Free trial?
                </div>
                        <div className={register_styles.subheader}>
                            Create an account at uplaw. Make sure to select you preference as a lawyer or as an user.
                </div>
                        <div className={register_styles.box + ' ' + register_styles.flex_center}>


                            <div className={register_styles.form}>
                                <div className={register_styles.box_title}>
                                    Sign up for a free account
                                </div>
                                <div className={register_styles.form_row}>
                                    <div className={register_styles.border}>
                                        <Input placeholder="First Name" onChange={handleFirstName} autoComplete={true} type="name" />
                                    </div>
                                    <div className={register_styles.border}>
                                        <Input placeholder="Last Name" onChange={handleLastName} autoComplete={true} type="name" />
                                    </div>
                                </div>
                            </div>
                            <div className={register_styles.formc}>

                                <div className={register_styles.border}>
                                    <Input placeholder="Email Address" onChange={handleEmailAddress} autoComplete={true} type="email" />
                                </div>
                                <div className={register_styles.border}>
                                    <Input placeholder="Create Password" onChange={handlePassword} autoComplete={false} type="password" />
                                </div>

                            </div>
                            <div className={register_styles.buttons}>
                                {/*<Link to="/Lawyer"> */}
                                <Button function={handleRegisterButton} name="Register" />
                                {/*  </Link>  */}
                                <Link to="/Login">
                                    <Button function={handleLoginButton} name="Login" />
                                </Link>
                                <select className={register_styles.select} onChange={handleType} >
                                    <option className={register_styles.option} >User</option><option className={register_styles.option}>Lawyer</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className={register_styles.membership}>
                        <div className={register_styles.mem_left}>
                            <div className={register_styles.mem_content}>
                                Membership
                                 </div>
                            <div className={register_styles.mem_text}>Enjoy our exclusive service with uplaw Premium with high prioritiy acess and other benifits </div>
                        </div>
                        <div className={register_styles.mem_right}>
                            <Link to="/"  >
                                <Button name="Join Today" />
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Register