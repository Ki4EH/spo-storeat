import { ICategoryData } from "@/interfaces/category.inteface"
import style from "@/styles/Categories.module.scss"
import { FC } from "react"

  
const Categories: FC<ICategoryData> = ({categories})=>{
  
    return (
    <div className={style.dropdown}>
    <button className={style.drop_btn}>Выбрать категорию</button>
    <div className={style.dropdown_content}>
        {categories.map(el => ( 
            <div key = {el.key}>{el.name}</div>
        ))}
    </div>
    </div> 
    )
}
export default Categories