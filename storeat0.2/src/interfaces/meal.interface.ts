export interface IMeal{
    name: string;
    energy: number;
    products: Product[];
    recipes: Recipe[];
}
export interface Product {
    productId: number;
    weight: number;
  }
  
export interface Recipe {
    recipeId: number;
    weight: number;
}

export interface IDiet {
    date: string;
    meals: IMeal[];
    id: string;
}
export interface IMealItem {
    id: number;
    name: string;
    img: string;
    weight: number;
}
  
export interface IMealData{
    meals: IMeal[];
}

export interface IMealDataSingle{
    meal: IMeal;
}