"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import MealForm from './MealForm';
import styles from '@/styles/DeleteButton.module.scss'

const AddMeal = () => {
  const [showOverlay, setShowOverlay] = useState(false);

  const handleClick = () => {
    setShowOverlay(!showOverlay);
  };

  return (
    <>
      <Image 
        src='/add.svg'
        width={15}
        height={15}
        alt="" 
        onClick={handleClick}
      />
      {showOverlay && <MealForm />}
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

export default AddMeal;