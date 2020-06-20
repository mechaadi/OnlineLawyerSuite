/* eslint-disable no-unused-vars */
import register_styles from './css/register.module.css';
import React from 'react'
import Button from '../Components/Buttons/Button';
import Input from '../Components/Inputs/Input';
import Nav from '../Components/Navbar/Navbar.js'
import app from './css/app.module.css';
import { register } from "../api/user"
import { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

const Register = () => {

    const [FirstName, setFirstName] = useState();
    const [LastName, setLastName] = useState();
    const [EmailAddress, setEmailAddress] = useState();
    const [Password, setPassword] = useState();
    const [fullName, setFullName] = useState()
    const [Type, setType] = useState(1);
    const [error, setError] = useState("")
    const [registerState, setRegisterState] = useState("Register");

    const history = useHistory()

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
        if (e.target.value === "Lawyer")
            setType(1)
        else
            setType(0)
    }

    function validateEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    function validatePassword(password) {
        var re = /[a-z]\d|\d[a-z]/i;
        return re.test(password) && password.length > 8;
    }

    const fullNameHandle = () => {
        var fullName = (FirstName + " " + LastName)
        setFullName(fullName);
    }


    // register logic
    async function handleRegisterButton(event) {
        setError("")
        setRegisterState("Wait...")
        var validator = 1;
        fullNameHandle()
        if (!validateEmail(EmailAddress)) {
            setError(e => [e + "Email address not valid <br/>"])
            validator = 0;

        }
        if (!validatePassword(Password)) {
            setError(e => [e + "Password needs to be 8 chars long and should consist atleast one number"])
            validator = 0;

        }
        if (FirstName === "" || FirstName === null || FirstName === undefined) {
            setError(e => [e + "First Name is mandatory"])
            validator = 0;
        }

        if (validator === 1) {
            const username = EmailAddress.split('@')[0]
            const resp = await register(EmailAddress, Password, username, Type, 0, "", "", FirstName + " " + LastName)
            if (resp.status === 201) {
                history.push('/login')
            } else {
                setError("Something went wrong.")
            }
        }
        else {
            setRegisterState("Register")
        }



    }

    function handleLoginButton(event) {
        // router.push('/Login')
    }

    useState(() => {
        setType(0)
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
                            <div style={{ display: 'flex', width: '100%' }}>
                                <p style={{ margin: 10, color: 'red' }} dangerouslySetInnerHTML={{ __html: error }}></p>

                            </div>
                            <div className={register_styles.buttons}>
                                {/*<Link to="/Lawyer"> */}
                                <Button function={handleRegisterButton} name={registerState} />
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