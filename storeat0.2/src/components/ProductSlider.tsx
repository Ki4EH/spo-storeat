import { IProductSliderData } from "@/interfaces/productSlider.interface"
import SliderItem from "./SliderItem"
import { FC } from "react"
import URL from "@/Url"

const getData = async (id:any) => {
    // const response = await fetch(`${URL}/products/${id}`)
    const response = await fetch(`http://localhost:4200/products/${id}`)
    if(!response.ok){
        throw new Error("Что-то пошло не так")
    }
    return response.json()
       
}

const ProductSlider:FC<IProductSliderData> = ({items}) =>{
    return (<>
    {items.length ? items.map(item => <SliderItem key={item.id} id={item.productId} />) : <div>У вас нет таких продуктов</div>}
    </> 
    ) 
}

export default ProductSlider