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
      const response = await axios.post('http://localhost:3002/register', { email, password });
      console.log(response.data);
    navigate('/ Home');
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
    <Form onSubmit={handleSubmit} className="logform">
      
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
        {loading ? 'Logging in...' : 'LOGIN'}
      </Button>
      <h6>
        Don't have an account?{" "}
        <Link to="/register" style={{ color: 'skyblue' }}>
          Register
        </Link>
      </h6>
    </Form>
  );
}

export default Login;