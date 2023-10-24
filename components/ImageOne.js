import {Parallax} from 'react-parallax';

const ImageOne = () => (
    <Parallax className={'image'} bgImage={'/firstImage.webp'} strength={600}>
        <div className={'container'}>
            <TextBox
                idBoxShadow = 'boxShadowOne'
                idTextBox = 'textBoxOne'
                headline = "Cockmaster"
                text="aksdjflajskledfjklasjdklfalksdjflkj
                ajlksdfjklasjdlfkjaklsdjlfkjslkjdlkfjal
                alksdjfklajsldkfjlkajskldfjaklsjldkfjlas
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
export default ImageOne;