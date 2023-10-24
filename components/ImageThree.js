import {Parallax} from 'react-parallax';

const ImageThree= () => (
    <Parallax className={'image'} bgImage={'/thirdImage.jpg'} strength={600}>
        <div className={'container'}>
            <span className={'img-text'}>Frau wenn sie erik sieht</span>
        </div>
    </Parallax>
)
export default ImageThree;