import React, { Component } from 'react'
import style from "../styles/myRecipes.module.css"

export class Recipe extends Component {
  render() {
    return (
        <div className={style.recipe} onClick={() => this.props.onShowRecipe(this.props.recipe)}>
            <img src={"/"+ this.props.recipe.img} />
            <h2>{this.props.recipe.title}</h2>
        </div>
      
    )
  }
}

export default Recipe