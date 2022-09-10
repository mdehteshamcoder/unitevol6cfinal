import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';

export default function Private({childern}) {
    const token = useSelector(state => state.auth.token);
    if(!token){
       return  <Navigate to = "/login" />
    }
  return (
    childern
  )
}