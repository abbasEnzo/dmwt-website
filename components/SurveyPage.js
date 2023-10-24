import {Parallax} from 'react-parallax';
const SurveyPage = () => (
    <Parallax className={'surveyImage'} bgImage={'/firstImage.webp'} strength={600} blur={4}>
        <div className={'container hidden'}>
            <div className={'surveyContainer'}></div>
        </div>
    </Parallax>
)

export default SurveyPage;