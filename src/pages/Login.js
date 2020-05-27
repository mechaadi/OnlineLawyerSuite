import login_styles from './css/login.module.css';
import Link from 'next/link'
import Button from '../Components/Buttons/Button';
import Input from '../Components/Inputs/Input';
import NavAlt from '../Components/Navbar/NavAlt.js'
import app from './css/app.module.css';
import {useRouter} from "next/router"

const Login = () => {
    const router = useRouter()
    function handleLoginButton(event){

    }

    function handleRegisterButton(event){
        router.push('/register')
    }
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
                <NavAlt />
            </div>
            <div className={login_styles.body}>
                <div className={login_styles.login + ' ' + login_styles.flex_center}>
                    <div className={login_styles.main + ' ' + login_styles.flex_center}>
                        <div className={login_styles.header}>
                            Welcome Back.
                </div>
                        <div className={login_styles.subheader}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                </div>
                        <div className={login_styles.box + ' ' + login_styles.flex_center}>


                            <div className={login_styles.form}>
                                <div className={login_styles.box_title}>
                                    Login
                                </div>

                            </div>
                            <div className={login_styles.formc}>

                                <div className={login_styles.border}>
                                    <Input placeholder="Email Address" autoComplete={true} type="email" />
                                </div>
                                <div className={login_styles.border}>
                                    <Input placeholder="Enter Password" autoComplete={false} type="password" />
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
                            <div className={login_styles.mem_text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </div>
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