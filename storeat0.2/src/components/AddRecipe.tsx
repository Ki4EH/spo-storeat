"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import RecipeForm from "./RecipeForm";

const CrossStyle={
  position: 'absolute',
  right: '10px',
  top: '0',
  zIndex: '100'
}

const AddRecipe = () => {
  const [showOverlay, setShowOverlay] = useState(false);

  const handleClick = () => {
    setShowOverlay(!showOverlay);
  };

  return (
    <>
        <Image 
          src='/plus.svg'
          width={52}
          height={49}
          alt=""
          onClick={handleClick}
        />
      
      {showOverlay && <RecipeForm />}
      {showOverlay && <div style={CrossStyle}><Image 
        src='/close.svg'
        width={27}
        height={25}
        alt="" 
        onClick={handleClick}
      /></div>}
    </>
  );
};

export default AddRecipe;