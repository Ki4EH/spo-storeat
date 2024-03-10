import Categories from "@/components/Categories"
import Products from "@/components/Products"
import style from './ProductPage.module.scss'
import ShopList from "@/components/ShopList"
import ProductSlider from "@/components/ProductSlider"
import AddProduct from "@/components/AddProduct"
import URL from "@/Url"

// 'http://localhost:4200/slider ?id=34'

const getSliderItem = async () =>{
  // const response = await fetch(`${URL}/expiredproducts?id=34`, {
    const response = await fetch(`http://localhost:4200/expiredproducts`, {
    method: "GET",
    headers:{
      "Content-Type": "application/json",
    },
    
    next: {revalidate: 10}
  })

  if(!response.ok){
    console.log("Что-то пошло не так")
  }
  return response.json()
}

const getShopList = async () =>{
  const response = await fetch(`http://localhost:4200/shopList`, {
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
  // const response = await fetch(`${URL}/products?id=34`, {
    const response = await fetch(`http://localhost:4200/products`, {
    method: "GET",
    headers:{
      "Content-Type": "application/json",

    }, next: {revalidate: 1}}
   )

  if(!response.ok){
    throw new Error("Что-то пошло не так")
  }

  return response.json()
}

const getCategories = async ()=>{
  const response = await fetch(`http://localhost:4200/categories`)

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
    
    </div>
  )
}

export default ProductPage
