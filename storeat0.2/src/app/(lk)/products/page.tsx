import Categories from "@/components/Categories"
import Products from "@/components/Products"
import style from './ProductPage.module.scss'
import ShopList from "@/components/ShopList"
import ProductSlider from "@/components/ProductSlider"
import Image from "next/image"
import ProductForm from "@/components/AddProduct"
import AddProduct from "@/components/AddProduct"

// 'http://localhost:4200/slider ?id=34'
const URL = 'http://localhost:4200'

const getSliderItem = async () =>{
  const response = await fetch(`${URL}/slider`, {
    method: "GET",
    headers:{
      "Content-Type": "application/json",
    },
    
    next: {revalidate: 10}
  })

  if(!response.ok){
    throw new Error("Что-то пошло не так")
  }
  return response.json()
}

const getShopList = async () =>{
  const response = await fetch(`${URL}/shopList`, {
    method: "GET",
    headers:{
      "Content-Type": "application/json",
    },
    next: {revalidate: 3600}
  })

  if(!response.ok){
    throw new Error("Что-то пошло не так")
  }
  return response.json()
}

const getProducts = async () => {
  const response = await fetch(`${URL}/products`, {
    next: {revalidate: 1}
  })

  if(!response.ok){
    throw new Error("Что-то пошло не так")
  }

  return response.json()
}

const getCategories = async ()=>{
  const response = await fetch(`${URL}/categories`)

  if(!response.ok){
    throw new Error("Что-то пошло не так")
  }
  return response.json()
}

const ProductPage = async () =>{
  const products = await getProducts()
  const categories = await getCategories()
  const elements = await getShopList()
  const sliderItems = await getSliderItem()

  return (
    <div>
      <div className={style.product_slider}>
        <h1>Продукты, которые скоро испортятся:</h1>
        <div className={style.container_slider}>
        <div className={style.window_slider}>
          <div className={style.slider_wrapper}>
           
            <ProductSlider items = {sliderItems} />
          
          </div>
        </div>
      </div>
      </div>
      <div className={style.category}>
      <Categories categories={categories} />
      <div className={style.category_img}>
      <AddProduct />
      </div>
      </div>
    
    <div className={style.main_wrapper}>
      <div className={style.container}>
        <div className={style.window}>
          <div className={style.product_wrapper}>
          <Products products={products}/>
          </div>
        </div>
      </div>
      
      <div className={style.shopping_list}>
        <h3>Надо купить</h3>
        <ShopList elements={elements}/>
      </div>
    </div>
    
    {/* <ProductForm /> */}
    
    </div>
  )
}

export default ProductPage
