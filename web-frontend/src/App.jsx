import React from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './register';
import Login from './login';
import Home from './home';
import News from './news';

import {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/home' element={<Home /> } />
          <Route path='/news' element={<News /> } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
