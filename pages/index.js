import React, { useEffect } from 'react';
import OurResponsability from '../components/OurResponsability';
import SurveyPage from "../components/SurveyPage";
import LandingPage from "../components/LandingPage";
import AgendaBox from "../components/AgendaBox";
import QuizPage from "../components/QuizPage";



function Home() {
    useEffect(() => {
        if (typeof window !== 'undefined') {
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
            <LandingPage></LandingPage>
            <OurResponsability></OurResponsability>
            <QuizPage></QuizPage>
            <SurveyPage></SurveyPage>
        </div>
    );
}

export default Home;