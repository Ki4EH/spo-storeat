"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import ProductForm from './ProductForm';

const CrossStyle={
  position: 'absolute',
  right: '10px',
  top: '0',
  zIndex: '100'
}

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

export default AddProduct;