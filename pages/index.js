import ImageOne from '../components/ImageOne';
import ImageTwo from '../components/ImageTwo';
import ImageThree from '../components/ImageThree';
import TextBox from "../components/TextBox";

function Home(){
    return(
        <div>
            <ImageOne></ImageOne>
            <TextBox></TextBox>
            <ImageTwo></ImageTwo>
            <TextBox></TextBox>
            <ImageThree></ImageThree>
        </div>
    )
}
export default Home