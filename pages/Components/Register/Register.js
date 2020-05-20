import './register.module.css';
import Link from 'next/link'
const Login = () => {
    return (
        <div>
            <div className=" register flex-center">
                <div className="app flex-center">
                    <div className="header">
                        Welcome Back.
                </div>
                    <div className="subheader">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                </div>
                    <div className="box flex-center">


                        <div className="form">
                            <div className="box-title">
                                Login
                                </div>
                        </div>
                        <div className="formc">

                            <div className="border">
                                <input type="text" autoComplete={true} className="text-input" placeholder="Email Address" />
                            </div>
                            <div className="border">
                                <input type="password" className="text-input" placeholder="Create Password" />
                            </div>

                        </div>
                        <div className="buttons">
                            <button className="a">Login</button>
                            <button className="a">Register</button>
                        </div>
                    </div>
                </div>
                <div className="membership">
                    <div className="mem-left">
                        <div className="mem-content">
                            Membership
                                 </div>
                        <div className="mem-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </div>
                    </div>
                    <div className="mem-right">
                        <Link href="/">
                            <button className="a">Join Today</button>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Login