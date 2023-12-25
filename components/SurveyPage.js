import {Parallax} from 'react-parallax';
import React, {Suspense, useRef, useState} from 'react';
import {motion} from "framer-motion"


const Spline = React.lazy(() => import('@splinetool/react-spline'));

const SurveyPage = () => {

    const computerToChange = useRef();
    const controllerToChange = useRef();
    const printerToChange = useRef();
    const tvToChange = useRef();
    const laptopToChange = useRef();
    const handyToChange = useRef();
    const socialMediaToChange = useRef();

    function onLoad(spline) {
        const computer = spline.findObjectByName('Computer');
        const controller = spline.findObjectByName('Controller');
        const printer = spline.findObjectByName('Printer');
        const tv = spline.findObjectByName('TV');
        const laptop = spline.findObjectByName('Laptop');
        const handy = spline.findObjectByName('Handy');
        const socialmedia = spline.findObjectByName('SocialMedia');
        computer.visible = false;
        controller.visible = false;
        printer.visible = false;
        tv.visible = false;
        laptop.visible = false;
        handy.visible = false;
        socialmedia.visible = false;
        computerToChange.current = computer;
        controllerToChange.current = controller;
        printerToChange.current = printer;
        tvToChange.current = tv;
        laptopToChange.current = laptop;
        handyToChange.current = handy;
        socialMediaToChange.current = socialmedia;
    }

    const [computerVisible, setComputerVisible] = useState(false);
    const [controllerVisible, setControllerVisible] = useState(false);
    const [printerVisible, setPrinterVisible] = useState(false);
    const [tvVisible, setTvVisible] = useState(false);
    const [laptopVisible, setLaptopVisible] = useState(false);
    const [handyVisible, setHandyVisible] = useState(false);
    const [socialMediaVisible, setSocialMediaVisible] = useState(false);

    function toggleComputer() {
        if (computerVisible) {
            computerToChange.current.visible = false;
            setComputerVisible(false);
        } else {
            computerToChange.current.visible = true;
            setComputerVisible(true);
        }
    }

    function toggleController() {
        if (controllerVisible) {
            controllerToChange.current.visible = false;
            setControllerVisible(false);
        } else {
            controllerToChange.current.visible = true;
            setControllerVisible(true);
        }
    }

    function togglePrinter() {
        if (printerVisible) {
            printerToChange.current.visible = false;
            setPrinterVisible(false);
        } else {
            printerToChange.current.visible = true;
            setPrinterVisible(true);
        }
    }

    function toggleTV() {
        if (tvVisible) {
            tvToChange.current.visible = false;
            setTvVisible(false);
        } else {
            tvToChange.current.visible = true;
            setTvVisible(true);
        }
    }

    function toggleLaptop() {
        if (laptopVisible) {
            laptopToChange.current.visible = false;
            setLaptopVisible(false);
        } else {
            laptopToChange.current.visible = true;
            setLaptopVisible(true);
        }
    }

    function toggleHandy() {
        if (handyVisible) {
            handyToChange.current.visible = false;
            setHandyVisible(false);
        } else {
            handyToChange.current.visible = true;
            setHandyVisible(true);
        }
    }
    function toggleSocialMedia() {
        if (socialMediaVisible) {
            socialMediaToChange.current.visible = false;
            setSocialMediaVisible(false);
        } else {
            socialMediaToChange.current.visible = true;
            setSocialMediaVisible(true);
        }
    }

    return (
        <div className={'surveyPageBox'}>
            <div id="section5" style={{}}>
                <Parallax className={'surveyImage'} bgImage={'/stage3.webp'} strength={600} blur={4}>
                    <div className={'container'}>
                        <h1 style={{
                            bottom: "34vh"
                        }}>Your personal Responsibility</h1>
                        <div className={"surveyContainer"}>

                            <Suspense fallback={<div style={{
                                width: "100%",
                                height: "100vh",
                                position: "absolute",
                                backgroundColor: "black"
                            }}>Loading...</div>}>
                                <Spline className="SurveyRoom"
                                        scene="https://prod.spline.design/f7J4904xE0FbT9p9/scene.splinecode"
                                        onLoad={onLoad}/>
                            </Suspense>
                            <div className="SurveyButtonBox">
                                <h3 style={{position: "absolute", bottom: "47vh", left: "9vh"}}>What devices are you
                                    using?</h3>
                                <motion.div
                                            style={{
                                                position: 'absolute',
                                                left: '10vh',
                                                backgroundImage: `url('/ComputerIcon.webp')`,
                                                backgroundColor: computerVisible ? 'rgb(91, 195, 126)' : '#D9D9D9'}}
                                            className="surveyButton" whileHover={{scale: 1.05}} whileTap={{scale: 0.9}}
                                            onClick={toggleComputer}>
                                </motion.div>
                                <motion.div
                                    style={{
                                        position: 'absolute',
                                        left: '36.5vh',
                                        backgroundImage: `url('/ControllerIcon.webp')`,
                                        backgroundColor: controllerVisible ? 'rgb(91, 195, 126)' : '#D9D9D9'}}
                                    className="surveyButton" whileHover={{scale: 1.05}} whileTap={{scale: 0.9}}
                                    onClick={toggleController}>
                                </motion.div>
                                <motion.div style={{
                                            position: 'absolute',
                                            left: '63vh',
                                            backgroundImage: `url('/DruckerIcon.webp')`,
                                            backgroundColor: printerVisible ? 'rgb(91, 195, 126)' : '#D9D9D9'}}
                                            className="surveyButton" whileHover={{scale: 1.05}} whileTap={{scale: 0.9}}
                                            onClick={togglePrinter}>
                                </motion.div>
                                <motion.div style={{
                                            position: 'absolute',
                                            left: '10vh',
                                            top: '18vh',
                                            backgroundImage: `url('/TV_Icon.webp')`,
                                            backgroundColor: tvVisible ? 'rgb(91, 195, 126)' : '#D9D9D9'}}
                                            className="surveyButton" whileHover={{scale: 1.05}} whileTap={{scale: 0.9}}
                                            onClick={toggleTV}>
                                </motion.div>
                                <motion.div style={{
                                            position: 'absolute',
                                            left: '36.5vh',
                                            top: '18vh',
                                            backgroundImage: `url('/LaptopIcon.webp')`,
                                            backgroundColor: laptopVisible ? 'rgb(91, 195, 126)' : '#D9D9D9'}}
                                            className="surveyButton" whileHover={{scale: 1.05}} whileTap={{scale: 0.9}}
                                            onClick={toggleLaptop}>
                                </motion.div>
                                <motion.div style={{
                                            position: 'absolute',
                                            left: '63vh',
                                            top: '18vh',
                                            backgroundImage: `url('/SmartphoneIcon.webp')`,
                                            backgroundColor: handyVisible ? 'rgb(91, 195, 126)' : '#D9D9D9'}}
                                            className="surveyButton" whileHover={{scale: 1.05}} whileTap={{scale: 0.9}}
                                            onClick={toggleHandy}>
                                </motion.div>
                                <motion.div style={{
                                            position: 'absolute',
                                            left: '10vh',
                                            top: '36vh',
                                            backgroundImage: `url('/SocialsIcon.webp')`,
                                            backgroundColor: socialMediaVisible ? 'rgb(91, 195, 126)' : '#D9D9D9'}}
                                            className="surveyButton" whileHover={{scale: 1.05}} whileTap={{scale: 0.9}}
                                            onClick={toggleSocialMedia}>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </Parallax>
            </div>
            <div id="section6" style={{position: "relative", bottom: "47vh", zIndex: "1000"}}>
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
export default SurveyPage;