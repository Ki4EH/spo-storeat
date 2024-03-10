import style from "@/styles/Meals.module.scss"
import Meal from "./Meal"

const Meals = (meals: any) => {
    return(
        <>
        <div className={style.content}>
            {meals.meals.map(
                (el: any) => (
                <Meal key={el.name} meal = {el}/>
                )
            )}
        </div>
        </>
    )
}

export default Meals