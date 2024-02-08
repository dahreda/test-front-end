import React, { useState } from 'react'
import coverHeader_1 from "../pictures/coverHeader_2.jpg";
import coverHeader_2 from "../pictures/coverHeader_3.jpg";
import coverHeader_3 from "../pictures/coverHeader_4.jpg";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";

const ConseilsSection = () => {
    const [cards, setCards] = useState([
        {src:coverHeader_1,title:"Votre solution sant", description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod"},
        {src:coverHeader_2,title:"Votre solution sant", description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod"},
        {src:coverHeader_3,title:"Votre solution sant", description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod"}
    ])
    return (
        <div className='conseilsSection'>
            <p className='bigTitle'>Nos conseils santé</p>

            <div className='cards'>
                {
                    cards&&cards.map((card,key)=>{
                        return(
                            <div className='card' key={key} style={{
                                background: `linear-gradient(0deg, #0078a5 0%, rgba(0,105,146,0) 100%),url(${card.src})`,
                                backgroundSize:"cover"
                            }}>
                                <div className='bottom'>
                                    <p className='title'>{card.title}</p>
                                    <p className='text'>{card.description}</p>
                                </div>
                            </div>
                        )
                    })
                }
                <HiOutlineChevronRight className='swipeRight'/>
                <HiOutlineChevronLeft className='swipeLeft'/>
                
            </div>
        </div>
    )
}

export default ConseilsSection