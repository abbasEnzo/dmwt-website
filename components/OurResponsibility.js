import {Parallax} from 'react-parallax';
import {animate, motion} from 'framer-motion';
import React, {useState} from "react";
import {zip} from "three/addons/libs/fflate.module";




function OurResponsibility(){
    const [modal, toggleModal] = useState(false);
    const setModal = () => {
        toggleModal(!modal);
    };
    const [isClicked, setIsClicked] = useState(false);
    const openBox = () => {
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
            <div className={'container hidden'} style={{ zIndex: 1000}}>
                <h1 style={{
                    fontSize: "60px",
                    top: "8vh",
                    right:"3vh",
                    whiteSpace: "nowrap",
                }}>Our Responsibility</h1>
                <p style={{width: "80vh", bottom:"8vh"}}>Addressing climate change is a responsibility we all share. It's mainly caused by human actions like burning fossil fuels and cutting down trees, which release greenhouse gases. So, each of us can help by making greener choices - like saving energy, cutting waste, and backing eco-friendly practices.

                    Our communities, governments, and businesses need to team up and create sustainable solutions. This includes going for cleaner energy, improving public transportation, and getting on board with green tech.

                    Countries need to work together too, setting global goals and enforcing eco-rules. Industries should also step up by adopting cleaner practices and investing in better tech.

                    In a nutshell, tackling climate change is a team effort. It's not just about being eco-conscious; it's about ensuring a better world for us and the future. So, let's act now! </p>
            </div>
            </div>
        </Parallax>
    )
}
export default OurResponsibility;