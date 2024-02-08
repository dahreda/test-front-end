import React, { useState } from 'react'
import coverHeader_1 from "../pictures/coverHeader_1.jpg";
import coverHeader_2 from "../pictures/coverHeader_2.jpg";
import coverHeader_3 from "../pictures/coverHeader_3.jpg";
import { HiOutlineChevronRight, HiOutlineChevronLeft} from "react-icons/hi";
const CoverSection = () => {

    const [images, setImages] = useState([
        {src:coverHeader_1},{src:coverHeader_2},{src:coverHeader_3}
    ]);

    const [index, setIndex] = useState(0)

    const handleClickRight = () => {
        if(index+1<images.length){
            setIndex(index+1)
        }else {
            setIndex(0)
        }
    }

    const handleClickLeft = () => {
        if(index>0){
            setIndex(prev=>prev-1)
        }
        else{
            setIndex(images.length-1)
        }
    }

    return (
        <div className='coverSection'>
            <div className='slider' style={{
                margin:"0 auto",
                width:"100%",
                height:"100%",
                backgroundImage:`url(${images[index].src})`,
                backgroundSize:"cover",
                backgroundRepeat:"no-repeat",
                backgroundPosition:"center"
            }}>
            
            <div className='text'>
                <p className='first'>Votre <span>solution santé</span></p>
                <p className='second'>Contulerunt maritima mox igitur Lycaoniam itinera ora viatorum inveniretur intersaepientes se opibus Isauriae contulerunt nihil viatorum opibus praetenturis se ibique.</p>
                <button className='btn'>Savoir plus</button>
            </div>
            <HiOutlineChevronRight onClick={handleClickRight} className='swipeRight'/>
            <HiOutlineChevronLeft onClick={handleClickLeft} className='swipeLeft'/>
            </div>
        </div>
    )
}

export default CoverSection