"use client"
import axios from "axios";
import React from 'react';
import styles from "@/styles/DeleteButton.module.scss"

const DeleteProduct = async ({id}: any) => {
    const onDelete = (id: any) => {
       axios.delete(`http://localhost:4200/products/${id}`)
          .then(response => {
            console.log(`Deleted post with ID ${id}`);
            window.location.reload();
            window.location.replace("/products")
          });

          
      }
    //   const pathName = usePathname();
    return (
        <div className={styles.div}>          
            <button type="button" onClick={() => onDelete(id)}>Удалить продукт</button>
        </div>
    );
}

export default DeleteProduct