import {Parallax} from 'react-parallax';
import TextBox from "./TextBox";
import React from "react";

const OurResponability= () => (
    <Parallax className={'image'} bgImage={'/test.jpg'} strength={600}>
        <div className={'container hidden'} id={"containerImageThree"}>
            <h3 style={{

            }}>Our Responsability</h3>
            <p style={{
                bottom: "40px",
            }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci aliquam animi beatae ducimus illo impedit officia optio quae, quaerat quis, quos soluta tempora temporibus voluptas. Ab ad, aliquid consequuntur corporis cum deserunt dolor dolorem doloremque doloribus ducimus ea eos ex fuga hic id, iste itaque iure magnam minima molestias nam neque nostrum officiis quas quasi reiciendis rem ullam vero voluptas voluptate? Aut dolor dolores esse iusto laborum magni nobis quaerat reiciendis ullam. A aut deserunt eos est eveniet ipsam iusto maxime molestiae neque nisi obcaecati porro soluta, tempora unde, voluptatem! Amet error officia pariatur quisquam ratione sed. Aliquam aperiam aspernatur cupiditate delectus dignissimos ea, fugiat, illo, magni molestiae necessitatibus nisi nostrum soluta velit. </p>
        </div>
        <div className="line" id={"lineOurResponsability"}></div>
    </Parallax>
)
export default OurResponability;