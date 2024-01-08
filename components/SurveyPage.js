import {Parallax} from 'react-parallax';
import React, {Suspense, useRef, useState} from 'react';
import {motion} from "framer-motion"
import useSWR from 'swr';

const Spline = React.lazy(() => import('@splinetool/react-spline'));


const SurveyPage = () => {

    const fetcher = url => fetch(url).then(res => res.json())
    const surveyCircleRef = useRef(null);

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

    const elements = [
        { name: 'Computer', visible: computerVisible, value: 600},//Angaben in Kilogramm(kg)
        { name: 'Controller', visible: controllerVisible, value: 150},
        { name: 'Printer', visible: printerVisible, value: 50},
        { name: 'TV', visible: tvVisible, value: 300},
        { name: 'Laptop', visible: laptopVisible, value: 150},
        { name: 'Handy', visible: handyVisible, value: 80},
        { name: 'SocialMedia', visible: socialMediaVisible, value: 30},

    ];

    const carbValue = elements.reduce((acc, { visible, value }) => acc + (visible ? value : 0), 0);

    /*const {
        data: emissionData,
        isLoading,
        isError: error
    } = useSWR('/api/getAverage', fetcher, {
        revalidateOnFocus: false,
        revalidateOnReconnect: false
    });*/

    const handleSubmit = async (e) => {
        e.preventDefault()

        const newValue = {
            carbonValue: carbValue,
        }

        await fetch('/api/updateDatabase', {
            method: 'POST',
            body: JSON.stringify(newValue)
        })

        const section = document.getElementById("section6");
        section.scrollIntoView({ behavior: 'smooth' });
        /*const tableAverage = emissionData?.averageValue;*/
        let resultingData = (carbValue/1360)*100;
        const tableAverage = 5;
        const surveyCircle = surveyCircleRef.current;

        let resultText = document.getElementById("SurveyResultText");


        if (resultingData < 5){
            resultingData = 5;
        }
        else if (resultingData > 90){
            resultingData = 90;
        }

        surveyCircle.style.left = `${resultingData}%`;
        surveyCircle.style.transition = 'left 1s ease-in-out';

        if(resultingData <= 24){
            resultText.innerText = `Congratulations! Your commitment to sustainable practices has yielded an outstanding result. Your carbon footprint is remarkably low, showcasing a commendable effort in minimizing environmental impact. Keep up the excellent work! Your dedication to green IT is making a significant difference. The average carbon footprint is ${tableAverage} metric tons per year. Your current carbon footprint is only ${resultingData} metric tons.`;
        }
        else if(resultingData <= 48){
            resultText.innerText = `Well done! Your efforts in adopting green IT practices have led to a positive outcome. Your carbon footprint is quite low, reflecting a conscious effort to reduce environmental impact. Your commitment to sustainability is making a meaningful contribution. The average carbon footprint is ${tableAverage} metric tons per year. Your current carbon footprint is ${resultingData} metric tons.`;
        }
        else if(resultingData <= 73){
            resultText.innerText = `There\`s room for improvement. Your carbon footprint is high, indicating a need for adjustments in your IT practices. Consider exploring greener alternatives and energy-efficient solutions to reduce your environmental impact. The average carbon footprint is ${tableAverage} metric tons per year. Unfortunately, your current carbon footprint is ${resultingData} metric tons.`;
        }
        else {
            resultText.innerText = `It\`s time to take significant steps towards sustainability. Your carbon footprint is considerably very high, highlighting the urgency to adopt greener IT practices. Consider energy-efficient devices, renewable energy sources, and other eco-friendly options. The average carbon footprint is ${tableAverage} metric tons per year. Unfortunately, your current carbon footprint is ${resultingData} metric tons.`;
        }
    }

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
                <Parallax className={'surveyImage'} bgImage={'/surveyBackground.webp'} strength={600} blur={4}>
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
                                <p style={{position: "absolute", bottom: "45vh", left: "9vh", fontWeight: "bold", fontSize: "30px"}}>Which of the following Products are you using in your everyday life?</p>
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
                                            backgroundImage: `url('/PhoneIcon.webp')`,
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
                    <div className={"SurveyResultStripes"} id={"SurveyResultStripesGreen"}></div>
                    <div className={"SurveyResultStripes"} id={"SurveyResultStripesYellow"}></div>
                    <div className={"SurveyResultStripes"} id={"SurveyResultStripesOrange"}></div>
                    <div className={"SurveyResultStripes"} id={"SurveyResultStripesRed"}></div>
                    <div className="SurveyLine"></div>
                    <div ref={surveyCircleRef}
                         className="SurveyCircle"
                         style={{ left: '5%' }}
                    ></div>
                </div>
                <p style={{fontSize: "30px"}} id={"SurveyResultText"}></p>
                <motion.div
                    className="submitButton"
                    style ={{
                        height: '10vh',
                        width: '50vh',
                        position: 'absolute',
                        left: '130vh',
                        top: '-15.8vh',
                        borderRadius: '50px',
                        backgroundColor: 'gray',
                        textAlign: 'center',
                        fontSize: '24px',
                        fontFamily: 'Comfortaa, sans-serif',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                    whileHover={{ scale : 1.05, backgroundColor: 'rgb(91, 195, 126)' }}
                    whileTap={{ scale: 0.95, backgroundColor: '#D9D9D9' }}
                    onClick={handleSubmit}
                >Submit your Answers
                </motion.div>
            </div>
        </div>
)
}
export default SurveyPage;