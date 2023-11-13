import {Parallax} from 'react-parallax';
import TextBox from "./TextBox";

const ImageOne = () => (
    <Parallax className={'image'} bgImage={'/stage1.jpg'} strength={600}>
        <div className={'container hidden'}>
            <h1 style={{
                position: "absolute",
            }}>The Power of Your Click</h1>
            <h3 style={{
                position: "absolute",
                bottom: "30vh",
            }}>Green Choices, Brighter Tomorrows.</h3>
            {/*<TextBox*/}
            {/*    idBoxShadow = 'boxShadowOne'*/}
            {/*    idTextBox = 'textBoxOne'*/}
            {/*    headline = "Title"*/}
            {/*    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.*/}
            {/*    Turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet. Proin sagittis nisl rhoncus mattis.*/}
            {/*    Pulvinar pellentesque habitant morbi tristique senectus et. Mi tempus imperdiet nulla malesuada pellentesque elit eget.*/}
            {/*    Malesuada nunc vel risus commodo viverra maecenas. Semper risus in hendrerit gravida rutrum.*/}
            {/*    Enim blandit volutpat maecenas volutpat blandit aliquam etiam erat. Ipsum dolor sit amet consectetur adipiscing elit duis.*/}
            {/*    Blandit aliquam etiam erat velit scelerisque in dictum non. At tempor commodo ullamcorper a lacus vestibulum.*/}
            {/*    Bibendum enim facilisis gravida neque convallis a cras semper. Lacinia quis vel eros donec ac odio tempor orci dapibus.*/}
            {/*    Eu nisl nunc mi ipsum. Sapien et ligula ullamcorper malesuada proin libero nunc consequat interdum.*/}
            {/*    Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada. Elit eget gravida cum sociis natoque penatibus et magnis dis.*/}
            {/*    Ultrices in iaculis nunc sed augue lacus viverra. Eu facilisis sed odio morbi quis commodo."*/}
            {/*></TextBox>*/}
        </div>
        <div id={"optionsBox"}></div>
    </Parallax>
)
export default ImageOne;