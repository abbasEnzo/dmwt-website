import React, { useState, useEffect } from 'react';
import {PropagateLoader} from "react-spinners";


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
            <img src={"LoadingScreen.png"} alt={"/LoadingScreen"} style={{ width: "100%", maxWidth: "100%" }} />
            <PropagateLoader color={"white"} style={{position: "absolute", top:"52vh", left: "107vh", zIndex: "9999"}}></PropagateLoader>
        </div>
    );
}

export default LoadingScreen;