import React from 'react'
import NameList from './NameList'

function PersonList() {

    const personList = [
        {
        id : 1,
        name : 'Danny',
        age : 24
       },
       {
        id :2,
        name : 'Sam',
        age : 40
       },
       {
        id :3,
        name : 'Ram',
        age : 44
       }
]
 
const NameLists = personList.map(person => <NameList key = {person.id} person = {person}></NameList>)
console.log('namelist', NameLists);
  return <div>
    {NameLists}
    </div>
}

export default PersonList