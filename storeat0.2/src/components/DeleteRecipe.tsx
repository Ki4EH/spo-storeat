"use client"
import axios from "axios";
import React from 'react';
import styles from '@/styles/DeleteButton.module.scss'
const DeleteRecipe = async ({id}: any) => {
    const onDelete = (id: any) => {
       axios.delete(`http://localhost:4200/recipes/${id}`)
          .then(response => {
            console.log(`Deleted post with ID ${id}`);
            window.location.reload();
            window.location.replace("/recipes")
          });
      }
    //   const pathName = usePathname();
    return (
        <div className={styles.div}>          
            <button  type="button" onClick={() => onDelete(id)}>Удалить рецепт</button>
        </div>
    );
}

export default DeleteRecipe