import Plx from "react-plx";
import React from "react";
import OurFuture from "./OurFuture";
export default function LandingPage() {
    return (
        <div>
            <Plx
                parallaxData={[
                    {
                        start: 0,
                        end: 700,
                        easing: "ease-in",
                        properties: [
                            {
                                startValue: 1,
                                endValue: 3.9,
                                property: "scale"
                            }
                        ]
                    }
                ]}
                style={{
                    position: "fixed",
                    left: 0,
                    top: 0,
                    width: "100%",
                    zIndex: 100
                }}
            >
                <img style={{ width: "100%" }} src="/LandingPageForeground.png" alt="foreground" />
            </Plx>
            <Plx
                parallaxData={[
                    {
                        start: 0,
                        end: 800,
                        properties: [
                            {
                                startValue: 1,
                                endValue: 1.18,
                                property: "scale"
                            }
                        ]
                    }
                ]}
                style={{
                    position: "fixed",
                    left: 0,
                    top: 0,
                    width: "100%"
                }}
            >
                <img style={{ width: "100%" }} src="/landingPageBackground.jpg" alt="background" />
            </Plx>
            <Plx
                parallaxData={[
                    {
                        start: 0,
                        end: 400,
                        properties: [
                            {
                                startValue: 0,
                                endValue: 1,
                                property: "opacity"
                            }
                        ]
                    }
                ]}
                style={{
                    position: "fixed",
                    left: 0,
                    top: "26vw",
                    width: "100%"
                }}
            >
                <h1 style={{
                    bottom: "20vh",
                }}>The Power of your Click</h1>
                <h3 style={{
                    bottom: "24vh",
                }}>Green Choices, Brighter Tomorrows</h3>
                <div className="agendaBar"></div>
            </Plx>
            <div
                style={{
                    position: "fixed",
                    left: 0,
                    top: 0,
                    zIndex: 200,
                    paddingTop: "56%",
                    height: "400vh",
                    width: "100%"
                }}
            >
                <div
                    style={{
                        background: "#000",
                        height: "100%"
                    }}
                ></div>
            </div>
            <OurFuture></OurFuture>
        </div>
    );
}

