import React from 'react';
import { useState } from 'react';
import Axios from 'axios';
import './details.css';
import {useNavigate} from 'react-router-dom';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
const Details= ({setLoginUser}) =>{

    const navigate = useNavigate()
    var loguser = JSON.parse(localStorage.loginuser);
//    console.log(JSON.parse(localStorage.loginuser));

const [user1, setUser] = useState({
    name: loguser.name,
    email: loguser.email,
   designation: loguser.designation,
})
const handleChange = e =>{
    const { name, value} = e.target
    setUser({
        ...user1,
        [name]: value
    })
}

  
    const [user] = useState({})

    const update = ()=>{
        Axios.post(`http://localhost:1111/${loguser._id}`, user1)
        .then((res)=>{
            alert(res.data.message)
            // setLoginUser(res.data.user)
            // navigate('/')
            // localStorage.loginuser = JSON.stringify(res.data.user);
            console.log(res);
           
        })
    }
    const remove = ()=>{
        Axios.post(`http://localhost:1111/d/${loguser._id}`, user1)
        .then((res)=>{
            alert(res.data.message)
            setLoginUser({})
            navigate('/')
            // localStorage.loginuser = JSON.stringify(res.data.user);
           
        })
    }

    return (
        <div className='profile'> 
            <table>
                <tr>
                    Profile Details
                </tr>
                <tr>
                    <td>Name</td>
                    <td> 
                        <input type="text"
                                name="name"
                                id="na"
                                defaultValue={loguser.name}
                                onChange={handleChange}
                                required />
                    </td>
                   
                </tr>
                <tr>
                    <td>Email</td>
                    <td>
                    <input type="email"
                                name="email"
                                id="em"
                                defaultValue={loguser.email}
                                onChange={handleChange}
                                required/>
                    </td>
                </tr>
                <tr>
                    <td>designation</td>
                    <td>
                    <input type="text"
                                name="designation"
                                id="desn"
                                defaultValue={loguser.designation}
                                onChange={handleChange}
                                required/>
                    </td>
                </tr>
            </table>
            <div className='btn'  onClick={update}> Update</div>
            <div className='btn'  onClick={remove}> Delete</div>
            <div className='btn' onClick = { () => setLoginUser({}) }>Sign Out</div>
        </div>
    )
}

export default Details;