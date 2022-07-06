import React, {useState} from 'react';
import './login.css';
import Axios from 'axios';
import {useNavigate} from 'react-router-dom';

const Login = ( {setLoginUser}) =>{


    const navigate = useNavigate()

    const [user, setUser] = useState({
        email: "",
        password: "",
    })
    const handleChange = e =>{
        const { name, value} = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const LoginUser = ()=>{
            Axios.post("http://localhost:1111/login", user).then((res)=>{
                alert(res.data.message)
                setLoginUser(res.data.user)
                navigate('/')
                localStorage.loginuser = JSON.stringify(res.data.user);
                
               
            })
    }


    return (
        <div className='login'>
            <h1>Login</h1>
            <form>
                <label for="userN">Email</label>
                <input type="email" name="email" value = {user.email} id="userN" onChange={handleChange} required />
                <label for="pwd">Password</label>
                <input type="password" name="password" value = {user.password} id="pws" onChange={handleChange} required />
            </form>
            <button onClick={LoginUser} type="submit">Sign In</button>
            <p>New User <a href="/register">Sign Up</a></p>
        </div>
    )
}

export default Login;