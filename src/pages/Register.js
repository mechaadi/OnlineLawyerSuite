import register_styles from './css/register.module.css';
import Link from 'next/link'
import Button from '../Components/Buttons/Button';
import Input from '../Components/Inputs/Input';
import Nav from '../Components/Navbar/Navbar.js'
import app from './css/app.module.css';
import {useRouter} from 'next/router'
import {register} from "../api/user"

const Register = () => {

    const router = useRouter();

    function handleRegisterButton(event){
        console.log("registering..");
        const resp = register("sidm99@gmail.com", "asudoasudo", "sidm99", "", 0, "this is about", "siddharth mishra")
        
    }

    function handleLoginButton(event){
        router.push('/Login')
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
                                <Input placeholder="First Name" autoComplete={true} type="name" />
                                </div>
                                <div className={register_styles.border}>
                                <Input placeholder="Last Name" autoComplete={true} type="name" />
                                </div>
                            </div>
                        </div>
                        <div className={register_styles.formc}>

                            <div className={register_styles.border}>
                            <Input placeholder="Email Address" autoComplete={true} type="email" />
                            </div>
                            <div className={register_styles.border}>
                            <Input placeholder="Create Password" autoComplete={false} type="password" />
                            </div>

                        </div>
                        <div className={register_styles.buttons}>
                                <Button onChildClick={handleRegisterButton} name="Register" />
                                <Button onChildClick={handleLoginButton} name="Login" />
                            <select className={register_styles.select}>
                                <option className={register_styles.option}>User</option><option className={register_styles.option}>Lawyer</option>
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
export default Register