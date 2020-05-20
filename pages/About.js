import app from './app.module.css';
import Navbar from './Components/Navbar/Navbar.js'
import Footer from './Components/Footer/Footer';
function About() {
    return (
        <div className={app.body}>
            <div className={app.navbarhandler}>
                <Navbar/>
            </div>
            <div className={app.jumbotron}>
                <h1>Jumbotron Here</h1>
            </div>
            <div className={app.section}>
                <h1>Features Listing with CTAs... Here</h1>
            </div>
            <div className={app.section}>
                <h1>Left Right 1</h1>
            </div>
            <div className={app.section}>
                <h1>Left Right 2</h1>
            </div>
            <div className={app.section}>
                <h1>Testimonials Here</h1>
            </div>
            <div className={app.section_down}>

                <div className={app.membership}>
                    <h2>Memebership Here</h2>
                </div>
                <div className={app.footer}>
                    <h1><Footer/></h1>
                </div>
            </div>

        </div>
    )
}

export default About
