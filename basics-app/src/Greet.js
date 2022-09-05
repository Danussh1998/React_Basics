import { render } from '@testing-library/react';
import react, { Component } from 'react';

class greet extends Component{
    constructor(){
        super()
        this.state ={
            message: "Welcome to React"
        }
    }
    changeMessage(){
        this.setState({
            message: 'Welcome to abhishek startUp'
        })
    }
render(){
    return(
        <div>
         <h1>{this.state.message}</h1>
         <button onClick={() => this.changeMessage()}>Click</button>
        </div>
    )
}
}


//Destructuring
// function greet({name,lname}){
//      return <h1>{`${name} ${lname}`}</h1>
// }


export default greet;