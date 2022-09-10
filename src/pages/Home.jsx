import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import "../style/Home.css"
export default function Home() {

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


    
  return (
    token ? 
    <div>
<h1 style={{marginTop : "100px"}}>Homepage</h1>
<div className='home-items'>

        {
            data.map((item)=>(
                <div className='inside-home'>
                    <img src = {item.image}></img>
                    <p>{item.title}</p>
                    <h3>{item.price}</h3>
                    <Link to = "/individual"><button >More Detatails</button></Link>
                </div>
            ))
            
        }
        </div>
    </div> : <Navigate to = "/login"></Navigate>
  )
}
