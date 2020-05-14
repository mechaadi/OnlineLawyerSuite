import './navbar.module.css';
const Navbar = () => {
    return (
        <>
            <nav className="navbar">
                <label className="navbar-toggle" id="js-navbar-toggle" htmlFor="chkToggle">
                ///////
                </label>
                <a href="#" className="logo">UpLaw</a>
                <input type="checkbox" id="chkToggle" />
                <ul className="main-nav" id="js-menu">
                    <li>
                        <a href="#" className="nav-links">Features</a>
                    </li>
                    <li>
                        <a href="#" className="nav-links">Pricing</a>
                    </li>
                    <li>
                        <a href="#" className="nav-links">Community</a>
                    </li>
                    <li>
                        <a href="#" className="nav-links">Support</a>
                    </li>
                  {/*   <div className="rightButtons">
                        <li> <a href="#" className="nav-links">Login</a></li>
                    </div>
                    <div className="rightButtons">
                        <li> <a href="#" className="nav-links">Register</a></li>
                    </div>
                    */}
                </ul>
                
            </nav>

        </>
    )
}

export default Navbar
