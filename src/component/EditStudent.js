import React, {useEffect, useState} from 'react';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Switch from '@mui/material/Switch';
const EditStudent = ({students,setStudents}) => {
    let navigate=useNavigate();
    let {id}=useParams();
    let idval=id.replace(":","");
    let [student,setStudent] = useState({
        name:"",
        email:"",
        mobile:"",
        batch:"",
        batchtype:"",
        profession:"",
        status:"",
    });
    let {name,email,mobile,batch,batchtype,profession,status} = student;

    const onChangeHandle = e=>{
        setStudent({...student,[e.target.name]: e.target.value})
    }
    useEffect(()=>{
        loadStudent();
    },[])
    const onSubmit=async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:3001/students/${idval}`,student);       
        navigate("/all-students");
    }
    const loadStudent = async ()=> {
        const result = await axios.get(`http://localhost:3001/students/${idval}`)
        setStudent(result.data);
    }
    // const handleToggle = (status) => {
        
    // }
   return (<>
       <h1>Edit Students</h1>
       <div className="add-student">
       <form onSubmit={e=>onSubmit(e)}>
           <div className='form-group m-3'>
               <TextField id="name" label="Name" variant="outlined" name="name" fullWidth onChange={e=>onChangeHandle(e)} value={name} />
           </div>
           <div className='form-group'>
               <TextField id="email" label="Email" variant="outlined" name="email" fullWidth onChange={e=>onChangeHandle(e)} value={email} />
           </div>
           <div className='form-group'>
               <TextField id="phone" label="Mobile" variant="outlined" name="mobile" fullWidth onChange={e=>onChangeHandle(e)} value={mobile} />
           </div>
           <div className='form-group'> 
               <TextField id="batch" label="Batch" variant="outlined" name="batch" fullWidth onChange={e=>onChangeHandle(e)} value={batch} />
           </div>
           <div className='form-group'>
               <TextField id="batchtype" label="Batch Type" variant="outlined" name="batchtype" fullWidth onChange={e=>onChangeHandle(e)} value={batchtype} />
           </div>
           <div className='form-group'>
               <TextField id="employeeStudent" label="Employee / Student" variant="outlined" name="profession" fullWidth onChange={e=>onChangeHandle(e)} value={profession} />
           </div>
           <div className='form-group'>
           
           <TextField id="status" label="Status" variant="outlined" name="status" fullWidth onChange={e=>onChangeHandle(e)} value={status ? "Active" : "InActive"} />
           
   </div>
           
          
           <div className='form-group'>
           <Button type="submit" variant="outlined" color='primary' startIcon={<SaveIcon />} fullWidth >Edit Student</Button>
           
           </div>
           </form>
       </div>
       </>
   );
}

export default EditStudent;
