import '../styles/globals.css'
import {motion, useScroll, useSpring } from "framer-motion";

function MyApp({ Component, pageProps }) {

     const { scrollYProgress } = useScroll();
        const scaleX = useSpring(scrollYProgress, {
                stiffness: 100,
                damping: 50,
                restDelta: 0.001
        });
        return (
            <>
                    <Component {...pageProps} />
                    <motion.div className="progress-bar" style={{ scaleX }} />
            </>
        );
}
export default MyApp