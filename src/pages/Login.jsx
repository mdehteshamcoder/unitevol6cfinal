import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "../App.css"
import axios from "axios"
import { useDispatch, useSelector } from 'react-redux';
import { loginerror, loginloading, loginsuccess } from '../store/auth/action';
import { Navigate } from 'react-router-dom';
import { useState } from 'react';
import "../style/Home.css"
export default function Login() {

    const init = {
        email: "",
        password: ""
    }
    const [loginData, setLoginData] = useState(init)
    const dispatch = useDispatch();
    const token = useSelector(state => state.auth.token);
    if(token){
        return <Navigate to = "/" />
    }

    const handlechange = (e) => {
        const { name, value } = e.target;
        setLoginData(prev => ({
            ...prev, [name]: value
        }))
    }



    const handleLogin = () => {
    dispatch(loginloading());
        axios({
            method: "post",
            url: "https://reqres.in/api/login",
            data: loginData
        })
        .then(res =>{
            dispatch(loginsuccess(res.data.token));
            setLoginData(init)
        })
        .catch(err => {
            dispatch(loginerror(err));
        })
    }

    return (
        <>
            <img className="loginimg" src="https://www.freeiconspng.com/thumbs/login-icon/user-login-icon-14.png"></img>
            <Box  className="formdata" component="form" sx={{ '& > :not(style)': { m: 1, width: '25ch' }, }} noValidate autoComplete="off">


                {Object.keys(loginData).map(el => <TextField id={el} label={el} value={loginData[el]} name={el} onChange={handlechange} variant="outlined" />)}
                <Button onClick={handleLogin} variant="contained" color="success">Login </Button>


            </Box>
        </>
    )
}