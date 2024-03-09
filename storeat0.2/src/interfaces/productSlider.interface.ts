export interface IProductSlider{
    id: number
    productId: number
    name: string
}

export interface IProductSliderData{
    items: IProductSlider[]
}

export interface IProductSliderDataSingle{
    item: IProductSlider
}