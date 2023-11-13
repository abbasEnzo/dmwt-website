import {Parallax} from 'react-parallax';
import TextBox from "./TextBox";
import React from "react";

const OurResponability= () => (
    <Parallax className={'image'} bgImage={'/test.png'} strength={600}>
        <div className={'container hidden'} id={"containerImageThree"}>
            <h3 style={{

            }}>Our Responsability</h3>
            <p style={{
                bottom: "40px",

            }}>Addressing climate change is a responsibility we all share. It's mainly caused by human actions like burning fossil fuels and cutting down trees, which release greenhouse gases. So, each of us can help by making greener choices - like saving energy, cutting waste, and backing eco-friendly practices.

                Our communities, governments, and businesses need to team up and create sustainable solutions. This includes going for cleaner energy, improving public transportation, and getting on board with green tech.

                Countries need to work together too, setting global goals and enforcing eco-rules. Industries should also step up by adopting cleaner practices and investing in better tech.

                In a nutshell, tackling climate change is a team effort. It's not just about being eco-conscious; it's about ensuring a better world for us and the future. So, let's act now! </p>
        </div>
        <div className="line" id={"lineOurResponsability"}></div>
    </Parallax>
)
export default OurResponability;