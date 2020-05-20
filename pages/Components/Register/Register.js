import register_styles from './register.module.css';
import Link from 'next/link'

const Login = () => {
    return (
        <div>
            <div className={register_styles.register+ ' ' +register_styles.flex_center}>
                <div className={register_styles.app + ' ' +register_styles.flex_center}>
                    <div className={register_styles.header}>
                        Ready to Take a Free trial?
                </div>
                    <div className={register_styles.subheader}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                </div>
                    <div className={register_styles.box + ' ' +register_styles.flex_center}>


                        <div className={register_styles.form}>
                            <div className={register_styles.box_title}>
                                Sign up for a free account
                                </div>
                            <div className={register_styles.form_row}>
                                <div className={register_styles.border}>
                                    <input type="text" className={register_styles.text_input_A} placeholder="First Name" />
                                </div>
                                <div className={register_styles.border}>
                                    <input type="text" className={register_styles.text_input_A} placeholder="Last Name" />
                                </div>
                            </div>
                        </div>
                        <div className={register_styles.formc}>

                            <div className={register_styles.border}>
                                <input type="text" autoComplete={register_styles.true} className={register_styles.text_input} placeholder="Email Address" />
                            </div>
                            <div className={register_styles.border}>
                                <input type="password" className={register_styles.text_input} placeholder="Create Password" />
                            </div>

                        </div>
                        <div className={register_styles.buttons}>
                            <button className={register_styles.a}>Register</button>
                            <button className={register_styles.a}>Login</button>
                        </div>
                    </div>
                </div>
                <div className={register_styles.membership}>
                    <div className={register_styles.mem_left}>
                        <div className={register_styles.mem_content}>
                            Membership
                                 </div>
                        <div className={register_styles.mem_text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </div>
                    </div>
                    <div className={register_styles.mem_right}>
                        <Link href="/">
                            <button className={register_styles.a}>Join Today</button>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Login