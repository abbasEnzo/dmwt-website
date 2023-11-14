import {Parallax} from 'react-parallax';
import ThreeModelViewer from "./3DModelBehavior";
const SurveyPage = () => (
    <Parallax className={'surveyImage'} bgImage={'/stage3.jpg'} strength={600} blur={4}>
        <div id="section4">
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
)

export default SurveyPage;

