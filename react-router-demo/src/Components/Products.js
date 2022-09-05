import React from 'react'
import { Outlet , NavLink , Link} from 'react-router-dom'

export default function () {
   
  return (
    <>
    <div>
    <input type = "text" placeholder='Search'></input>
    </div>

    <nav>
    <Link to = 'new'>new </Link>
    <Link to = 'featured'>featured</Link>
    </nav>
   
    <Outlet/>
    </>
  )
}
