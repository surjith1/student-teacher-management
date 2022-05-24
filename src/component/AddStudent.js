import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddStudent = () => {
    let navigate=useNavigate();
    let [student,setStudent] = useState({
        name:"",
        email:"",
        mobile:"",
        batch:"",
        batchtype:"",
        profession:""
    });
    let {name,email,mobile,batch,batchtype,profession} = student;

    const onChangeHandle = e=>{
        setStudent({...student,[e.target.name]:e.target.value})
    }
    const onSubmit=async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:3001/students",student);       
        navigate("/all-students");
    }
   
    return (
        <div className="add-student">
        <form onSubmit={(e)=>onSubmit(e)}>
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
            <Button type="submit" variant="outlined" color='primary' startIcon={<AddCircleIcon />} fullWidth >Add Student</Button>
            
            </div>
            </form>
        </div>
    );
}

export default AddStudent;
