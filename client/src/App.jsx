import React from 'react';
import {BrowserRouter, Routes, Route}  from 'react-router-dom';
import axios from 'axios';
import {Toaster} from 'react-hot-toast'

axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.withCredentials = true;

import Home from './Pages/Home/Home.jsx'
import Login from './Pages/Login/Login.jsx'
import Register from './Pages/Register/Register.jsx'
import Dashboard from './Pages/Dashboard/Dashboard.jsx'


const App = () => {
  return (
    <>
    {/* <Navbar/> */}
    <Toaster position='bottom-right' toastOptions={{duration: 3000}}/>
    <Routes>

      <Route path="/" element={<Home/>} />
      <Route path="/home" element={<Home/>} />
      
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/dashboard" element={<Dashboard/>} />

    </Routes>
    {/* <Footer/> */}
    </>
  );
};

export default App;
