import React from 'react'
import { Link } from 'react-router-dom'

export default function OrderSucess() {
  return (

<div>
    <img src='https://i.pinimg.com/originals/0d/e4/1a/0de41a3c5953fba1755ebd416ec109dd.gif'></img>
    <h3>Your order conformed</h3>
    <Link to = "/"><button style={{backgroundColor : "blue" , color:"white"}}>Continue Shopping</button></Link>
    </div>

  )
}
