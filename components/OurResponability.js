import {Parallax} from 'react-parallax';
import {motion} from 'framer-motion';
import React, {useState} from "react";




function OurResponability(){
    const [modalOpen, setModalOpen] = useState(false);
    const close = () => setModalOpen(false);
    const open = () => setModalOpen(true);
    return(
        <Parallax className={'image'} bgImage={'/test.png'} strength={600} style={{ zIndex: 1000}}>
            <div className={'container hidden'} id={"containerImageThree"} style={{ zIndex: 1000}}>
                <h1 style={{
                    bottom: "10vh",
                    right: "44vh",
                }}>Our Responsability</h1>
                <motion.button
                    className={"ourResponsabilityButtons"}
                    id={"ourResponsabilityButtonTopLeft"}
                    onClick={() => (modalOpen ? close() : open())}
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.9}}
                >187 Straßenbande
                </motion.button>
                <motion.button
                    className={"ourResponsabilityButtons"}
                    id={"ourResponsabilityButtonBottomRight"}
                    onClick={() => (modalOpen ? close() : open())}
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.9}}
                >187 Straßenbande
                </motion.button>
                <motion.button
                    className={"ourResponsabilityButtons"}
                    id={"ourResponsabilityButtonBottomLeft"}
                    onClick={() => (modalOpen ? close() : open())}
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.9}}
                >187 Straßenbande
                </motion.button>
                <motion.button
                    className={"ourResponsabilityButtons"}
                    id={"ourResponsabilityButtonTopRight"}
                    onClick={() => (modalOpen ? close() : open())}
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.9}}
                >187 Straßenbande
                </motion.button>
            </div>
        </Parallax>
    )
}
export default OurResponability;