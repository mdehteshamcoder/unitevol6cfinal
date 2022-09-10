import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import "../style/Home.css"
export default function Cart() {
  const [cart, setcart] = useState([]);
  const token = useSelector(state => state.auth.token);
  const fetchData = () => {
    axios({
      method: "get",
      url: "http://localhost:3002/cart"
    })
      .then(res => {
        setcart(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }

  useEffect(() => {
    fetchData();
  }, [])

 
  // console.log(cart)
  return (
    token ?
    <div>
      <h1>Cart</h1>

      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>ProductId</th>
            <th>Quantity</th>
            <th>Increase Quantity</th>
            <th>Decrease Quantity</th>
            <th>Remove From Cart</th>
          </tr>
        </thead>
        <tbody>
          {
            cart.map((item) => (
              <tr>
                <td>{item.id}</td>
                <td>{item.product_id}</td>
                <td>{item.quantity}</td>
                <td><button>Increase</button> </td>
                <td><button>Decrease</button></td>
                <td><button>Remove</button></td>

              </tr>
            ))

          }
        </tbody>
      </table>
<Link to = "/ordersucess"><button>Place Order</button></Link>
    </div>
    : <Navigate to = "/login"></Navigate>
  )
}
