import {Parallax} from "react-parallax";
import TextBox from "./TextBox";

const ImageTwo = () => (
    <Parallax className={'image'} bgImage={'/secondImage.webp'} strength={600}>
        <div className={'container'}>
            <TextBox
                idBoxShadow  = 'boxShadowTwo'
                idTextBox = 'textBoxTwo'
                headline = "Suslord"
                text=" HHA HDWA*F=HIAWFWasdifjaoiwejoifjoiasejoifjasoiejfoijasoiejfoiajsoifej
                WIIIIIIIIIIIIIIIIIIIII
                IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII
                IIIIIIIIIIIIIIIIIIdaosd Enzpo stinasj
                asdfasdfasdfaaaaaaaaaaaaasdf
                asdfaaaaaaaaaaaaaaaaaaaaaaaaaaa
                asdfffffffffffffffffffffffffffffff
                adfffffffffffffffffffffffffffffffff
                adsfffffffffffffffffffffffffffffffffffff
                asdffffffffffffffffffffffffffffffffffff
                IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII
                IIIIIIIIIIIIIIIIIIdaosd Enzpo stinasj
                asdfasdfasdfaaaaaaaaaaaaasdf
                asdfaaaaaaaaaaaaaaaaaaaaaaaaaaa
                asdfffffffffffffffffffffffffffffff
                adfffffffffffffffffffffffffffffffff
                adsfffffffffffffffffffffffffffffffffffff
                asdffffffffffffffffffffffffffffffffffffIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII
                IIIIIIIIIIIIIIIIIIdaosd Enzpo stinasj
                asdfasdfasdfaaaaaaaaaaaaasdf
                asdfaaaaaaaaaaaaaaaaaaaaaaaaaaa
                asdfffffffffffffffffffffffffffffff
                adfffffffffffffffffffffffffffffffff"
            ></TextBox>
        </div>
    </Parallax>
)

export default ImageTwo;