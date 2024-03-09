export interface IRecipe {
    id: number;
    title: string;
    img?: string;
    ingredients?: IIngredient[];
    calories?: number;
    proteins: number | null;
    fats: number | null;
    carbohydrates: number | null;
    desc?: IDescription[];
}
  
export interface IIngredient {
    id: number;
    name: string;
    weight: number;
}
  
export interface IDescription {
    id: number;
    description: string;
}

export interface IRecipesData{
    recipes: IRecipe[]
}

export interface IRecipeDataSingle{
    recipe: IRecipe
}