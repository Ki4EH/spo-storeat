
import style from "./RecipePage.module.scss"
import Image from "next/image"
import DeleteRecipe from "@/components/DeleteRecipe";
import URL from "@/Url"

const getData = async (id:any) =>{
    // const response = await fetch(`${URL}/recipesingle?id=34&recipeId=${id}`, {
      const response = await fetch(`http://localhost:4200/recipes/${id}`, {
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

const RecipePage = async ({params}:any) => {
    const {id} = params;
    const recipe = await getData(id)
    const recipeId = recipe.id
  return (
    <div className={style.fullRecipe}>
        <div className={style.title}>
        <h2>{recipe.title}</h2>
        </div>
              
        <div className={style.wrapper}>
        <img src={recipe.img} />
        <div className={style.ingredients}>
            <div className={style.mini_title}>Ингредиенты</div>
            
            {recipe.ingredients.map((el:any) =>(
                <p key={el.id}>● {el.name} - {el.weight} гр.</p>
            ))}
        </div>
        <div className={style.nutrition}>
            <p className={style.mini_title}>КБЖУ (на 100 гр)</p>
            <p>● Эн. ценность - {recipe.calories} ккал.</p>
            <p>● Белки - {recipe.proteins != '' ? recipe.proteins : '?'} гр.</p>
            <p>● Жиры - {recipe.fats != '' ? recipe.fats : '?'} гр.</p>
            <p>● Углеводы - {recipe.carbohydrates != '' ? recipe.carbohydrates : '?'} гр.</p>
        </div>
        </div>

            <p className={style.mini_title}>Описание</p>
            <div className={style.container}>
            {recipe.desc.map((el:any)=>(
                <p className={style.desc} key={el.id}>{el.id}. {el.description}</p>
            ))}
            </div>
         <DeleteRecipe id = {recipeId}/> 
      </div>
  )
}

export default RecipePage