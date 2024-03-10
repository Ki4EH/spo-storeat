import { IRecipeDataSingle } from "@/interfaces/recipe.interface";
import { FC } from "react";
import style from "./RecipeItem.module.scss"
import Link from "next/link"

const RecipeItem: FC<IRecipeDataSingle> = ({recipe}) =>{
    return (
        <Link href={`/recipes/${recipe.id}`}>
            <div className={style.recipe}>
                {recipe.img?.length!=0 ?<img src={recipe.img}/> : <img/>}
                <h2>{recipe.title}</h2>
            </div>
        </Link>  
    )
}

export default RecipeItem