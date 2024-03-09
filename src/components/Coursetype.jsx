import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Coursetype = () => {

    var [inputs,setInputs]
    =useState({"Cid":'',"duration":'', "Status":'Active'})
       const inputhandler=(e)=>{
       const {name,value}=e.target
       setInputs((inputs)=>({...inputs,[name]:value}))
       console.log(inputs)
       }

       const addHandler=()=>{
        console.log("Clicked")
    
        console.log(inputs)
        axios.post("http://localhost:4000/tnew",inputs)
    
        .then((response)=>{
            alert("Record Saved")
        })
        .catch(err=>console.log(err))
    }
  return (
    <div>
        <br/>
        <TextField id="outlined-basic" label="Course Id" variant="outlined" 
           name="Cid" value={inputs.Cid} 
            onChange={inputhandler}/><br/><br/>

           <TextField id="outlined-basic" label="Duration" variant="outlined" 
           name="duration" value={inputs.duration} 
            onChange={inputhandler}/><br/><br/> 
         <FormControl sx={{ m: 1, minWidth: 120 }}>
  <InputLabel id="demo-simple-select-label">Status</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    name="Status" value={inputs.Status}
onChange={inputhandler}    
   
  >
    <MenuItem value={"Active"}>Active</MenuItem>
    <MenuItem value={"InActive"}>InActive</MenuItem>
    
  </Select>
</FormControl><br/><br/><br/>
        <br/><br/>
        
        <Button variant="outlined" onClick={addHandler}>SUBMIT</Button><br/>
    </div>
  )
}

export default Coursetype