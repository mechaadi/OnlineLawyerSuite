import './login.module.css';
import Link from 'next/link'
const Login = () => {
    return (
        <div>
            <div className=" login flex-center">
                <div className="app flex-center">
                    <div className="header">
                        Ready to Take a Free trial?
                </div>
                    <div className="subheader">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                </div>
                    <div className="box flex-center">


                        <div className="form">
                            <div className="box-title">
                                Sign up for a free account
                                </div>
                            <div className="form-row">
                                <div className="border">
                                    <input type="text" className="text-input-A" placeholder="First Name" />
                                </div>
                                <div className="border">
                                    <input type="text" className="text-input-A" placeholder="Last Name" />
                                </div>
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
                            <button className="a">Register</button>
                            <button className="a">Login</button>
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