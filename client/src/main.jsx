import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter, Routes, Route}  from 'react-router-dom';
import Home from './Pages/Home/Home.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <Routes>
            <Route path="/" element={<Home />} />

      </Routes>
  </BrowserRouter>,
)
