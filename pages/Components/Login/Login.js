import login_styles from './login.module.css';
import Link from 'next/link'

const Login = () => {
    return (
        <div>
            <div className={login_styles.login+ ' ' +login_styles.flex_center}>
                <div className={login_styles.app + ' ' +login_styles.flex_center}>
                    <div className={login_styles.header}>
                        Welcome Back.
                </div>
                    <div className={login_styles.subheader}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                </div>
                    <div className={login_styles.box + ' ' +login_styles.flex_center}>


                        <div className={login_styles.form}>
                            <div className={login_styles.box_title}>
                                Login
                                </div>
                           
                        </div>
                        <div className={login_styles.formc}>

                            <div className={login_styles.border}>
                                <input type="text" autoComplete={login_styles.true} className={login_styles.text_input} placeholder="Email Address" />
                            </div>
                            <div className={login_styles.border}>
                                <input type="password" className={login_styles.text_input} placeholder="Password" />
                            </div>

                        </div>
                        <div className={login_styles.buttons}>
                            <button className={login_styles.a}>Login</button>
                            <button className={login_styles.a}>Register</button>
                        </div>
                    </div>
                </div>
                <div className={login_styles.membership}>
                    <div className={login_styles.mem_left}>
                        <div className={login_styles.mem_content}>
                            Membership
                                 </div>
                        <div className={login_styles.mem_text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </div>
                    </div>
                    <div className={login_styles.mem_right}>
                        <Link href="/">
                            <button className={login_styles.a}>Join Today</button>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Login