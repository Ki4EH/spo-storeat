import React from 'react'
import style from "./ProductPage.module.scss"
import Image from 'next/image'

const URL = 'http://localhost:4200'

const getData = async (id:any) =>{
    const response = await fetch(`${URL}/products/${id}`, {
      method: "GET",
      headers:{
        "Content-Type": "application/json",
      },
      cache: "force-cache"
})
    if(!response.ok){
        throw new Error("Что-то пошло не так")
    }
    return response.json()
}

const ProductPage = async ({params}: any) => {
    const {id} =params;
    const product = await getData(id);

  return (
    <div className={style.fullProduct}>
        <h2>{product.name}</h2>  
        <div className={style.wrapper}>
        <img src={product.img} />
        <div className={style.info}>
            <h4>Вес:</h4>
            <p>{product.weight} гр.</p>
            <h4>Дата вскрытия:</h4>
            <p>{product.openingDate}</p>
            <h4>Хранится до:</h4>
            <p>{product.expiresBy}</p>
        </div>
        <div className={style.nutrition}>
            <p className={style.mini_title}>КБЖУ (на 100г)</p>
            <p>● Эн. ценность - {product.calories} ккал.</p>
            <p>● Белки - {product.proteins} гр.</p>
            <p>● Жиры - {product.fats} гр.</p>
            <p>● Углеводы - {product.carbohydrates} гр.</p>
        </div>
        </div>
        <h3>Описание</h3>
        <p>{product.desc}</p>      
      </div>
  )
}

export default ProductPage