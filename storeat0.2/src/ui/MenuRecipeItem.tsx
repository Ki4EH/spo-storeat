"use client"
import style from "./MenuRecipeItem.module.scss"
import React from "react"
import { useEffect, useState } from "react";
import axios from "axios";

const MenuRecipeItem = (info: any) => {
    const [recipe, setRecipe] = useState<any>([]);

  useEffect((id = info.recipe.recipeId) => {
    axios.get(`http://localhost:4200/recipes/${id}`)
      .then(response => {
        setRecipe(response.data);
      });
  }, []);
  console.log(recipe)
    return(
        <>
        <div className={style.content}>
            <div className={style.food_image} style={{backgroundImage: `url(${recipe.img})`}}> 
                {/* тут в food_image бэкграундом должна быть картинка продукта, info содержит айди, вес продукта */}
                {/*t = products или recipes, благодаря ей можно искать в соответствующей бд айдишник*/}
            </div>
            <div className={style.food_info}>
                <p>{recipe.title}</p>
                <p className={style.weight}>{info.recipe.weight}г</p>
            </div>
            <button type="button" className={style.remove}><img src="/remove.svg"></img></button>
        </div>
        </>

    )
}

export default MenuRecipeItem