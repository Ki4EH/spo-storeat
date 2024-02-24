import React, { Component } from 'react'

export class ListShop extends Component {
    constructor(props){
        super(props)
        this.state={
            list:[
                {
                    id: 1,
                    name: 'Шарлотка'
                },
                {
                    id: 2,
                    name: 'Шаурма'
                }
            ]
        }
    }

  render() {
    return (
        <></>
    )
  }
}