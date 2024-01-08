import {Parallax} from 'react-parallax';
import React, {useState} from "react";




function OurResponsibility(){

    return(
        <Parallax className={'image'} bgImage={'/ourResponsabilityBackground.webp'} strength={600} blur={4} style={{ zIndex: 1000}}>
            <div id="section3" style={{zIndex:1000}}>
            <div className={'container'} style={{ zIndex: 1000}}>
                <h1 style={{
                    top: "6vh",
                    whiteSpace: "nowrap",
                }}>Our Responsibility</h1>
                <p style={{width: "80vh", bottom:"14vh"}}>Addressing climate change is a responsibility we all share. It's mainly caused by human actions like burning fossil fuels and cutting down trees, which release greenhouse gases. So, each of us can help by making greener choices - like saving energy, cutting waste, and backing eco-friendly practices.

                    Our communities, governments, and businesses need to team up and create sustainable solutions. This includes going for cleaner energy, improving public transportation, and getting on board with green tech.

                    Countries need to work together too, setting global goals and enforcing eco-rules. Industries should also step up by adopting cleaner practices and investing in better tech.

                    Our responsibilities in combating climate change are significant, and each individual plays a crucial role in making a positive impact.
                    In a nutshell, tackling climate change is a team effort. It's not just about being eco-conscious; it's about ensuring a better world for us and the future. So, let's act now! </p>
            </div>
            </div>
        </Parallax>
    )
}
export default OurResponsibility;