import style from "./RecipePage.module.scss"
import Image from "next/image"

const URL = 'http://localhost:4200'

const getData = async (id:any) =>{
    const response = await fetch(`${URL}/recipes/${id}`, {
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
  return (
    <div className={style.fullRecipe}>
        <div className={style.title}>
        <h2>{recipe.title}</h2>
        </div>
              
        <div className={style.wrapper}>
        <img src={recipe.img} />
        <div className={style.ingredients}>
            <div className={style.mini_title}>Ингредиенты</div>
            
            <p>{recipe.ingredients.map(el=>(
                <p key={el.id}>● {el.name} - {el.weight} гр.</p>
            ))}</p>
        </div>
        <div className={style.nutrition}>
            <p className={style.mini_title}>КБЖУ (на 100 гр)</p>
            <p>● Эн. ценность - {recipe.calories} ккал.</p>
            <p>● Белки - {recipe.proteins != null ? recipe.proteins : '?'} гр.</p>
            <p>● Жиры - {recipe.fats != null ? recipe.fats : '?'} гр.</p>
            <p>● Углеводы - {recipe.carbohydrates != null ? recipe.carbohydrates : '?'} гр.</p>
        </div>
        </div>

            <p className={style.mini_title}>Описание</p>
            <div className={style.container}>
            {recipe.desc.map(el=>(
                <p className={style.desc} key={el.id}>{el.id}. {el.description}</p>
            ))}
            </div>
            
      </div>
  )
}

export default RecipePage