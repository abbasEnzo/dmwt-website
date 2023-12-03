import {Parallax} from 'react-parallax';
import ThreeModelViewer from "./3DModelBehavior";
const SurveyPage = () => (
    <div className={'surveyPageBox'}>
        <Parallax className={'surveyImage'} bgImage={'/stage3.jpg'} strength={600} blur={4}>
            <div id="section5">
            <div className={'container hidden'}>
                <h1 style={{
                    bottom: "60px"
                }}>Your personal Responsibility</h1>
                <div className={"surveyButton"}>
                    <h3 style={{
                        position: "relative",
                        left: "4px",
                    }}>My technical CO2 footprint</h3>
                </div>
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

export default SurveyPage;

