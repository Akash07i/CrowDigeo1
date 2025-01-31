
import React, { useState } from 'react';
import { Button, Form, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/login', formData);

      // Save the JWT token and user data in localStorage
      localStorage.setItem('authToken', response.data.token);
      localStorage.setItem('userId', response.data.userId);
      localStorage.setItem('role', response.data.role);
      localStorage.setItem('profileImage', response.data.profileImage);
      localStorage.setItem('name', response.data.name);

      Swal.fire({
        title: 'Success!',
        text: 'Login successful',
        icon: 'success',
        timer: 2000,
        showConfirmButton: false,
      }).then(() => {
        navigate('/home'); // Redirect to the home page after login
      });
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: error.response.data.msg || 'Invalid email or password',
        icon: 'error',
        confirmButtonText: 'Ok',
      });
    }
  };

  return (
    <div className="login-page">
      <Container>
        <h2 className="text-center mb-4">Login</h2>
        <Form onSubmit={handleSubmit} className="login-form">
          {/* Email Field */}
          <Form.Group controlId="formEmail" className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>

          {/* Password Field */}
          <Form.Group controlId="formPassword" className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter your password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </Form.Group>

          {/* Submit Button */}
          <Button variant="warning" type="submit" className="w-100">
            Log in
          </Button>
        </Form>

        <div className="mt-3 text-center">
          <p>
            Don't have an account? <a href="/register">Sign up here</a>
          </p>
        </div>
      </Container>
    </div>
  );
};

export default LoginPage;
