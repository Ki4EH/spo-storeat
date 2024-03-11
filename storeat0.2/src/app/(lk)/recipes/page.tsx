import Recipes from "@/components/Recipes"
import style from './RecipePage.module.scss'
import URL from "@/Url"

const getRecipes = async () => {
  // const response = await fetch(`${URL}/recipes?id=34`, {
    const response = await fetch(`http:localhost:4200/recipes`, {
    // cache: "no-store"
  })
  
  if(!response.ok){
    throw new Error("Что-то пошло не так")
  }
  return response.json()
}

const RecipePage = async () => {
  const recipes = await getRecipes()
    return (
      <div>
          <div className={style.title}>Все рецепты</div>
          <Recipes recipes={recipes} />
      </div>
    )
  }

export default RecipePage