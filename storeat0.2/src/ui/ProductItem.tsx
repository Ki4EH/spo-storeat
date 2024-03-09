import { IProductDataSingle } from "@/interfaces/product.interface";
import { FC } from "react";
import style from './ProductItem.module.scss'
import Link from "next/link"

const ProductItem: FC<IProductDataSingle> = ({product})=>{
    return (
        <Link href={`/products/${product.id}`}>
        <div className={style.product_item}>
            <img src={product.img} alt="" />
            <h2>{product.name}</h2>
            <h3>{product.expiresBy}</h3>
        </div>
        </Link>
       
    )
}

export default ProductItem