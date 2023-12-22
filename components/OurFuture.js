    'use client';
import { useEffect, useRef, useState } from 'react';
import styles from '../styles/ourFuture.module.scss'
import Image from 'next/image';
import Lenis from '@studio-freight/lenis'
import { useTransform, useScroll, motion } from 'framer-motion';

const images = [
    "/Abholzung.webp",
    "/Waldbrand.webp",
    "/Katastrophe.webp",
    "/Eisberg.webp",
    "/Eisbär.webp",
    "/Flut.webp",
    "/Dürre.webp",
    "/OurFutureText.webp",
    "/SchmelzenDesPolareises.webp",
    "/Smog.webp",
    "/Tornado.webp",
    "/Müllberg.webp",
]

export default function Home() {

    const gallery = useRef(null);
    const [dimension, setDimension] = useState({width:0, height:0});

    const { scrollYProgress } = useScroll({
        target: gallery,
        offset: ['start end', 'end start']
    })
    const { height } = dimension;
    const y = useTransform(scrollYProgress, [0, 1], [0, height * 2])
    const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3])
    const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25])
    const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3])

    useEffect( () => {
        const lenis = new Lenis()

        const raf = (time) => {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        const resize = () => {
            setDimension({width: window.innerWidth, height: window.innerHeight})
        }

        window.addEventListener("resize", resize)
        requestAnimationFrame(raf);
        resize();

        return () => {
            window.removeEventListener("resize", resize);
        }
    }, [])

    return (
        <main className={styles.main}>
            <div className={styles.spacer}></div>
            <div id="section2">
            <div ref={gallery} className={styles.gallery}>
                <Column images={[images[0], images[1], images[2]]} y={y}/>
                <Column images={[images[3], images[4], images[5]]} y={y2}/>
                <Column images={[images[6], images[7], images[8]]} y={y3}/>
                {}
            </div>
            </div>
            {}
        </main>

    )
}

const Column = ({images, y}) => {
    return (
        <motion.div
            className={styles.column}
            style={{y}}
        >
            {
                images.map( (src, i) => {
                    return <div key={i} className={styles.imageContainer}>
                        <Image
                            src={`${src}`}
                            alt='image'
                            fill
                        />
                    </div>
                })
            }
        </motion.div>
    )
}