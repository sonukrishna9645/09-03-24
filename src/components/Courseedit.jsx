import { Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import baseUrl from '../Api';
import axios from 'axios';

const Courseedit = (props) => {

    var [inputs,setInputs]=useState(props.data)
    
    const inputhandler =(event)=> {
        const {name,value}=event.target
        setInputs((inputs)=>({...inputs,[name]:value}))
        console.log(inputs)
    }
    
    const savedata =()=>{
      
        if(props.method==='put'){
          console.log(inputs._id)
            axios.put("http://localhost:4000/cedit/"+inputs._id,inputs)
            .then((response)=>{
                alert("Updated")
                window.location.reload(false)
              })
              .catch(err=>console.log(err))
        }
    }
    
  return (
    <div>
      <Typography>Course Manage</Typography><br/>
        <TextField  label="Course Id" variant="filled" name="Cid" value={inputs.Cid} onChange={inputhandler}/><br/><br/>
        <TextField  label="Course Title" variant="filled" name="Ctitle" value={inputs.Ctitle}  onChange={inputhandler}/><br/><br/>
        <TextField  label="Category" variant="filled" name="Category" value={inputs.Category}  onChange={inputhandler} /><br/><br/>
        <TextField  label="Description" variant="filled" name="Description" value={inputs.Description} onChange={inputhandler}/><br/><br/>
        Status: &nbsp;&nbsp;
        <select name="Status" value={inputs.Status}  onChange={inputhandler}>
         <option value="ACTIVE">ACTIVE</option>
         <option value="INACTIVE">INACTIVE</option>
        </select>
        <br/><br/>
        <Button variant="contained" onClick={savedata}>SUBMIT</Button>

    </div>
  )
}

export default Courseedit