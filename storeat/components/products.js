import React, { Component } from 'react';
import Product from './product';


export class Products extends Component {
  render() {
    return (
        <>
        {this.props.products.map(el => (
           <Product onShowInfo={this.props.onShowInfo} key = {el.id} product={el}/>
        ))}
        </>
    )
  }
}

export default Products