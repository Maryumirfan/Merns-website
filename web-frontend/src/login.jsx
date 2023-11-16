import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from 'axios'; 
import './login.css'
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting login form");
    console.log("Email:", email, "Password:", password);

    try {
      setLoading(true);
      const response = await axios.post('http://localhost:3002/login', { email, password });
      console.log(response.data);
    navigate('/home');
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message || 'An error occurred');
      } else if (error.request) {
        
        setError('No response received');
      } else {

        setError('Error occurred: ' + error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login">
       <div className="d2"><Form onSubmit={handleSubmit} className="logform">
    <h3>Login Account</h3> <br />
   <Form.Group className="mb-3" controlId="formBasicEmail">
     <Form.Control
       type="email"
       placeholder="Enter email"
       required
       onChange={(e) => {
         setEmail(e.target.value);
       }}
     />
   </Form.Group>
   <Form.Group className="mb-3" controlId="formBasicPassword">
     <Form.Control
       type="password"
       placeholder="Password"
       required
       onChange={(e) => {
         setPassword(e.target.value);
       }}
     />
   </Form.Group>
   {error && <p style={{ color: 'red' }}>{error}</p>}
   <Button variant="primary" type="submit" disabled={loading} className="btn1">
     {loading ? 'Logging in...' : 'Sign In'}
   </Button> <br /> <br />
   <h6 className="hh1">
     Don't have an account?{" "}
     <Link to="/register" className="l2">
       Register
     </Link>
   </h6>
 </Form></div>
    
    </div>
   
  );
}

export default Login;