import React, { Component } from 'react'
import ChildComponent from './ChildComponent'
//Using class components
// class ParentComponent extends Component {

//     constructor(props) {
//       super(props)
    
//       this.state = {
//          parentName : 'Parent'
//       }
//       this.Greetparent = this.Greetparent.bind(this)
//     }
//     Greetparent(){
//         alert('Hello dude')
//     }
//   render() {
//     return (
//       <div>
//         <ChildComponent greetHandler = {this.Greetparent}></ChildComponent>
//       </div>
//     )
//   }
// }

// export default ParentComponent

//Using functions 
function ParentComponent() {
     function Greetparent(childName){
                alert(`Hello parent from ${childName}`);
            }
  return (
    <div>
        <ChildComponent greetHandler = {Greetparent}></ChildComponent>
    </div>
  )


}

export default ParentComponent