import PathAnimation from "./PathAnimation";
import React, {useState} from "react";
import {motion} from "framer-motion";



function QuizPage(){
    const [QuestionTwoText, setQuestionTwoText] = useState('A PC with a screensaver going can use well over 100W of power, compared with about 80W in sleep mode.');

    const handleQuestionTwoTextChange = () => {
        // Neuer Text, den du setzen möchtest
        const neuerText = 'False, A PC with a screensaver going can use well over 100W of power, compared with only about 10W in sleep mode. That\'s why powering down PCs in your home or office makes more sense from both an environmental and cost-saving perspective.';

        setQuestionTwoText(neuerText);
    };
    const [firstQuestionTrueClicked, setfirstQuestionTrueisClicked] = useState(false);
    const handleFirstQuestionTrueClicked = () => {
        setfirstQuestionTrueisClicked(!firstQuestionTrueClicked);
    };
    const [firstQuestionFalseClicked, setfirstQuestionFalseisClicked] = useState(false);
    const handleFirstQuestionFalseClicked = () => {
        setfirstQuestionFalseisClicked(!firstQuestionFalseClicked);
    };
    const [SecondQuestionTrueClicked, setSecondQuestionTrueisClicked] = useState(false);
    const handleSecondQuestionTrueClicked = () => {
        setSecondQuestionTrueisClicked(!SecondQuestionTrueClicked);
    };
    const [SecondQuestionFalseClicked, setSecondQuestionFalseisClicked] = useState(false);
    const handleSecondQuestionFalseClicked = () => {
        setSecondQuestionFalseisClicked(!SecondQuestionFalseClicked);
        handleQuestionTwoTextChange();
    };
    const [ThridQuestionTrueClicked, setThridQuestionTrueisClicked] = useState(false);
    const handleThridQuestionTrueClicked = () => {
        setThridQuestionTrueisClicked(!ThridQuestionTrueClicked);
    };
    const [ThridQuestionFalseClicked, setThridQuestionFalseisClicked] = useState(false);
    const handleThridQuestionFalseClicked = () => {
        setThridQuestionFalseisClicked(!ThridQuestionFalseClicked);
    };
    return(
        <div className={"QuizPageBackground"}>
            <div id="section4">
            <div className={"QuestionBox"} id={"QuestionBox1"}>
                <h3>In Western Europe each person owns 8.9 connected devices on average. Connect means a devices is connected to the cloud resulting in an higher carbon footprint.</h3>
                <div className="QuizTrueFalseBox">
                    <motion.button className={"QuizButtons"}
                        whileHover={{scale : 1.2}}
                        whileTap={{ scale: 0.9 }}
                        onClick={handleFirstQuestionTrueClicked}
                        style={{
                            backgroundColor: firstQuestionTrueClicked ? "rgb(91, 195, 126)" : "white"
                        }}
                    >True
                    </motion.button>
                    <motion.button className={"QuizButtons"}
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
                <h3>{QuestionTwoText}</h3>
                <div className="QuizTrueFalseBox">
                    <motion.button
                        className={"QuizButtons"}
                        whileHover={{scale : 1.2}}
                        whileTap={{ scale: 0.9 }}
                        onClick={handleSecondQuestionTrueClicked}
                        style={{
                            backgroundColor: SecondQuestionTrueClicked ? "rgb(255, 105, 97)" : "white"
                        }}
                    >True
                    </motion.button>
                    <motion.button className={"QuizButtons"}
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
                <h3>If all commuters worked from home just one day a week, 5.85 billion fewer gallons of oil would be used each year.</h3>
                <div className="QuizTrueFalseBox">
                    <motion.button className={"QuizButtons"}
                        whileHover={{scale : 1.2}}
                        whileTap={{ scale: 0.9 }}
                        onClick={handleThridQuestionTrueClicked}
                        style={{
                            backgroundColor: ThridQuestionTrueClicked ? "rgb(91, 195, 126)" : "white"
                        }}
                    >True
                    </motion.button>
                    <motion.button className={"QuizButtons"}
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
