import React, { useState } from 'react';
import './register.css';
import Axios from 'axios'
import {useNavigate} from 'react-router-dom';



const Register = () =>{


    const navigate = useNavigate()

    const [user, setUser] = useState({
        name: "",
        email: "",
        designation:"",
        password: "",
        c_password: "",
    })

    const handleChange = e =>{
        const { name, value} = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const Createuser = ()=>{
        const {name, email, designation, password, c_password} = user;
        if (name && email && designation && password &&(password === c_password)) { 
            alert("posted")
            Axios.post("http://localhost:1111/create", user).then((res)=>{
               alert(res.data.message)
               navigate('/')
               
            })
        }else{
            alert("Invalid feilds")
        }
            
       
    }

    return (
        <div className='register'> 
            <h1>Register</h1>
            <form>
                <label >Name</label>
                <input type ="text" name = "name" value = {user.name} id = "userNa" required onChange={handleChange} ></input>
                <label >Email</label>
                <input type="email" name="email" value = {user.email} id="userN" onChange={handleChange} required />
                <label >Designation</label>
                <input type= "text" name = "designation" id = "desn" value = {user.designation} onChange={handleChange} required></input>
                <label >Password</label>
                <input type="password" name="password" id="pws" value = {user.password} onChange={handleChange} required />
                <label >Confirm Password</label>
                <input type="password" name="c_password" id="cpws" value = {user.c_password} onChange={handleChange} required />

            </form> 
            <button onClick={Createuser}>Sign Up</button>
        </div>
        
    )
}

export default Register;