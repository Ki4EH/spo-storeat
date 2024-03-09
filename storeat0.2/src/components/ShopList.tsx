import { IShopListData } from "@/interfaces/shoplist.interface";
import { FC } from "react";


const ShopList: FC<IShopListData> = ({elements}) => {
    return (
        <>
        {elements.length? elements.map(el => <div style={{margin: '5px'}} key={el.id}>▶ {el.name} {el.weight}г.</div>) : <div>Список пустой</div>}
        </>
    )
}

export default ShopList