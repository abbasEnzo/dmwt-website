import {Parallax} from 'react-parallax';
import ThreeModelViewer from "./3DModelBehavior";
import React, { useState } from 'react';
import {motion} from "framer-motion";
const SurveyPage = () => {
    const [isSurveyOpen, setSurveyOpen] = useState(false);

    const [isVisible, setIsVisible] = useState(true);
    const handleButtonClick = (event) => {
        setIsVisible(!isVisible);
        setSurveyOpen(!isSurveyOpen);
    };
    return(
        <div className={'surveyPageBox'}>
            <Parallax className={'surveyImage'} bgImage={'/stage3.jpg'} strength={600} blur={4}>
                <div id="section5">
                    <div className={'container hidden'}>
                        <h1 style={{
                            bottom: "60px"
                        }}>Your personal Responsibility</h1>
                        {isVisible && (
                            <motion.button className={"surveyButton"} whileHover={{scale : 1.2}} whileTap={{ scale: 0.9 }} onClick={handleButtonClick} style={{zIndex : "1000",}}>
                                <h2>My technical CO2 footprint</h2>
                            </motion.button>
                        )}
                        {isSurveyOpen && (
                            <div className={'surveyContainer'}><ThreeModelViewer></ThreeModelViewer></div>
                        )}
                        {/*
                {<div className={'surveyContainer'}><ThreeModelViewer></ThreeModelViewer></div>}
    */}
                    </div>
                </div>
            </Parallax>
            <div id="section6" style={{position:"relative",bottom: "47vh", zIndex: "1000"}}>
                <h1 style={{
                    top: "7vh",
                }}>Your Result</h1>
                <div className="SurveyResultBox">
                    <div className={"SurveyResultStripes"} id={"SurveyResultStripesRed"}></div>
                    <div className={"SurveyResultStripes"} id={"SurveyResultStripesOrange"}></div>
                    <div className={"SurveyResultStripes"} id={"SurveyResultStripesYellow"}></div>
                    <div className={"SurveyResultStripes"} id={"SurveyResultStripesGreen"}></div>
                    <div className="SurveyLine"></div>
                    <div className="SurveyCircle"></div>
                </div>
            </div>
        </div>
    )
}



// const SurveyPage = () => {
//     const [isSurveyOpen, setSurveyOpen] = useState(false);
//
//     const [isVisible, setIsVisible] = useState(true);
//     const handleButtonClick = (event) => {
//         setIsVisible(!isVisible);
//         setSurveyOpen(!isSurveyOpen);
//     };
//     return (
//         <Parallax className={'surveyImage'} style={{zIndex : "1000",}} bgImage={'/stage3.jpg'} strength={600} blur={4}>
//             <div id="section5">
//                 <div className={'container hidden'}>
//                     <h1 style={{
//                         bottom: "60px"
//                     }}>Your personal Responsibility</h1>
//                     {isVisible && (
//                         <motion.button className={"surveyButton"} whileHover={{scale : 1.2}} whileTap={{ scale: 0.9 }} onClick={handleButtonClick} style={{zIndex : "1000",}}>
//                             <h2>My technical CO2 footprint</h2>
//                         </motion.button>
//                     )}
//                     {isSurveyOpen && (
//                         <div className={'surveyContainer'}><ThreeModelViewer></ThreeModelViewer></div>
//                     )}
//                 </div>
//             </div>
//         </Parallax>
//     )
// };
export default SurveyPage;

