import {Parallax} from 'react-parallax';
import {animate, motion} from 'framer-motion';
import React, {useState} from "react";
import {zip} from "three/addons/libs/fflate.module";




function OurResponsability(){
    const [modal, toggleModal] = useState(false);
    const setModal = () => {
        toggleModal(!modal);
    };
    const [isClicked, setIsClicked] = useState(false);
    const openBox = () => {
        setIsClicked(true);
    };
    const closeBox = () => {
        setIsClicked(false);
    };
    const animationVariants = {
        open: { opacity: 0, x: -100 },
        closed: { opacity: 1, x: 0 },
    };
    return(
        <Parallax className={'image'} bgImage={'/test.png'} strength={600} style={{ zIndex: 1000}}>
            <div id="section3" style={{zIndex:1000}}>
            <div className={'container hidden'} style={{ zIndex: 1000}}>
                <h1 style={{
                    fontSize: "60px",
                    top: "8vh",
                    right:"3vh",
                    whiteSpace: "nowrap",
                }}>Our Responsability</h1>
                <p style={{width: "80vh", bottom:"8vh"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis deserunt eos rem repellat suscipit. Corporis dolore illum nobis pariatur! Ad doloribus ipsa laudantium molestias provident sint, veritatis! In molestias odio repellat vel. Accusamus accusantium debitis esse nemo. Accusamus asperiores aspernatur aut commodi consectetur, corporis deserunt eaque eligendi exercitationem facere fugit illo illum in laboriosam laudantium molestiae nam natus necessitatibus nemo neque nisi nulla odio omnis perferendis placeat possimus praesentium quae quam quisquam recusandae repudiandae similique sunt unde. Aliquid aspernatur dolorem earum enim laborum, maiores sequi tempore ullam voluptate voluptatem. Atque dolorum eius excepturi exercitationem fugiat hic, laboriosam molestiae molestias necessitatibus nesciunt officia pariatur praesentium quas qui quidem repellat soluta ullam unde ut, veritatis! Aut debitis dolore hic laudantium libero nesciunt nihil odit officia officiis omnis perspiciatis, quasi quidem sapiente tempore tenetur velit voluptas. Accusantium aliquam autem delectus dicta distinctio, dolorem eaque fuga fugiat incidunt iste iure laborum laudantium natus odit quaerat quas quibusdam quod reiciendis repudiandae sed. Aut, quo tempora? Aliquid cum dolorum eligendi eveniet explicabo fugiat molestias velit, voluptate? A accusantium at deleniti dolores est incidunt nisi numquam possimus sapiente vitae! Blanditiis inventore labore quidem ratione. Corporis error fuga quia quo totam? A expedita obcaecati, quasi quia saepe ullam!</p>
                </div>
            </div>
        </Parallax>
    )
}
export default OurResponsability;