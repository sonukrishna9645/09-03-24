import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import{Buffer} from 'buffer';
import axios from 'axios';
import React,{useEffect,useState} from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import Courseedit from './Courseedit';
import baseUrl from '../Api';

const Courseview = () => {
  
    var[Courses,setCourses] = useState([]);
    var[selected,setSelected] = useState();
    var[update,setUpdate] = useState(false);


    useEffect(()=>{
        axios.get(baseUrl + "/view")
        .then(response =>{
            console.log(response.data)
            setCourses(response.data)
        })
        .catch(err=>console.log(err))
    },[])

const deletevalues =(id)=>{
    console.log("deleted",id)
    axios.put(baseUrl+"/coursemanage/updatestatus/"+id)
    .then((response)=>{
        alert("DELETED")
    window.location.reload(false);
    })
}

const updatevalues =(value)=>{
console.log("updated",value);
setSelected(value);
setUpdate(true);
}
var result=
    <div>
    <Typography>COURSE VIEW</Typography><br/><br/>
<TableContainer>
<Table>
  <TableHead>
    <TableRow>
      <TableCell >Course Id</TableCell>
      <TableCell >Course Title</TableCell>
      <TableCell >Category</TableCell>
      <TableCell >Description</TableCell>
      <TableCell >notes</TableCell>
      <TableCell>Edit</TableCell>
      <TableCell>Delete</TableCell>
    </TableRow>
  </TableHead>
  <TableBody>
      {Courses.map((value,index)=>{
          return(
              <TableRow key={index}>
                  <TableCell>{value.Cid}</TableCell>
                  <TableCell>{value.Ctitle}</TableCell>
                  <TableCell>{value.Category}</TableCell>
                  <TableCell>{value.Description}</TableCell>
                  <TableCell>{value.notes}</TableCell>
                  <TableCell><ModeEditOutlineIcon color='success' onClick={()=>updatevalues(value)} /></TableCell>
                  <TableCell><DeleteForeverIcon color='error' onClick={()=>deletevalues(value._id)}/></TableCell>
              </TableRow>
          )
      })}
  </TableBody>
</Table>
</TableContainer>
    </div>

if(update)
{
    console.log(selected)
  result=<Courseedit data={selected} method='put'/>
}
return (result)
  
}

export default Courseview