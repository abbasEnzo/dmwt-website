import {Parallax} from 'react-parallax';

const ImageOne = () => (
    <Parallax className={'image'} bgImage={'/thirdImage.jpg'} strength={500}>
        <div className={'content'}>
            <span className={'img-text'}>Frau wenn sie erik sieht</span>
        </div>
    </Parallax>
)
export default ImageOne;