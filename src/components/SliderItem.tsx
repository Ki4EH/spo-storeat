import ProductItem from '@/ui/ProductItem'


const URL = 'http://localhost:4200'

const getData = async (id : any) => {
    const response = await fetch(`http://localhost:4200/products/${id}`)
    if(!response.ok){
        throw new Error("Что-то пошло не так")
    }
    return response.json()
       
}

const SliderItem = async ({id}: any) => {
    const product = await getData(id)
  return (
    <ProductItem product={product} />
  )
}

export default SliderItem