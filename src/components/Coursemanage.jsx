import { Button, TextField, TextareaAutosize } from '@mui/material'
import axios from 'axios'
import Sidebar from './Sidebar';
import React, { useState } from 'react'

import { styled } from '@mui/material/styles';
const Coursemanage = () => {
    
  

    var [inputs,setInputs]
    =useState({"Cid":'',"Ctitle":'',"Category":'',"Description":'',"notes":''})
       const inputHandler=(e)=>{
       const {name,value}=e.target
       setInputs((inputs)=>({...inputs,[name]:value}))
       console.log(inputs)
       }

      //  const fileHandler = (e) => {
      //   const file = e.target.files[0];
      //   setInputs((inputs) => ({ ...inputs, file }));
      // };

      const [selectedImage, setSelectedImage] = useState(null);

      const handleImage = (event) => {
        const file = event.target.files[0];
        setSelectedImage(file);
        inputs.image1 = file;
      };
    
      // const VisuallyHiddenInput = styled('input')({
      //   clip: 'rect(0 0 0 0)',
      //   clipPath: 'inset(50%)',
      //   height: 1,
      //   overflow: 'hidden',
      //   position: 'absolute',
      //   bottom: 0,
      //   left: 0,
      //   whiteSpace: 'nowrap',
      //   width: 1,
      // });
      

const addHandler=()=>{
    console.log("Clicked")

    console.log(inputs)
    axios.post("http://localhost:4000/cnew",inputs)

    .then((response)=>{
        alert("Record Saved")
    })
    .catch(err=>console.log(err))
}
  return (
    <div>
        <br/>
        <h3>Course Management Form</h3>
        <TextField id="outlined-basic" label="Course Id" variant="outlined" 
           name="Cid" value={inputs.Cid} 
            onChange={inputHandler}/><br/><br/>
        <TextField id="outlined-basic" label="Course Title" variant="outlined"
           name="Ctitle" value={inputs.Ctitle} 
           onChange={inputHandler} /><br/><br/>
        <TextField id="outlined-basic" label="Category" variant="outlined"
         name="Category" value={inputs.Category} 
         onChange={inputHandler} /><br/><br/>
        <TextField id="outlined-textarea" label="Description"
          placeholder="Placeholder"
          multiline
          name="Description" value={inputs.Description} 
          onChange={inputHandler}/><br/><br/>

          <label>Choose file to Upload</label><input type="file" onChange={handleImage}/><br/>
{/*           
          <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
      Upload file
      <VisuallyHiddenInput type="file" />
    </Button><br/><br/> */}
    <TextareaAutosize aria-label="minimum height" minRows={3} placeholder="Notes" 
    name="notes" value={inputs.notes} 
    onChange={inputHandler}
    /><br/>

         <Button variant="outlined" onClick={addHandler}>CREATE</Button><br/> 
    </div>
  )
}

export default Coursemanage