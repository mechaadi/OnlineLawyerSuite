import register_styles from './css/register.module.css';
import Link from 'next/link'
import Button from '../Components/Buttons/Button';
import Light_Button from '../Components/Buttons/LightButton';
import Input from '../Components/Inputs/Input';

const Register = () => {
    return (
        <div>
                  <style jsx global>{`
      body {
        margin: 0;
        height: 100%;
        background: #e5e5e5;
      }
    `}</style>
       
        <div className={register_styles.body + ' ' + register_styles.flex_center}>
            <div className={register_styles.register}>
                <div className={register_styles.main + ' ' + register_styles.flex_center}>
                    <div className={register_styles.header}>
                        Ready to Take a Free trial?
                </div>
                    <div className={register_styles.subheader}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
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
                            <Link href="/" passHref >
                                <Button name="Register" />
                            </Link>
                            <Link href="/" passHref >
                                <Button name="Login" />
                            </Link>
                            <select className={register_styles.select}>
                                <option className={register_styles.option}>User</option>
                                <option className={register_styles.option}>Lawyer</option>
                            </select>
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