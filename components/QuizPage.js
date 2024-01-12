import PathAnimation from "./PathAnimation";
import React, {useState} from "react";
import {motion} from "framer-motion";



function QuizPage(){
    const [QuestionTwoText, setQuestionTwoText] = useState('');

    const handleQuestionOneTextChangeTrue = () => {
        let resultText = document.getElementById("QuestionOneText");
        let questionOneBox = document.getElementById("QuestionOneButtonBox");
        let trueButton = document.getElementById("QuestionOneTrueButton");
        let falseButton = document.getElementById("QuestionOneFalseButton");
        trueButton.disabled = true;
        falseButton.disabled = true;
        falseButton.classList.add("disableHoverOnButton");
        trueButton.classList.add("disableHoverOnButton");
        resultText.innerText = 'True, that means your personal lifestyle has a huge impact on climate change';
        resultText.style.position = "absolute";
        questionOneBox.style.top = "22vh";
    };
    const handleQuestionOneTextChangeFalse = () => {
        let resultText = document.getElementById("QuestionOneText");
        let questionOneBox = document.getElementById("QuestionOneButtonBox");
        let trueButton = document.getElementById("QuestionOneTrueButton");
        let falseButton = document.getElementById("QuestionOneFalseButton");
        trueButton.disabled = true;
        falseButton.disabled = true;
        falseButton.classList.add("disableHoverOnButton");
        trueButton.classList.add("disableHoverOnButton");
        resultText.innerText = 'False, One\'s personal lifestyle really contributes approximately 30% to the global CO2 emissions';
        resultText.style.position = "absolute";
        questionOneBox.style.top = "22vh";
    };
    const handleQuestionTwoTextChangeTrue = () => {
        let resultText = document.getElementById("QuestionTwoText");
        let questionTwoBox = document.getElementById("QuestionTwoButtonBox");
        let trueButton = document.getElementById("QuestionTwoTrueButton");
        let falseButton = document.getElementById("QuestionTwoFalseButton");
        trueButton.disabled = true;
        falseButton.disabled = true;
        falseButton.classList.add("disableHoverOnButton");
        trueButton.classList.add("disableHoverOnButton");
        resultText.innerText = 'False, through the use of energy-efficient electrical appliances up to 80% of electricity consumption could be saved';
        resultText.style.position = "absolute";
        questionTwoBox.style.top = "22vh";
    };
    const handleQuestionTwoTextChangeFalse = () => {
        let resultText = document.getElementById("QuestionTwoText");
        let questionTwoBox = document.getElementById("QuestionTwoButtonBox");
        let trueButton = document.getElementById("QuestionTwoTrueButton");
        let falseButton = document.getElementById("QuestionTwoFalseButton");
        trueButton.disabled = true;
        falseButton.disabled = true;
        falseButton.classList.add("disableHoverOnButton");
        trueButton.classList.add("disableHoverOnButton");
        resultText.innerText = 'Your right, through the use of energy-efficient electrical appliances up to 80% of electricity consumption could be saved';
        resultText.style.position = "absolute";
        questionTwoBox.style.top = "22vh";
    };
    const handleQuestionThreeTextChangeTrue = () => {
        let resultText = document.getElementById("QuestionThreeText");
        let questionThreeBox = document.getElementById("QuestionThreeButtonBox");
        let trueButton = document.getElementById("QuestionThreeTrueButton");
        let falseButton = document.getElementById("QuestionThreeFalseButton");
        trueButton.disabled = true;
        falseButton.disabled = true;
        falseButton.classList.add("disableHoverOnButton");
        trueButton.classList.add("disableHoverOnButton");
        resultText.innerText = 'True, on average, teenagers play 840 hours of online games per year, leading to an approximate yearly carbon dioxide emission of 1.2 tons per teenager';
        resultText.style.position = "absolute";
        questionThreeBox.style.top = "27vh";
    };
    const handleQuestionThreeTextChangeFalse = () => {
        let resultText = document.getElementById("QuestionThreeText");
        let questionThreeBox = document.getElementById("QuestionThreeButtonBox");
        let trueButton = document.getElementById("QuestionThreeTrueButton");
        let falseButton = document.getElementById("QuestionThreeFalseButton");
        trueButton.disabled = true;
        falseButton.disabled = true;
        falseButton.classList.add("disableHoverOnButton");
        trueButton.classList.add("disableHoverOnButton");
        resultText.innerText = 'Unfortunately it`s true, on average, teenagers play 840 hours of online games per year, leading to an approximate yearly carbon dioxide emission of 1.2 tons per teenager';
        resultText.style.position = "absolute";
        resultText.style.bottom = "8vh";
        questionThreeBox.style.top = "27vh";
    };
    const [firstQuestionTrueClicked, setfirstQuestionTrueisClicked] = useState(false);
    const handleFirstQuestionTrueClicked = () => {
        setfirstQuestionTrueisClicked(!firstQuestionTrueClicked);
        handleQuestionOneTextChangeTrue();
    };
    const [firstQuestionFalseClicked, setfirstQuestionFalseisClicked] = useState(false);
    const handleFirstQuestionFalseClicked = () => {
        setfirstQuestionFalseisClicked(!firstQuestionFalseClicked);
        handleQuestionOneTextChangeFalse();
    };
    const [SecondQuestionTrueClicked, setSecondQuestionTrueisClicked] = useState(false);
    const handleSecondQuestionTrueClicked = () => {
        setSecondQuestionTrueisClicked(!SecondQuestionTrueClicked);
        handleQuestionTwoTextChangeTrue();
    };
    const [SecondQuestionFalseClicked, setSecondQuestionFalseisClicked] = useState(false);
    const handleSecondQuestionFalseClicked = () => {
        setSecondQuestionFalseisClicked(!SecondQuestionFalseClicked);
        handleQuestionTwoTextChangeFalse();
    };
    const [ThridQuestionTrueClicked, setThridQuestionTrueisClicked] = useState(false);
    const handleThridQuestionTrueClicked = () => {
        setThridQuestionTrueisClicked(!ThridQuestionTrueClicked);
        handleQuestionThreeTextChangeTrue();
    };
    const [ThridQuestionFalseClicked, setThridQuestionFalseisClicked] = useState(false);
    const handleThridQuestionFalseClicked = () => {
        setThridQuestionFalseisClicked(!ThridQuestionFalseClicked);
        handleQuestionThreeTextChangeFalse();
    };

    return(

        <div className={"QuizPageBackground"}>
            <div id="section4">
                <h1 style={{
                    position: "absolute",
                    top: "1.75vh",
                    left:"8vh",
                    rotate:"-30deg",
                }}>Quiz</h1>
                <p style={{
                    position: "absolute",
                    top: "12vh",
                    left:"5vh",
                    rotate:"-30deg",
                    fontSize:"35px",
                }}>Test your knowledge</p>
            <div className={"QuestionBox"} id={"QuestionBox1"}>
                <h3 id={"QuestionOneText"}>One's personal lifestyle contribute approximately 30% to the global CO2 emissions</h3>
                <div className="QuizTrueFalseBox" id={"QuestionOneButtonBox"}>
                    <motion.button className={"QuizButtons"} id={"QuestionOneTrueButton"}
                        whileHover={{scale : 1.2}}
                        whileTap={{ scale: 0.9 }}
                        onClick={handleFirstQuestionTrueClicked}
                        style={{
                            backgroundColor: firstQuestionTrueClicked ? "rgb(91, 195, 126)" : "white"
                        }}
                    >True
                    </motion.button>
                    <motion.button className={"QuizButtons"} id={"QuestionOneFalseButton"}
                        whileHover={{scale : 1.2}}
                        whileTap={{ scale: 0.9 }}
                        onClick={handleFirstQuestionFalseClicked}
                        style={{
                            backgroundColor: firstQuestionFalseClicked ? "rgb(255, 105, 97)" : "white"
                        }}
                    >False
                    </motion.button>
                </div>
            </div>
            <div className={"QuestionBox"} id={"QuestionBox2"}>
                <h3 id={"QuestionTwoText"}>Up to 20% of electricity consumption could be saved through the use of energy-efficient electrical appliances</h3>
                <div className="QuizTrueFalseBox" id={"QuestionTwoButtonBox"}>
                    <motion.button
                        className={"QuizButtons"} id={"QuestionTwoTrueButton"}
                        whileHover={{scale : 1.2}}
                        whileTap={{ scale: 0.9 }}
                        onClick={handleSecondQuestionTrueClicked}
                        style={{
                            backgroundColor: SecondQuestionTrueClicked ? "rgb(255, 105, 97)" : "white"
                        }}
                    >True
                    </motion.button>
                    <motion.button className={"QuizButtons"} id={"QuestionTwoFalseButton"}
                        whileHover={{scale : 1.2}}
                        whileTap={{ scale: 0.9 }}
                        onClick={handleSecondQuestionFalseClicked}
                        style={{
                            backgroundColor: SecondQuestionFalseClicked ? "rgb(91, 195, 126)" : "white"
                        }}
                    >False
                    </motion.button>
                </div>
            </div>
            <div className={"QuestionBox"} id={"QuestionBox3"}>
                <h3 id={"QuestionThreeText"}>
                    Playing an online game in HD quality consumes approximately 1 gigabyte of data per hour, contributing to around 1.4 kilograms of CO2 emissions</h3>
                <div className="QuizTrueFalseBox" id={"QuestionThreeButtonBox"}>
                    <motion.button className={"QuizButtons"} id={"QuestionThreeTrueButton"}
                        whileHover={{scale : 1.2}}
                        whileTap={{ scale: 0.9 }}
                        onClick={handleThridQuestionTrueClicked}
                        style={{
                            backgroundColor: ThridQuestionTrueClicked ? "rgb(91, 195, 126)" : "white"
                        }}
                    >True
                    </motion.button>
                    <motion.button className={"QuizButtons"} id={"QuestionThreeFalseButton"}
                        whileHover={{scale : 1.2}}
                        whileTap={{ scale: 0.9 }}
                        onClick={handleThridQuestionFalseClicked }
                        style={{
                            backgroundColor: ThridQuestionFalseClicked ? "rgb(255, 105, 97)" : "white"
                        }}
                    >False
                    </motion.button>
                </div>
            </div>
            <PathAnimation>
            </PathAnimation>
        </div>
        </div>
    )
}
export default QuizPage;
