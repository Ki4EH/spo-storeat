export interface IProduct{
    id: number;
    img?: string;
    name: string;
    desc?: string;
    calories?: number;
    proteins?: number;
    fats?: number;
    carbohydrates?: number;
    weight?: number;
    openingDate?: string;
    expiresBy?: string;
    shelfLife?: number;
    category: string;
}

export interface IProductData{
    products: IProduct[]
}

export interface IProductDataSingle{
    product: IProduct
}