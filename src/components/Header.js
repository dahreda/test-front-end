import React from 'react'
import logo from "../pictures/logo.png"
import search from "../pictures/search.png"
import person from "../pictures/person.png"
import phone from "../pictures/phone.png"
import cart from "../pictures/cart.png"
const Header = () => {
    return (
        <div className='navbar'>
            <div className='top'>
                <img className="logo" src={logo} alt='logo'/>
                <div className='searchBar'>
                    <input type='text'/>
                    <img className="search" src={search} alt='search'/>
                </div>
                <div className='navbar_icons'>
                    <img className="person" src={person} alt='person'/>
                    <img className="phone" src={phone} alt='phone'/>
                    <img className="cart" src={cart} alt='cart'/>
                </div>
            </div>
            <div className='bottom'>
                <ul className='navlinks'>
                    <li>ACCUEIL</li>
                    <li>PRODUITS</li>
                    <li>SERVICES</li>
                    <li>QUI SOMMES-NOUS ?</li>
                    <li>EXPERIENCE</li>
                    <li>INFOS/CONTACT</li>
                </ul>
            </div>
        </div>
    )
}

export default Header