import {Parallax} from 'react-parallax';

const ImageTwo = () => (
    <Parallax className={'image'} bgImage={'/secondImage.jpg'} strength={600}>
        <div className={'container'}>
            <span className={'img-text'}>messi</span>
        </div>
    </Parallax>
)
export default ImageTwo;