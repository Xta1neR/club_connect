import React from 'react';
import {BrowserRouter, Routes, Route}  from 'react-router-dom';
import axios from 'axios';
import {Toaster} from 'react-hot-toast';
import {useState} from 'react';

axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.withCredentials = true;

import Home from './Pages/Home/Home.jsx'
import Login from './Pages/Login/Login.jsx'
import Register from './Pages/Register/Register.jsx'
import Dashboard from './Pages/Dashboard/Dashboard.jsx'
import Profile from './Pages/Profile/Profile.jsx'
import App2 from './Pages/Announcement/Main_Ann.jsx'
import Announcement from './Pages/Announcement/Announcement.jsx';
import ErrorPage from './component/ErrorPage/errorpage.jsx'

const App = () => {
  return (
    <>
    {/* <Navbar/> */}
    <Toaster position='bottom-right' toastOptions={{duration: 3000}}/>
    <Routes>

      <Route path="/" element={<Home/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path='/announcement' element={<Announcement/>} />
      <Route path='/chat' element={<App2/>}></Route>

      <Route path="*" element={<ErrorPage />} />

    </Routes>
    {/* <Footer/> */}
    </>
  );
};

export default App;
