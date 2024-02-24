import React, { Component } from 'react'
import style from '../styles/categories.module.css';


export class Categories extends Component {
    constructor(props){
        super(props)
        this.state ={
            categories: [
                {
                    key: 'all',
                    name: 'Все'
                },
                {
                    key: 'fruits',
                    name: 'Фрукты'
                },
                {
                    key: 'vegetables',
                    name: 'Овощи'
                }
            ]
        }
       
    }

  render() {
    return (
        <div className={style.dropdown}>
            <button className={style.drop_btn}>Все</button>
            <div className={style.dropdown_content}>
                {this.state.categories.map(el => ( 
                    <div key = {el.key} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>
                ))}
            </div>
        </div> 
    )
  }

}

export default Categories