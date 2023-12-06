import React, { useState, useEffect } from 'react';
import {PulseLoader} from "react-spinners";
import {white} from "next/dist/lib/picocolors";

function LoadingScreen() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // Nach 10 Sekunden setIsVisible auf false setzen
        const timeoutId = setTimeout(() => {
            setIsVisible(false);
        }, 5000);

        // Cleanup-Funktion, um den Timeout zu löschen, wenn das Component unmontiert wird
        return () => clearTimeout(timeoutId);
    }, []); // Das leere Array stellt sicher, dass der Effekt nur einmal nach dem Rendern ausgeführt wird

    return (
        <div className={isVisible ? 'LoadingScreen' : 'LoadingScreenHidden'}>
            <h1 style={{top:"25vh"}}>Your page is loading</h1>
            <PulseLoader color={"white"} style={{position: "absolute", top:"50vh"}}></PulseLoader>
        </div>
    );
}

export default LoadingScreen;
