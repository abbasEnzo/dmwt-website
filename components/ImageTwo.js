import {Parallax} from 'react-parallax';

const ImageOne = () => (
    <Parallax className={'image'} bgImage={'/secondImage.jpg'} strength={500}>
        <div className={'content'}>
            <span className={'img-text'}>messi</span>
        </div>
    </Parallax>
)
export default ImageOne;