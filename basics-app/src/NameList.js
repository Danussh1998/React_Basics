import React from 'react'

function NameList({person}) {
  return (
    <div>
         <h2>My name is {person.name} age is {person.age}</h2>
    </div>
  )
}

export default NameList