import React, { useEffect, useState } from 'react'

function UseEffectMouse() {
    const [x , setX] = useState(0)
    const [y , setY] = useState(0)

   const logMousePosition = (e) => {

        console.log('Mouse event')
        setX(e.clienyX);
        setY(e.clientY);
    }

    useEffect(() => {
        console.log('useEffect called');
        window.addEventListener('mouseMove' , logMousePosition)
       
    }, [])

  return (
    <div>
        Mouse X - {x} Y - {y}
    </div>
  )
}

export default UseEffectMouse;
