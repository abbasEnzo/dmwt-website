
import React, { useEffect } from 'react';
import ImageOne from '../components/ImageOne';
import ImageTwo from '../components/ImageTwo';
import ImageThree from '../components/ImageThree';

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
            <ImageThree></ImageThree>
        </div>
    );
}

export default Home;