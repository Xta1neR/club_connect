import React from 'react';
import {BrowserRouter, Routes, Route}  from 'react-router-dom';

import Home from './Pages/Home/Home.jsx'
import Login from './Pages/Login/Login.jsx'
import Register from './Pages/Register/Register.jsx'
import Dashboard from './Pages/Dashboard/Dashboard.jsx'


const App = () => {
  return (
    <>
    {/* <Navbar/> */}
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
