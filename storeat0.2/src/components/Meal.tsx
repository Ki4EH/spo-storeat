"use client"
import React, { useState } from "react";
import MenuProductItem from "@/ui/MenuProductItem";
import MenuRecipeItem from "@/ui/MenuRecipeItem";
import styles from "@/styles/Meal.module.scss"
import AddMeal from "./AddMeal";
function Meal(meal: any): JSX.Element {
  const [isActive, setIsActive] = useState<boolean>(false);
  // const [modalActive, setModalActive] = useState<boolean>(false)


  const handleClick = (): void => {
    setIsActive(!isActive);
  };

  return (
    <>    <div className={`${styles.navigation}${isActive ? ` ${styles.active}` : ""}`} >
      <div className={styles.menu}>
        <div className={styles.menu_info}>
          <p className={styles.menu_name}>{meal.meal.name}</p>
          <p className={styles.energy}>{meal.meal.energy}ккал</p>
        </div>
        <div className={styles.buttons}>
          <div className={styles.add}>
            <button className={styles.add_button}>
              <AddMeal />
            </button>
          </div>
          <button className={styles.dropdown_button} onClick={handleClick}>
            <img src="/arrow.svg"></img>
          </button>

        </div>

      </div>

      <ul className={styles.items}>
        {GetList(meal.meal)}
      </ul>
    </div>
      {/* <Add active={modalActive} setActive={setModalActive} /> */}
    </>


  );
}

function GetList(elem: any) {
  let res = new Array<JSX.Element>
  if (elem.products.length === 0) {
    if (elem.recipes.length === 0) {
      return <li className="empty">Пока что здесь пусто :(</li>
    }
  }

  if (elem.products != null) {
    elem.products.map(
      (el: any) => (res.push(<li><MenuProductItem key={el.productId} product={el} /></li>))
    )
  }

  if (elem.recipes != null) {
    elem.recipes.map(
      (el: any) => (res.push(<li><MenuRecipeItem key={el.recipeId} recipe={el} /></li>))
    )
  }

  return res
}

export default Meal