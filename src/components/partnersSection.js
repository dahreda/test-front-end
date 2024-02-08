import React from 'react'
import partner_1 from "../pictures/partner_1.png"
import partner_2 from "../pictures/partner_2.png"
import partner_3 from "../pictures/partner_3.png"
import partner_4 from "../pictures/partner_4.png"
const PartnersSection = () => {
    return (
        <div className='partnersSection'>
            <p className='title'>Nos partenaires</p>
            <div className='images'>
                <img src={partner_1} alt='partner_1'/>
                <img src={partner_2} alt='partner_2'/>
                <img src={partner_3} alt='partner_3'/>
                <img src={partner_4} alt='partner_4'/>
            </div>
            <button className='btn'>Voir tous nos marques</button>
        </div>
    )
}

export default PartnersSection