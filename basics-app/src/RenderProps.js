import React from "react";
import { Component } from 'react'

 class RenderProps extends Component {
      constructor(props) {
      super(props)
    
      this.state = {
         Count : 0
      }
    }
    incrementCounter = () =>{
        this.setState(prevState =>{
            return{Count : prevState.Count+1}
        })
     }
  render() {
    return (
      <div>{this.props.render(this.state.Count , this.incrementCounter)}</div>
    )
  }
}

export default RenderProps