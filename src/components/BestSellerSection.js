import React, { useState } from 'react'
import best_1 from "../pictures/best_1.jpg";
import best_2 from "../pictures/best_2.jpg";
import best_3 from "../pictures/best_3.jpg";
import best_4 from "../pictures/best_4.jpg";
import best_5 from "../pictures/best_5.jpg";
import { HiOutlineChevronRight } from "react-icons/hi";
const BestSellerSection = () => {

    const [cards, setCards] = useState([
        {src:best_1, price:25.63, description:"Quin eo eo est novo vero silvestribus impediat montuosis est"},
        {src:best_2, price:25.63, description:"Quin eo eo est novo vero silvestribus impediat montuosis est"},
        {src:best_3, price:25.63, description:"Quin eo eo est novo vero silvestribus impediat montuosis est"},
        {src:best_4, price:25.63, description:"Quin eo eo est novo vero silvestribus impediat montuosis est"},
        {src:best_5, price:25.63, description:"Quin eo eo est novo vero silvestribus impediat montuosis est"}
    ])

    const [index, setIndex] = useState(0);


    return (
        <div className='bestSeller'>
            <p className='title'>BEST SELLER ORTHOPEDIE</p>
            <div className='cards'>
            {cards&&cards.map((card,key)=>{
                return(
                <div className='card'>
                    <img className="top" src={card.src} alt='image'/>
                    <div className='bottom'>
                        <p className='price'>{card.price.toString().split(".")[0]}<span>.{card.price.toString().split(".")[1]}€</span></p>
                        <p className='text'>{card.description}</p>
                    </div>
                    <HiOutlineChevronRight className='swipeRight' />
                </div>
                )
            })}

            </div>
        </div>
    )
}

export default BestSellerSection