import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter, Routes, Route}  from 'react-router-dom';

import Home from './Pages/Home/Home.jsx'
import Login from './Pages/Login/Login.jsx'
import Register from './Pages/Register/Register.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

      </Routes>
  </BrowserRouter>,
)
