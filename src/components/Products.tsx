import { IProductData } from "@/interfaces/product.interface";
import { FC } from "react";
import ProductItem from "@/ui/ProductItem";

const Products: FC<IProductData> = ({products}) =>{
    return (
        <>
            {products.length ? products.map(product => <ProductItem key={product.id} product={product}/>): <div>У вас пока нет продуктов</div>}
        </>
    ) 
}

export default Products