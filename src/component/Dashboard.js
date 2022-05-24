import React, {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { useNavigate, useParams } from 'react-router-dom';


const Dashboard = () => {

    let navigate=useNavigate();
    return (
        <div>
        <AppBar position="static">
        <Toolbar>
          <Button color="inherit" onClick={()=> navigate("/")}>HOME</Button>
          <Button color="inherit" onClick={()=> navigate("/all-students")}>All Students</Button>
          <Button color="inherit" onClick={()=> navigate("/add-student")}>Add Student</Button>
          {/* <Button color="inherit" onClick={()=> navigate("/edit-student:id")}>Edit Student</Button>*/}
          {/*<Button color="inherit" onClick={()=> navigate("/delete-student")}>Delete Student</Button>*/}
         
        </Toolbar>
      </AppBar>
        </div>
    );
}

export default Dashboard;
