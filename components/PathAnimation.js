import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

const PathAnimation = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const { x } = useSpring({
        x: scrollY,
        from: { x: 0 },
        config: { duration: 1000 },
    });

    return (
        <div style={{ height: '210vh', position: 'relative' }}>
            <svg width="100%" height="100%" viewBox="0 0 657 924" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="paint0_linear_1_3" x1="328.5" y1="0" x2="328.5" y2="886" gradientUnits="userSpaceOnUse">
                        <stop stopColor="white" />
                        <stop offset="0.614583" stopColor="#5BC37E" />
                    </linearGradient>
                </defs>
                <animated.path
                    d="M653 0V265.845C653 285.175 637.33 300.845 618 300.845H39C19.6701 300.845 4 316.515 4 335.845V609.865C4 629.195 19.67 644.865 39 644.865H618C637.33 644.865 653 660.535 653 679.865V924"
                    stroke="url(#paint0_linear_1_3)"
                    strokeWidth="7"
                    style={{
                        strokeDasharray: 1180, // Adjust this based on the length of your path
                        strokeDashoffset: x.interpolate((val) => 1180 - val),
                    }}
                />
            </svg>
        </div>
    );
};

export default PathAnimation;
