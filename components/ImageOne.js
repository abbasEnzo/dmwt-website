import {Parallax} from 'react-parallax';

const ImageOne = () => (
    <Parallax className={'image'} bgImage={'/firstImage.jpg'} strength={500}>
        <div className={'content'}>
            <span className={'img-text'}>Hallooooo</span>
        </div>
    </Parallax>
)
export default ImageOne;