import React from 'react'
import visa from "../pictures/visa.png"
import paypal from "../pictures/paypal.png"
import master from "../pictures/master.png"
const FooterSection = () => {
    return (
        <div className='footerSection'>
            <div className='top'>
                <div className='first'>
                    <div className='part'>
                        <p className='title'>MEDICALLIANCE</p>
                        <ul>
                            <li>2, rue des Satellites Parc Technologique du Canal 31520 RAMONVILLE SAINT-AGNE</li>
                        </ul>
                    </div>

                    <div className='part'>
                        <p className='title'>Nos services</p>
                        <ul>
                            <li>Réparation et entretien</li>
                            <li>Collecte de matériel médical</li>
                            <li>Dépôt des DASRI</li>
                            <li>Bien-Etre Académie</li>
                        </ul>
                    </div>

                    <div className='part'>
                        <p className='title'>Nos produits</p>
                        <ul>
                            <li>Maintien à domicile</li>
                            <li>Handicap Enfant</li>
                            <li>Handicap adulte</li>
                            <li>Professionnels de santé</li>
                            <li>Ergonomie au travail</li>
                        </ul>
                    </div>

                    <div className='part'>
                        <p className='title'>FOLLOW</p>
                        <ul>
                            <li>Facebook</li>
                            <li>Instagram</li>
                            <li>Twitter</li>
                        </ul>
                    </div>
                </div>
                <div className='second'>
                    <img src={paypal} alt='image'/>
                    <img src={visa} alt='image'/>
                    <img src={master} alt='image'/>
                </div>
            </div>
            <div className='bottom'>
                <p className='copyright'>© Mediclub - 2020. Tous droits réservés.</p>
            </div>
        </div>
    )
}

export default FooterSection