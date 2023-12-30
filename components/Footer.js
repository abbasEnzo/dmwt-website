import {Parallax} from "react-parallax";
import React from "react";
import {motion} from "framer-motion";
const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: 'smooth' });
};
function Footer() {

    return (

        <Parallax className={'footersection'}  strength={300} style={{ zIndex: 1000}}>
        <div id="section8" style={{ zIndex: 1001,}}>
            <h3 style={{
                position:"absolute",
                left:"32vh",
                whiteSpace: "nowrap",
                top:"1.5vh",
            }}>Newsletter</h3>
            <input type="text" id="emailInput" name="email" required minLength="4" maxLength="50" size="10" placeholder={"Enter your E-Mail Address"}/>
            <motion.button style={{}} whileHover={{color: "rgb(91, 195, 126)"}}  id={"emailInputButton"}>Subscribe</motion.button>
            <h3 style={{
                position:"absolute",
                right:"40vh",
                whiteSpace: "nowrap",
                top:"0vh",
            }}>Our Socials</h3>
            <img className="socials" src="https://freelogopng.com/images/all_img/1690643777twitter-x%20logo-png-white.png" alt="Twitter" />
            <img className="socials" src="https://www.edigitalagency.com.au/wp-content/uploads/new-Instagram-logo-white-glyph.png" alt="Instagram" />
            <img className="socials" src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/youtube-app-white-icon.png" alt="Youtube" />
            <img className="socials" src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/facebook-app-round-white-icon.png" alt="Facebook" />
            <p id={"socialstext"}>
                Mobile: +49 6543 77 55 09<br/>Email: GreenIT@gmail.com
            </p>
        </div>
        </Parallax>
    )
}
export default Footer;