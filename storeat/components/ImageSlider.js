import { useState } from "react";

const ImageSlider=({slides})=>{
    const [currentIndex, setCurrentIndex]= useState(0)
    const sliderStyles={
        height: '100%',
        position: 'relative'
    }
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

    const dotsContainerStyles = {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#5D0000'
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

    const goToSlide = slideIndex =>{
        setCurrentIndex(slideIndex);
    }
    return (
    <div style={sliderStyles}>
        <div style={LeftArrowStyles} onClick={goToPrevious}>≪</div>
        <div style={RightArrowStyles} onClick={goToNext}>≫</div>
        <div style={slideStyles}></div>

        <div style={dotsContainerStyles}>
            {slides.map((slide, slideIndex)=>(
                <div key={slideIndex} style={dotStyles} onClick={()=>goToSlide(slideIndex)}>●</div>
            ))}
        </div>

        
    </div>
    )
};

export default ImageSlider;