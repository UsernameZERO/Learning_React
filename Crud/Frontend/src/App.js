
import './App.css';
import Dashboard from './componenets/dashboard/dashboad';
import Login from './componenets/login/login';
import Register from './componenets/register/register';
import Details from './componenets/details/details';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { useState } from 'react';

function App() {

  const [user, setLoginUser] = useState({}) 

  return (
    <div className="App">
       <Dashboard/>
        <Routes>
        <Route path="/" element={ user && user._id ? <Details setLoginUser = {setLoginUser} /> : <Login setLoginUser = {setLoginUser} />}>
       
          
        </Route>
        <Route path ="/register" element={<Register/>}/>
        <Route path ="/login" element={<Login setLoginUser = {setLoginUser} />}/>

        </Routes>
      

       
     
      
     
    </div>
  );
}

export default App;
