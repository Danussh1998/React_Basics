
import React from "react";
import { Component } from "react";

//takes originalComponent as a parameter and returns new enhanced component that is newComponent and its stored in UpdatedComponent 
//const IronMan = (TonyStark)=>{WithSuit}
const UpdatedComponent = (OriginalComponent) => {
 class HOC extends React.Component {
       constructor(props) {
      super(props)
    
      this.state = {
         Count : 0
      }
    }
    incrementCounter = () => {
        this.setState(prevState => {
            console.log(prevState);
            return {Count : prevState.Count+1}
        })
    }
    render() {
      return <OriginalComponent count = {this.state.Count} incrementCounter={this.incrementCounter}></OriginalComponent>

    }
  }
  return HOC 
  
}

export default UpdatedComponent
