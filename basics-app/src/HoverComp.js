import React, { Component } from 'react'
import UpdatedComponent from './HOC'

export class HoverComp extends Component {
    // constructor(props) {
    //   super(props)
    
    //   this.state = {
    //      Count : 0
    //   }
    // }
    // incrementCounter = () =>{
    //     this.setState(prevState =>{
    //         return{Count : prevState.Count+1}
    //     })
    // }
  render() {
    // const {count , incrementCounter} = this.props
    return (
     <h2 onMouseOver={this.props.incrementCounter}>hovered {this.props.count} Times</h2>
    )
  }
}

export default UpdatedComponent(HoverComp)