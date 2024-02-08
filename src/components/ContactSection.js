import React from 'react'
import contactCover_1 from "../pictures/contactCover_1.jpg";
import contactCover_2 from "../pictures/contactCover_2.jpg";
const ContactSection = () => {
    return (
        <div className='contactSection'>
            <div className='leftSide' style={{
                background: `linear-gradient(0deg, #0078a5 0%, rgba(0,105,146,0) 100%),url(${contactCover_1})`,
                backgroundSize:"cover",
                backgroundPosition:"center"
            }}>
                <p className='title'>Restons en contact</p>
                <p className='text'>Inscrivez-vous à nos communications et bénéficiez de contenus exclusifs, du programme fidélité et d'offres personnalisées. Pas plus d'un email, par semaine.</p>
                <form>
                    <input type='email' placeholder='Votre adresse email'/>
                    <button className='btn'>je m'inscris</button>
                </form>
            </div>
            <div className='rightSide'>
                <img src={contactCover_2} alt="image"/>
            </div>
        </div>
    )
}

export default ContactSection