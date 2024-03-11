"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import ProductForm from './ProductForm';
import styles from '@/styles/DeleteButton.module.scss'

const AddProduct = () => {
  const [showOverlay, setShowOverlay] = useState(false);

  const handleClick = () => {
    setShowOverlay(!showOverlay);
  };

  return (
    <>
      <Image 
        src='/plus.svg'
        width={27}
        height={25}
        alt="" 
        onClick={handleClick}
      />
      {showOverlay && <ProductForm />}
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

export default AddProduct;