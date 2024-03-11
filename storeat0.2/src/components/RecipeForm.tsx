import React from 'react';
import { useState, useEffect } from 'react';
import { useForm, SubmitHandler, useFieldArray, Controller } from 'react-hook-form';
import styles from "@/styles/RecipeForm.module.scss"
import Image from 'next/image';
import axios from 'axios';
import { IIngredient, IRecipe, IDescription } from '@/interfaces/recipe.interface';
import URL from "@/Url"

const RecipeForm = () => {
  useEffect(() => {
    // axios.get(`${URL}/recipes?id=34`)
    axios.get(`http://localhost:4200/recipes`)
      .then(response => {
        setProducts(response.data);
      });
  }, []);
 
  const onSubmit: SubmitHandler<IRecipe> = (data) => {
    if(data.ingredients === undefined){
      data.ingredients = []
    }
    if(data.desc === undefined){
      data.desc = []
    }
    // const newdata = {
    //   "id": 34,
    //   "recipe" : data
    // };
    // axios.post(`${URL}/newrecipe`, newdata)
    axios.post(`http://localhost:4200/recipes`, data)
      .then(response => {
        setProducts([ ...elements, response.data]);
        console.log(response.data);
      })
      // console.log(newdata);
      // window.location.reload();
      .catch(error => {
        console.error(error);
      });
  };

  const { register, handleSubmit } = useForm<IRecipe>();
  const [elements, setProducts] = useState<any>([]);
  const [ingredients, setIngredients] = useState<IIngredient[]>([]);
  const [steps, setSteps] = useState<IDescription[]>([]);

  const addIngredient = () => {
    setIngredients(prevIngredients => [...prevIngredients, { id: ingredients.length, name: '', weight: 0 }]);
};

const addStep = () => {
    setSteps(prevDescriptions => [...prevDescriptions, { id: steps.length, description: '' }]);
};
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
      {ingredients.map((ingredient, index) => (
        <div className={styles.ingredients} key={index}>
          <input type="hidden" {...register(`ingredients.${index}.id`)} defaultValue={index+1}/>
          <input type="text" {...register(`ingredients.${index}.name`)} placeholder='Название игредиента' />
          <input type="number" {...register(`ingredients.${index}.weight`)} placeholder='0гр.' defaultValue={0}/>
        </div>
      ))}
      
      
      <button type="button" onClick={addIngredient}>Добавить ингредиент</button>
      <h2>Шаги:</h2>
      {steps.map((description, index) => (
        
        <div className={styles.steps} key={index}>
          <input type="number" {...register(`desc.${index}.id`)} defaultValue={index+1} readOnly placeholder={`${index + 1}`}/>
          <textarea {...register(`desc.${index}.description`)} placeholder={`Введите шаг№${index + 1}...`}/>
        </div>
      ))}

            
      <button type="button" onClick={addStep}>Добавить шаг</button>
            
      
      <button type="submit">Сохранить рецепт</button>
    </form>
        </div>
        
    </div>
    
  );
};

export default RecipeForm;