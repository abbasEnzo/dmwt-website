import { motion } from "framer-motion";
const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: 'smooth' });
};
const AgendaBox= () => (
    <div className={"agendaBar"}>
        <motion.button whileHover={{color: "rgb(91, 195, 126)"}} className={"agendaBarButtons"} onClick={() => scrollToSection( 'section1')}>The Power of your Click</motion.button>
        <motion.button whileHover={{color: "rgb(91, 195, 126)"}} className={"agendaBarButtons"} onClick={() => scrollToSection('section2')}>Our Future</motion.button>
        <motion.button whileHover={{color: "rgb(91, 195, 126)"}} className={"agendaBarButtons"} onClick={() => scrollToSection('section3')}>Our Responsability</motion.button>
        <motion.button whileHover={{color: "rgb(91, 195, 126)"}} className={"agendaBarButtons"} onClick={() => scrollToSection('section4')}>Your personal Responsability</motion.button>
    </div>

)

export default AgendaBox;