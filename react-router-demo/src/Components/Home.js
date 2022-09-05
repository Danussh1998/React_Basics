import React from 'react'
import { useNavigate, Link } from 'react-router-dom'


 function Home() {
   const navigate =  useNavigate();
  return (
    
    <>Home page
    <button onClick={() => navigate('order-summary')}>Place order</button>
    </>
  )
}

export default Home
