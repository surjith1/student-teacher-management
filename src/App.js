import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './component/Dashboard';
import Home from './component/Home';
import AllStudents from './component/AllStudents';
import EditStudent from './component/EditStudent';
import AddStudent from './component/AddStudent';
//import DeleteStudent from './component/DeleteStudent';
export const url='https://627aaccd4a5ef80e2c1f4e80.mockapi.io/students';



function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <div className='section-1'>
          <Dashboard />
        </div>
        <div className='section-2'>
          <Routes >
            <Route path="/" element={<Home />}>Home</Route>
            <Route path="/all-students" element={<AllStudents />}></Route>
            <Route path="/add-student" element={<AddStudent />}></Route>
            <Route path="/edit-student:id" element={<EditStudent />}></Route>
           
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
