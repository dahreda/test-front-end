import React from 'react';
import image from "../pictures/sixSection.jpg";
const TheSixSection = () => {

    return (
        <div className='sixSection'>

            <div className='sides'>
                <div className='top'>
                    <div className='leftSide'>
                        <div className='parag_1'>
                            <p className='title'>Achat de médicaments et de produits de paramédical sur internet</p>
                            <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis risus mi. Ut placerat quam lectus. Curabitur dictum velit non lacus ornare tempor. Nullam quis augue in leo aliquet malesuada sit amet eget eros. Sed laoreet posuere velit sit amet varius. Nulla eget purus non erat fringilla sodales vel a nulla. Cras sit amet tempus risus. Fusce dignissim blandit justo, eget elementum risus tristique a. Nunc fringilla lacus lacus, sit amet accumsan est pulvinar non. Praesent tristique enim lorem. Phasellus a auctor lacus. Proin vitae accumsan nunc.</p>
                        </div>
                        <div className='parag_2'>
                            <p className='title'>Votre paramédical  en ligne</p>
                            <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis risus mi. Ut placerat quam lectus. Curabitur dictum velit non lacus ornare tempor. Nullam quis augue in leo aliquet malesuada sit amet eget eros. Sed laoreet posuere velit sit</p>
                        </div>
                    </div>
                    <div className='rightSide'>
                        <img src={image} alt='image'/>
                    </div>
                </div>
                <div className='bottom'>
                    <p>Integer ac interdum lacus. Nunc porta semper lacus a varius. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc sagittis consectetur velit, ac gravida nunc gravida et. Vestibulum at eros imperdiet, volutpat nunc vitae, ornare erat. Proin interdum aliquet porta. Fusce ut semper ligula.</p>
                </div>
            </div>

        </div>
    )
}

export default TheSixSection