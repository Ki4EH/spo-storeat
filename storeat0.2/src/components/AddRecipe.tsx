"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import RecipeForm from "./RecipeForm";
import styles from '@/styles/DeleteButton.module.scss'

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
      {showOverlay && <div className={styles.CrossStyle}><Image 
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