import React from 'react';
import { useState, useEffect } from 'react';
import { useForm, SubmitHandler, useFieldArray, Controller } from 'react-hook-form';
import styles from "@/styles/RecipeForm.module.scss"
import Image from 'next/image';
import axios from 'axios';
import URL from "@/Url"
type Recipe = {
  title: string;
  img?: string;
  calories?: number;
  proteins: number | null;
  fats: number | null;
  carbohydrates: number | null;
  ingredients: {id: number; name: string; weight: number }[];
  desc: {id: number; description: string}[];
};

const RecipeForm = () => {
const [elements, setProducts] = useState<any>([]);


  useEffect(() => {
    // axios.get(`${URL}/recipes?id=34`)
    axios.get(`http:localhost:4200/recipes`)
      .then(response => {
        setProducts(response.data);
      });
  }, []);
 
  const onSubmit: SubmitHandler<Recipe> = (data) => {
    // const newdata = {
    //   "id": 34,
    //   "recipe" : data
    // };
    // axios.post(`${URL}/newrecipe`, newdata)
    axios.post(`http://localhost:4200/recipes`, data)
      .then(response => {
        setProducts([ ...elements, response.data]);
      });
      // console.log(newdata);
      window.location.reload();
  };

  const { register, handleSubmit, control } = useForm<Recipe>();
  const { fields: ingredientFields, append: appendIngredient } = useFieldArray({
    control,
    name: 'ingredients',
  });
  const { fields: stepFields, append: appendStep } = useFieldArray({
    control,
    name: 'desc',
  });

  

  return (
    <div className={styles.window}>
        <div className={styles.container}>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.main_info}>
            <Image
            src="/image-editing 4.svg"
            alt=""
            width={134}
            height={134}
            />
            <input required type="text" placeholder='Название рецепта' {...register("title")} />
            <input placeholder='URL картинки' {...register("img")}/>
        </div>

      <h2>КБЖУ</h2>
      <div className={styles.nutrition}>
        <p>◦ Эн. ценность</p>
        <input type="number" {...register("calories")} placeholder='ккал.'/>
        <p>◦ Белки</p>
        <input type="number" {...register("proteins")} placeholder='гр.'/>
        <p>◦ Жиры</p>
        <input type="number" {...register("fats")} placeholder='гр.'/>
        <p>◦ Углеводы</p>
        <input type="number" {...register("carbohydrates")} placeholder='гр.' />
      </div>

      <h2>Ингредиенты:</h2>
      {ingredientFields.map((field, index) => (
        <div className={styles.ingredients} key={field.id}>
        
          <Controller
            render={({ field }) => <input placeholder="Название ингредиента" {...field} />}
            name={`ingredients[${index}].name`}
            control={control}
          />
          <Controller
            render={({ field }) => <input placeholder="гр." type="number" {...field} />}
            name={`ingredients[${index}].weight`}
            control={control}
          />
          
        </div>
      ))}

      <button
        type="button"
        onClick={() => {
          appendIngredient({id: ingredientFields.length + 1, name: '', weight: 0 });
        }}
      >
        Добавить ингредиент
      </button>

      <h2>Шаги:</h2>
      {stepFields.map((field, index) => (
        <div className={styles.steps} key={field.id}>
          <Controller
            render={({ field }) => <input className={styles.step_count} type="number" {...field} readOnly/>}
            name={`desc[${index}].id`}
            control={control}
          />
          <Controller
            render={({ field }) => <textarea className={styles.step_desc}  {...field} />}
            name={`desc[${index}].description`}
            control={control}
          />
        </div>
      ))}
      

      <button
        type="button"
        onClick={() => {
          appendStep({id: stepFields.length + 1, description: ''});
        }}
      >
        Добавить шаг
      </button>

      <button type="submit">Сохранить рецепт</button>
    </form>
        </div>
        
    </div>
    
  );
};

export default RecipeForm;