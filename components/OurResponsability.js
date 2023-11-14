import {Parallax} from 'react-parallax';
import {animate, motion} from 'framer-motion';
import React, {useState} from "react";




function OurResponsability(){
    const [isClicked, setIsClicked] = useState(false);
    const openBox = (button) => {
        setIsClicked(true);
    };
    const closeBox = () => {
        setIsClicked(false);
    };
    const animationVariants = {
        open: { opacity: 0, x: -100 },
        closed: { opacity: 1, x: 0 },
    };
    return(
        <Parallax className={'image'} bgImage={'/test.png'} strength={600} style={{ zIndex: 1000}}>
            <div id="section3" style={{zIndex:1000}}>
            <div className={'container hidden'} id={"containerImageThree"} style={{ zIndex: 1000}}>
                <h1 style={{
                    fontSize: "60px",
                    bottom: "10vh",
                    right: "42vh",
                    whiteSpace: "nowrap",
                }}>Our Responsability</h1>
                <motion.div
                    className={"ourResponsabilityButtons"}
                    id={"ourResponsabilityButtonTopLeft"}
                    onClick={() => (isClicked ? open : close)}
                    initial={{ originX: 1, scaleY: 1 }} // Initial scaleX
                    // animate={{
                    //     scale: [1, 2, 2, 1, 1],
                    //     rotate: [0, 0, 270, 270, 0],
                    //     borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                    // }} // Change scaleX conditionally
                    animate={isClicked ? "visible" : "hidden"}
                    transition={{ duration: 2
                    }}style={{
                }}
                >
                </motion.div>
                <motion.button
                    className={"ourResponsabilityButtons"}
                    id={"ourResponsabilityButtonBottomRight"}
                    onClick={() => (modalOpen ? close() : open())}
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.9}}
                >187 Straßenbande
                </motion.button>
                <motion.button
                    className={"ourResponsabilityButtons"}
                    id={"ourResponsabilityButtonBottomLeft"}
                    onClick={() => (modalOpen ? close() : open())}
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.9}}
                >187 Straßenbande
                </motion.button>
                <motion.button
                    className={"ourResponsabilityButtons"}
                    id={"ourResponsabilityButtonTopRight"}
                    onClick={() => (modalOpen ? close() : open())}
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.9}}
                >187 Straßenbande
                </motion.button>
            </div>
            </div>
        </Parallax>
    )
}
export default OurResponsability;