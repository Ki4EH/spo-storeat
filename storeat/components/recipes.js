import React, { Component } from 'react';
import Image from 'next/image';
import Recipe from './recipe';
import style from '../styles/myRecipes.module.css';
export class Recipes extends Component {
  render() {
    return (
      <main className={style.main}>
        <div className={style.addRecipe}>
        <Image 
          src='/plus.svg'
          width={52}
          height={49}
          alt=""
        />
        </div>
        
        {this.props.recipes.map(el => (
           <Recipe onShowRecipe={this.props.onShowRecipe} key = {el.id} recipe={el}/>
        ))}
      </main>
    )
  }
}

export default Recipes