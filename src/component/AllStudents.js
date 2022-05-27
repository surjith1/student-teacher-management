import React, {useState, useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AllStudents = () => {
     let navigate = useNavigate();
  
     let [students,setStudents] = useState([]);
     
     
     useEffect(()=>{
       loadStudents()
     },[])
     const loadStudents = async ()=> {
      let res = await axios.get("http://localhost:3001/students");
      setStudents(res.data);
     }
     const deleteStudent = async (id) =>{
         await axios.delete(`http://localhost:3001/students/${id}`)
         loadStudents();
     }

    return (
        <div>
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">Mobile</TableCell>
              <TableCell align="center">Batch</TableCell>
              <TableCell align="center">Batch Type</TableCell>
              <TableCell align="center">Employee / Student</TableCell>
              <TableCell align="center">Status</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((row,index) => (
               
              <TableRow
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="center">{row.email}</TableCell>
                <TableCell align="center">{row.mobile}</TableCell>
                <TableCell align="center">{row.batch}</TableCell>
                <TableCell align="center">{row.batchtype}</TableCell>
                <TableCell align="center">{row.profession}</TableCell>
                <TableCell align="center">{row.status==="Active" ? <p style={{color:"green"}}>Active</p> : <p style={{color:"red"}}>InActive</p>}</TableCell>
                <TableCell align="center"><Button variant="outlined" color="primary" startIcon={<EditIcon />} onClick={()=>navigate(`/edit-student:${row.id}`)}>Edit</Button> 
                {/*onClick={()=>navigate(`/edit-student:${index}`)}*/}
                <Button variant="outlined" color="primary" startIcon={<DeleteIcon />}  onClick={()=>deleteStudent(row.id)}>Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
        </div>
    );
}

export default AllStudents;