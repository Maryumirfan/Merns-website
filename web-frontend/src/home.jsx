import React from 'react';
import { Link} from 'react-router-dom'; 
import './home.css';
import NavScroll from './navbar';
function Home() {
    return (
        <div className='home'>
             <NavScroll />           
               <h1 className='wel'>WELCOME!</h1>
               <div className='d3'>
               <button className='btn2'> 
        <Link className='l2' to='/news'>Get Started</Link>
      
      </button>
               </div>
      
           
        </div>
    );
}

export default Home;
