import React, { Component } from 'react'
import styles from '../styles/showFullInfo.module.css';


export class ShowFullInfo extends Component {
  render() {
    return (
 
        <div className={styles.menu}>

            <div className={styles.info}>
            <div className={styles.importImage}>
               <input type={"file"} accept={"image/png, image/jpeg"} className={styles.importImage}/>
           </div>

            <div className={styles.productName}>
                <input type={"text"} className={styles.productName} placeholder={"Название продукта"}/>
                <input type={"text"} className={styles.description} placeholder={"Описание"}/>
            </div>

            </div>

            <div className={styles.kbz}>
                <label className={styles.kbz}>КБЖУ</label>
                <ul>
                    <li>
                <label className={styles.energyValue}>Эн.ценность</label>
                <input type={"text"} className={styles.energyValue}/>
                    </li>
                    <li>
                        <label className={styles.protein}>Белки</label>
                        <input type={"text"} className={styles.protein}/>
                    </li>
                    <li>
                        <label className={styles.fat}>Жиры</label>
                        <input type={"text"} className={styles.fat}/>
                    </li>
                    <li>
                        <label className={styles.carbohydrates}>Углеводы</label>
                        <input type={"text"} className={styles.carbohydrates}/>
                    </li>
                </ul>
            </div>
            <div className={styles.weight}>
                <label className={styles.weight}>Вес</label>
                <input type={"text"} className={styles.weight}/>
            </div>

            <div className={styles.expirationDateLabel}>
                <label className={styles.expirationDateLabel}>Срок годности</label>
                <div className={styles.dateProduction}>
                    <label className={styles.dateProduction}>дата производства:</label>
                    <label className={styles.dateOpen}>дата вскрытия:</label>
                    <label className={styles.dateSuitable}>годен до:</label>
                    <label className={styles.dateSuitableOpen}>срок хранения после вскрытия:</label>
                </div>

                <div className={styles.dateOpen}>
                    <input type={"date"}  placeholder={"ДД.ММ.ГГГГ"} className={styles.dateProduction}/>
                    <input type={"date"} placeholder={"ДД.ММ.ГГГГ"} className={styles.dateOpen}/>
                    <input type={"date"} className={styles.dateSuitable} placeholder={"ДД.ММ.ГГГГ"}/>
                    <input type={"date"} capture={styles.dateSuitableOpen} placeholder={"ДД.ММ.ГГГГ"}/>
                </div>
            </div>

            <div className={styles.categoryProduct}>
                <label className={styles.categoryProduct}>Категория продукта</label>
                <input type={"text"} placeholder={"Введите категорию"} className={styles.categoryProduct}/>
            </div>
      </div>
    )
  }
}

export default ShowFullInfo