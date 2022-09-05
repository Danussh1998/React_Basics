import React, { Component } from 'react'
import UpdatedComponent from './HOC'

 class HigherOrderComp extends Component {
    // constructor(props) {
    //   super(props)
    
    //   this.state = {
    //      Count : 0
    //   }
    // }
    // incrementCounter = () => {
    //     this.setState(prevState => {
    //         return {Count : prevState.Count+1}
    //     })
    // }
  render() {
    const {count , incrementCounter} = this.props
    return (
        <button onClick={incrementCounter}>clicked {count} Times</button>
    
    )
  }
}

export default UpdatedComponent(HigherOrderComp)
//Exporting Higher Order Component