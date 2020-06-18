import React  from 'react'
import app from './css/app.module.css';
import Navbar from '../Components/Navbar/Navbar.js'
import Footer from '../Components/Footer/Footer';
import LeftRight from '../Components/LeftRightLeft/LeftRight';
import RightLeft from '../Components/LeftRightLeft/RightLeft';
import Membership from '../Components/Membership/Membership';
import CTA from '../Components/CTA/CTA.js';
import Testimonials from '../Components/Testimonials/Testimonials.js';

function About() {
    return (
        <div>
            <style jsx global>{`
      body {
        margin: 0
      }
    `}</style>

            <div className={app.body}>
                <div className={app.navbarhandler}>
                    <Navbar />
                </div>
                <div className={app.jumbotron}>
                    <h1>People become really quite remarkable when they start thinking that they can do things. When they believe in themselves, they have the first secret of success. {process.env.NEXT_SERVER_TEST_1} <br /> <p>-Norman Vincent Peale</p></h1>
                </div>
                <div className={app.section}>
                    <CTA />

                </div>
                <div className={app.section}>
                    <LeftRight title="ShortList" desc="We had hand-picked some of the best Lawyers, you can browse through the website and shortlist few according to your legal need, city, and specialization." img = "https://cdn.discordapp.com/attachments/631529399203921962/715069452299010119/Scrutinize.jpg"/>
                </div>
                <div className={app.specialSection}>
                    <div className={app.section}>
                        <RightLeft title="Scrutinize" desc="Once you’re done shortlisting, you can compare the Lawyers according to their experience on the specialization you need and also consider other things." img="https://cdn.discordapp.com/attachments/715197944202002584/715202495240208445/Untitled.png" />
                    </div>
                </div>
                <div className={app.section}>
                    <LeftRight title="Select" desc="Once you’re done analysing, you can select and hire the best lawyer in your area ensuring a seamless experience.
                    " img="https://cdn.discordapp.com/attachments/715197944202002584/715197974288007178/Untitled.png" />
                </div>
                <div className={app.section}>
                    <Testimonials />
                </div>
                <div className={app.specialSection}>
                    <div className={app.section}>
                        <div className={app.membership}>
                            <Membership />
                        </div>
                    </div>
                </div>
                <div className={app.section}>

                    <div className={app.footer}>
                        <h1><Footer /></h1>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About
