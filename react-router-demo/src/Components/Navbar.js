import React from 'react'
import { NavLink, Link } from 'react-router-dom'

export default function Navbar() {
    const navLinkStyles = ({isActive}) => {
        return {
            fontweight : isActive ? 'bold' : 'normal',
            textDecoration : isActive ? 'none' : 'underline'
        }
    }
  return (
    <nav>
    {/* <Link to='/about'>Home2</Link> */}
   <NavLink  style = {navLinkStyles} to = '/'>Home</NavLink>
   <NavLink style = {navLinkStyles} to = '/product'>Products</NavLink>
   <NavLink  style = {navLinkStyles} to ='/about'>About</NavLink>
   <a href=''>not single page application</a>
    
   </nav>
  )
}
