import React, {useEffect, useState} from 'react';
import OurResponsibility from '../components/OurResponsibility';
import SurveyPage from "../components/SurveyPage";
import LandingPage from "../components/LandingPage";
import AgendaBox from "../components/AgendaBox";
import QuizPage from "../components/QuizPage";
import OurVision from "../components/OurVision";
import LoadingScreen from "../components/LoadingScreen";


function Home() {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            setTimeout(() => {
                const ourVisionElement = document.getElementById('section5');
                if (ourVisionElement) {
                    window.scrollTo({
                        top: 700,
                        behavior: 'smooth', // 'auto' for instant scrolling, 'smooth' for smooth scrolling
                    });
                }
            }, 17000);

            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    console.log(entry);
                    if (entry.isIntersecting) {
                        entry.target.classList.add('show');
                    } else {
                        entry.target.classList.remove('show');
                    }
                });
            });

            const hiddenElements = document.querySelectorAll('.hidden');
            hiddenElements.forEach((el) => observer.observe(el));
        }
    }, []);

    return (
        <div>
            <AgendaBox></AgendaBox>
            <LoadingScreen></LoadingScreen>
            <LandingPage></LandingPage>
            <OurResponsibility></OurResponsibility>
            <QuizPage></QuizPage>
            <SurveyPage></SurveyPage>
            <OurVision></OurVision>
        </div>
    );
}

export default Home;