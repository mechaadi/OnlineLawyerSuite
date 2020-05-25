import login_styles from './login.module.css';
import Link from 'next/link'
import Button from '../Buttons/Button';
import Input from '../Inputs/Input';
const Login = () => {
    return (
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
                            <Link href="/" passHref >
                                <Button name="Login" />
                            </Link>
                            <Link href="/" passHref >
                                <Button name="Register" />
                            </Link>
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
    )
}
export default Login