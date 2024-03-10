"use client"
import style from "@/ui/MenuProductItem.module.scss"
import React from "react"
import { useEffect, useState } from "react";
import axios from "axios";

const MenuProductItem = (info: any) => {
    const [product, setProducts] = useState<any>([]);

  useEffect((id = info.product.productId) => {
    axios.get(`http://localhost:4200/products/${id}`)
      .then(response => {
        setProducts(response.data);
      });
  }, []);
    return(
        <>
        <div className={style.content}>
            <div className={style.food_image} style={{backgroundImage: `url(${product.img})`}}> 
            </div>
            <div className={style.food_info}>
                <p>{product.name}</p>
                <p className={style.weight}>{info.product.weight}г</p>
            </div>
            <button type="button" className={style.remove}><img src="/remove.svg"></img></button>
        </div>
        </>

    )
}

export default MenuProductItem