import {Parallax} from 'react-parallax';

const ImageOne = () => (
    <Parallax className={'image'} bgImage={'/firstImage.jpg'} strength={600}>
        <div className={'container'}>
            <span className={'img-text'}>Hallooooo</span>
        </div>
    </Parallax>
)
export default ImageOne;