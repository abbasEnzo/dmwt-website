import {Parallax} from "react-parallax";
import React from "react";
import {motion} from "framer-motion";
const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: 'smooth' });
};
function Footer() {
    return (
        <Parallax className={'footersection'}  strength={600} style={{ zIndex: 1000}}>
        <div id="section8" style={{ zIndex: 1001,}}>
            <h4 style={{position:"absolute",
                left:"10vh",
                whiteSpace: "nowrap",
            }}>Navigation</h4>
            <motion.button whileHover={{color: "rgb(91, 195, 126)"}} className={"navigationButtons"} onClick={() => scrollToSection( 'section1')}>The Power of your Click</motion.button>
            <motion.button whileHover={{color: "rgb(91, 195, 126)"}} className={"navigationButtons"} onClick={() => scrollToSection('section2')}>Our Future</motion.button>
            <motion.button whileHover={{color: "rgb(91, 195, 126)"}} className={"navigationButtons"} onClick={() => scrollToSection('section3')}>Our Responsibility</motion.button>
            <motion.button whileHover={{color: "rgb(91, 195, 126)"}} className={"navigationButtons"} onClick={() => scrollToSection('section4')}>Quiz</motion.button>
            <motion.button whileHover={{color: "rgb(91, 195, 126)"}} className={"navigationButtons"} onClick={() => scrollToSection('section5')}>Your Responsibility</motion.button>
            <motion.button whileHover={{color: "rgb(91, 195, 126)"}} className={"navigationButtons"} id={"lastAgendaButton"} onClick={() => scrollToSection('section7')}>Our Vision</motion.button>
            <h4 style={{
                position:"absolute",
                right:"10vh",
                whiteSpace: "nowrap",
                top:"0.5vh",
            }}>Newsletter</h4>
            <input type="text" id="emailInput" name="email" required minLength="4" maxLength="50" size="10" placeholder={"Enter your E-Mail Address..."} />
            <motion.button whileHover={{color: "rgb(91, 195, 126)"}}  id={"emailInputButton"}>Subscribe</motion.button>
            <h4 style={{
                position:"absolute",
                right:"5vh",
                whiteSpace: "nowrap",
                top:"35vh",
            }}>Our Socials</h4>
            <img className="socials" src="https://freelogopng.com/images/all_img/1690643777twitter-x%20logo-png-white.png" alt="Twitter" />
            <img className="socials" src="https://www.edigitalagency.com.au/wp-content/uploads/new-Instagram-logo-white-glyph.png" alt="Instagram" />
            <img className="socials" src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/youtube-app-white-icon.png" alt="Youtube" />
            <img className="socials" src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/facebook-app-round-white-icon.png" alt="Facebook" />
            <p id={"socialstext"}>
                Mobile: +49 6543 77 55 09<br/>Email: GreenIt@gmail.com
            </p>
        </div>
        </Parallax>
    )
}
export default Footer;