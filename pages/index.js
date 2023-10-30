
import React, { useEffect } from 'react';
import ImageOne from '../components/ImageOne';
import ImageTwo from '../components/ImageTwo';
import ImageThree from '../components/ImageThree';
import SurveyPage from "../components/SurveyPage";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Link from "next/link";


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
            <ImageOne></ImageOne>
            <ImageTwo></ImageTwo>
            <SurveyPage></SurveyPage>
            <ImageThree></ImageThree>
            <div>
                <link href="/index2">
                    <a>
                        <button>To the second page</button>
                    </a>
                </link>
            </div>
        </div>

    );

}
export default Home;