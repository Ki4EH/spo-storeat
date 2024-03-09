'use client'
import { useState } from 'react';

const Slider=()=>{
    const slides=[
        {id: 1, url: 'image-1.jpg'},
        {id: 2, url: 'image-2.jpg'},
        {id: 3, url: 'image-3.jpg'},
        {id: 4, url: 'image-4.jpg'}
    ];

    const containerStyles={
        width: '100%',
        height: '350px',
        margin: '0 auto'
    }

    const [currentIndex, setCurrentIndex]= useState(0)

    const slideStyles ={
        width: '100%',
        height: '100%',
        borderRadius: '10px',
        backgroundPosition: 'center',
        backgroundSize:'cover',
        backgroundImage: `url(${slides[currentIndex].url})`
    }
    const LeftArrowStyles={
        position: 'absolute',
        top: '50%',
        transform: 'translate(0, -50%)',
        left: '32px',
        fontSize: '35px',
        color: '#fff',
        zIndex: '1',
        cursor: 'pointer'
    }
    const RightArrowStyles={
        position: 'absolute',
        top: '50%',
        transform: 'translate(0, -50%)',
        right: '32px',
        fontSize: '35px',
        color: '#fff',
        zIndex: '1',
        cursor: 'pointer'
    }

    const goToPrevious =()=>{
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length -1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }


    const dotStyles = {
        margin: '0 3px',
        color: 'rgba(237, 154, 98, 0.7)',
        cursor: 'pointer',
        fontSize: '35px'
    }

    const goToNext=()=>{
        const isLastSlide = currentIndex === slides.length -1;
        const newIndex = isLastSlide ? 0 : currentIndex+1;
        setCurrentIndex(newIndex)
    }
    
    return(
        <div style={containerStyles}>
            <div style={{height: '100%', position: 'relative'}}>
            <div style={{position: 'absolute', top: '50%', transform: 'translate(0, -50%)', left: '32px', fontSize: '35px', color: '#fff', zIndex: '1', cursor: 'pointer'}} onClick={goToPrevious}>≪</div>
            <div style={{position: 'absolute',
                        top: '50%',
                        transform: 'translate(0, -50%)',
                        right: '32px',
                        fontSize: '35px',
                        color: '#fff',
                        zIndex: '1',
                        cursor: 'pointer'}} onClick={goToNext}>≫</div>
            <div style={slideStyles}></div>   
            </div>    
        </div>
    )
}

export default Slider;
