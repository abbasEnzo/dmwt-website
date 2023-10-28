
import React, { useEffect } from 'react';
import ImageOne from '../components/ImageOne';
import ImageTwo from '../components/ImageTwo';
import ImageThree from '../components/ImageThree';
import SurveyPage from "../components/SurveyPage";
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import index2 from "./index2";


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
        <Router>
            <div>
                    <ImageOne></ImageOne>
                    <ImageTwo></ImageTwo>
                    <SurveyPage></SurveyPage>
                    <ImageThree></ImageThree>
                <nav>
                    <ul>
                        <li>
                            <Link to="./index2.js">index2</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="./index2.js" component={index2}></Route>
                </Switch>
            </div>
        </Router>
    );
}


export default Home;