import './app.module.css';
import Navbar from '../Navbar/Navbar';
function About() {
    return (
        <div className="body">
            <div className="navbarhandler">
                <Navbar/>
            </div>
            <div className="jumbotron">
                <h1>Jumbotron Here</h1>
            </div>
            <div className="section">
                <h1>Features Listing with CTAs... Here</h1>
            </div>
            <div className="section">
                <h1>Left Right 1</h1>
            </div>
            <div className="section">
                <h1>Left Right 2</h1>
            </div>
            <div className="section">
                <h1>Testimonials Here</h1>
            </div>
            <div className="section-down">

                <div className="membership">
                    <h2>Memebership Here</h2>
                </div>
                <div className="footer">
                    <h1>Footer Here</h1>
                </div>
            </div>

        </div>
    )
}

export default About
