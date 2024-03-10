import { IRecipesData } from "@/interfaces/recipe.interface";
import { FC } from "react";
import RecipeItem from "@/ui/RecipeItem";
import Image from "next/image"
import style from "@/styles/Recipes.module.scss"
import AddRecipe from "./AddRecipe";

const Recipes: FC<IRecipesData> = ({recipes})=>{
    return (
        <>
        <main className={style.main}>
        <div className={style.addRecipe}>
        <AddRecipe />
        </div>
        {recipes.length ? recipes.map(recipe => <RecipeItem key={recipe.id} recipe={recipe} />) : <></>}
        </main>
        </>
    )
}

export default Recipes