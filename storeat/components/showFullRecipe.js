import React, { Component } from 'react'
import style from '../styles/fullRecipe.module.css'


export class ShowFullRecipe extends Component {
  render() {
    return (
      <div className={style.fullRecipe} onClick={() => this.props.onShowRecipe(this.props.recipe)}>
            <h2 className={style.title}>{this.props.recipe.title}</h2>
            <div className={style.wrapper}>
            <div className={style.img}><img src={"/"+ this.props.recipe.img} /></div>
            <div className={style.ingredients}>
                <p className={style.mini_title}>Ингредиенты</p>
                
                <p>{this.props.recipe.ingredients.map(el=>(
                    <p key={el.id}>● {el.name} - {el.weight}</p>
                ))}</p>
            </div>
            <div className={style.nutrition}>
                <p className={style.mini_title}>КБЖУ (на 100г)</p>
                <p>● Эн. ценность - {this.props.recipe.calories}</p>
                <p>● Белки - {this.props.recipe.proteins}</p>
                <p>● Жиры - {this.props.recipe.fats}</p>
                <p>● Углеводы - {this.props.recipe.carbohydrates}</p>
            </div>
            </div>
            <p className={style.mini_title}>Описание</p>
            <p className={style.desc}>{this.props.recipe.desc}</p>
      </div>
    )
  }
}

export default ShowFullRecipe