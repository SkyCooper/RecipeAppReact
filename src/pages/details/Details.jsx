import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Details = () => {
const {state : recipe} = useLocation()
const navigate = useNavigate()
console.log(recipe)
  return (
    <div>
      <h1>details</h1>
      <button onClick={()=> navigate(-1)}>Go back</button>
      <button onClick={()=> navigate("/")}>Home</button>
    </div>
  )
}

export default Details