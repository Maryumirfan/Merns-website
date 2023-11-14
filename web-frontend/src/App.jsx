import React from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './register';
import Login from './login';
import Home from './home';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {
  return (
    <>
    <h1>REGISTERATION</h1>
    <BrowserRouter>
        <Routes>
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/Home' element={<Home /> } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
