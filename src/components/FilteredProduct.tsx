"use client"
import { IProductData } from '@/interfaces/product.interface';
import React, { useState, FC  } from 'react';

const App:FC<IProductData> = (products : any) => {
  const [category, setCategory] = useState(''); // Состояние выбранной категории
  const [filteredItems, setFilteredItems] = useState([]); // Состояние отфильтрованного списка

  // Ваш исходный список
  const items = [

    { name: 'Item 1', category: 'Category 1' },
    { name: 'Item 2', category: 'Category 2' },
    { name: 'Item 3', category: 'Category 1' },
    // Другие элементы списка...
  ];

  // Обработчик события выбора категории
  const handleCategoryChange = (event : any) => {
    const selectedCategory = event.target.value;
    setCategory(selectedCategory);

    // Фильтрация списка по выбранной категории
    const filtered = products.filter((product) => product.category === selectedCategory);
    setFilteredItems(filtered);
  };

  return (
    <div>
      <select value={category} onChange={handleCategoryChange}>
        <option value="">Все категории</option>
        <option value="Category 1">Категория 1</option>
        <option value="Category 2">Категория 2</option>
        {/* Другие варианты категорий... */}
      </select>

      {/* Отображение отфильтрованного списка */}
      <ul>
        {filteredItems.map((product, index) => (
          <li key={index}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;