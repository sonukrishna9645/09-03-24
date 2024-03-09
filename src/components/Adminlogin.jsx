import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import {  useNavigate } from 'react-router-dom'
import axios from 'axios'

const Adminlogin = () => {
   
  var [inputs,setInputs]=useState({"username":'',"password":''}) 
 
const inputHandler = (event)=>{ 
const {name,value}=event.target 
setInputs((inputs)=>({...inputs,[name]:value})) 
console.log(inputs) 
     } 
 
const navigate=useNavigate() 
 
const checkData = async (event) => { 
    event.preventDefault(); 
 
    try { 
     const response = await axios.post("http://localhost:4000/Loginsearch",{ 
      username: inputs.username, 
      password: inputs.password, 
    }) 
    if (response.data.success) { 
   
        alert('Login successful'); 
        navigate('/Admindash'); 
      }  
      else { 
        alert('Invalid email and Password. Please try again.'); 
    
 
      } 
    } catch (err) { 
      alert('Error occurred during login. Please try again.'); 
    } 
  }; 
     
 
  return (
    <div>
        <h3>LOGIN</h3>
        <TextField  required id="outlined-required" 
        label="Username" 
        name="username"  value={inputs.username} 
        onChange={inputHandler} /> 
  <br /><br /> 
         <TextField 
          name="password" id="outlined-password-input" 
          label="Password" 
          type="password"  
          autoComplete="current-password" 
          value={inputs.password} 
          onChange={inputHandler}/> <br /><br />
     
         
        <Button variant="outlined" onClick={checkData}>LOGIN</Button><br/>
    </div>
  )
}

export default Adminlogin