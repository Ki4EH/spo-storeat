"use client"
import { useState, useEffect } from 'react';
import React from 'react';
import { useForm } from 'react-hook-form';
import styles from "@/styles/ProductForm.module.scss"
import Image from 'next/image';
import axios from 'axios';

const ProductForm = () => {
  const [elements, setProducts] = useState<any>([]);
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    axios.get('http://localhost:4200/products')
      .then(response => {
        setProducts(response.data);
      });
  }, []);

  const onSubmit = async (data: any) => {
    axios.post('http://localhost:4200/products', data)
      .then(response => {
        setProducts([ ...elements, response.data]);
      });
      location.reload();
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
      <input required type="text" placeholder='Название продукта' {...register("name")} />
      <textarea placeholder='Описание' {...register("desc")}/>
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
      <div className={styles.weight}>
      <h2>Вес</h2>
      <input type={"number"} {...register("weight")} placeholder='гр.'/>
      </div>
      <h2>Срок годности</h2>
      <div className={styles.date}>
      <p>годен до:</p>
      <input type="date" {...register("expiresBy")} />
      <p>срок хранения после вскрытия:</p>
      <input type="number" {...register("shelfLife")} placeholder='дней'/>
      </div>
      {/* <input type="date" {...register("openingBy")} /> */}
      <h2>Категория продукта</h2>
      <select {...register("category")}>
        <option value="all">Все</option>
        <option value="fruits">Фрукты</option>
        <option value="vegetables">Овощи</option>
        <option value="dairy">Молочные продукты</option>
        <option value="meat">Мясо</option>
        <option value="seafood">Рыба и морепродукты</option>
        <option value="bakery">Выпечка</option>
        <option value="drinks">Напитки</option>
        <option value="grains">Крупы</option>
        <option value="other">Другое</option>
        </select>
      <button type="submit">Добавить продукт</button>
    </form>
    </div>
    </div>
  );
};

export default ProductForm;