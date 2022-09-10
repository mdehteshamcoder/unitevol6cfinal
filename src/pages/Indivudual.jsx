import React, { useEffect, useState } from 'react'
import axios from "axios";
import "../style/Home.css"
import {Navigate} from "react-router-dom"
import {Link} from "react-router-dom"
import { useSelector } from 'react-redux';

export default function Indivudual() {
    const [data,setdata] = useState([]);
    const token = useSelector(state => state.auth.token);

    const fetchData = ()=>{
        axios({
            method : "get",
            url : "  http://localhost:3002/products"
        })
        .then(res =>{
            setdata(res.data);
        })
        .catch(err =>{
            console.log(err);
        })

    }

    useEffect(()=>{
fetchData();
    },[])

    const addtocart = ()=>{
        return <Navigate to = "/cart"/>
    }
    return (
        token ?
        <div>
            <h1>Indivudual</h1>
    <div className='individual-items'>
    
            {
                data.map((item)=>(
                    <div className='inside-indi'>
                        <img src = {item.image}></img>
                        <p>{item.title}</p>
                        <p>{item.category}</p>
                        <p>{item.brand}</p>
                        <h3>{item.price}</h3>
                        <Link to = "/cart"><button onClick={addtocart}>ADD TO CART</button></Link>
                     
                    </div>
                ))
                
            }
            </div>
        </div>:
        <Navigate to = "/login"></Navigate>
      )
  
}
