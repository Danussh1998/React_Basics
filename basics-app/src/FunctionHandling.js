import React from "react";

function FunctionHandling(){

   function EventHandling(){
    console.log("Button clicked")
}
   return (
    <div>
        <button onClick={EventHandling}>Click</button>
    </div>
   )
}





export default FunctionHandling;