export interface ICategory{
    key: string
    name: string
    id: string
}

export interface ICategoryData{
    categories: ICategory[]
}

export interface ICategoryDataSingle{
    category: ICategory
}