import React from 'react'
import secured from "../pictures/secured.png";
import livraison from "../pictures/livraison.png";
import controlled from "../pictures/controlled.png";
import retour from "../pictures/retour.png";
const AvantagesSection = () => {
    return (
        <div className='avantagesSection'>
            <div className='bigTitle'><p>Les avantges</p></div>
            <div className='cards'>
                <div className='card'>
                    <img src={livraison} alt='logo'/>
                    <p className='title'>Livraison gratuit</p>
                    <p className='text'>Livraison express gratuite à domicile ou en point relais avec le Pass Livraison</p>
                </div>

                <div className='card'>
                    <img src={retour} alt='logo'/>
                    <p className='title'>Retour gratuit</p>
                    <p className='text'>Retournez et échangez sans frais pendant 30 jours avec le Pass Livraison</p>
                </div>
                
                <div className='card'>
                    <img src={controlled} alt='logo'/>
                    <p className='title'>Produits contrôlés</p>
                    <p className='text'>Vous passez commande auprès de pharmacies françaises</p>
                </div>
                
                <div className='card'>
                    <img src={secured} alt='logo'/>
                    <p className='title'>Achats 100% sécurisés</p>
                    <p className='text'>Le plus haut niveau de sécurité pour vos achats santé en ligne</p>
                </div>
            </div>
        </div>
    )
}

export default AvantagesSection