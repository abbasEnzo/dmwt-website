import {Parallax} from 'react-parallax';
import {animate, motion} from 'framer-motion';
import React, {useState} from "react";
import {zip} from "three/addons/libs/fflate.module";



import Spline from '@splinetool/react-spline';


function OurResponsibility(){

    return(
        <Parallax className={'image'} bgImage={'/OurVision.webp'} strength={600} blur={4} style={{ zIndex: 1000}}>
            <div id="section7" style={{zIndex:1000}}>
                <div className={'container'} style={{ zIndex: 1000}}>
                    <h1 style={{
                        bottom: "30vh",
                        whiteSpace: "nowrap",
                    }}>Our Vision</h1>
                    <div className="ourVisionBox">
                        <p style={{width: "80vh", left: "3.5vh", top: "1vh"}}>Envision a world where prosperity and environmental preservation coexist. Renewable energy, such as solar and wind power, minimizes our carbon footprint. Smart, green cities prioritize public transportation and sustainable architecture, fostering a high quality of life. Innovative recycling and circular economy practices reduce waste, eliminating single-use plastics. Education empowers individuals for sustainable living, while global cooperation addresses environmental challenges. This vision is a call to action, urging us to prioritize renewable energy and sustainable practices for a world where a high standard of living thrives alongside a protected environment. Together, we can make this vision a reality.
                        </p>
                    </div>
                </div>
            </div>
        </Parallax>
    )
}
export default OurResponsibility;