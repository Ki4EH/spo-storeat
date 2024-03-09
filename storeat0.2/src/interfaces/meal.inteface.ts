export interface IMeal{
    id: number
    date: string;
    breakfast: IMealItem[];
    lunch: IMealItem[];
    dinner: IMealItem[];
    snack: IMealItem[];
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