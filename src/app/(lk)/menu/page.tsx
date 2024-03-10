import React, {useState} from 'react';
import style from "./MenuPage.module.scss"
import Meals from "@/components/Meals"
import { IDiet, IMealData } from '@/interfaces/meal.interface';

const getMeals= async()=>{
    const response = await fetch('http://localhost:4200/days', {
    next: {revalidate: 2}
  })
  
  if(!response.ok){
    throw new Error("Что-то пошло не так")
  }
  return response.json()
}

const MenuPage = async() =>{
  const data = await getMeals()
    return(
      <div className={style.days}>
      {
          data.map(
              (el:IDiet) => (
                  <div key={el.date} className={style.day}>
                      <p className={style.date}>{el.date}</p>
                      <Meals meals={el.meals}/>             
                  </div>
              )
          )
      }
  </div>
        
    )
}

export default MenuPage