import React, { useEffect } from 'react';
import OurResponability from '../components/OurResponability';
import SurveyPage from "../components/SurveyPage";
import LandingPage from "../components/LandingPage";
import OurFutureTest from "../components/OurFuture";

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
            <LandingPage></LandingPage>
            <OurResponability></OurResponability>
            <SurveyPage></SurveyPage>
            {/*<OurFutureTest></OurFutureTest>*/}
        </div>
    );
}

export default Home;