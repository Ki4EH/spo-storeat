import React, { Component } from 'react'
import style from '../styles/myProducts.module.css'


export class Product extends Component {
    
  render() {
    return (
        <div className={style.product} onClick={() => this.props.onShowInfo(this.props.product)}>
            <img src={"/"+ this.props.product.img} />
            <h2>{this.props.product.name}</h2>
            <p>до {this.props.product.expiresBy}</p>
        </div>
    )
  }
}

export default Product
