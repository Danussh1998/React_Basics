import React from "react";
import { useState , useEffect} from "react";

const UseEffect = () => {
    const [count , setcount] = useState(0);
    useEffect(() => {
        document.title = `clicked ${count} times`
    })
    return (
        <div>
            <button onClick={() => setcount(count+1)}>click {count} times</button>
        </div>
    ) 
}

export default UseEffect;