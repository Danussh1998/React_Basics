import React, { Component } from "react";

class counter extends Component{
    constructor(){
        super()
      this.state ={
        count : 0
      }
    }

    Increment(){
        this.setState ({
            count: this.state.count + 1
        })
        console.log(this.date)
    }
    Decrement(){
        this.setState({
            count:this.state.count-1
        })
    }

    render(){
        return(
            <div>
            <div>Count - {this.state.count}</div>
            <button onClick={() => this.Increment()}>Increment</button>
            <button onClick={() => this.Decrement()}>Decrement</button>
            </div>
        )
    }
}

export default counter;