import React, { useState } from 'react';
import { Button, Form, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'Backer', // default role
    profileImage: null, // profile image state
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

  // Handle file input changes
  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({
      ...formData,
      [name]: files[0], // Set the first file selected
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      Swal.fire({
        title: 'Error!',
        text: 'Passwords do not match',
        icon: 'error',
        confirmButtonText: 'Ok',
      });
      return;
    }

    // Create a FormData object to send form data and files
    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('password', formData.password);
    formDataToSend.append('role', formData.role);
    if (formData.profileImage) {
      formDataToSend.append('profileImage', formData.profileImage);
    }

    try {
      const response = await axios.post('http://localhost:5000/api/register', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      Swal.fire({
        title: 'Success!',
        text: response.data.msg,
        icon: 'success',
        timer: 2000,
        showConfirmButton: false,
      }).then(() => {
        navigate('/login');
      });
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: error.response?.data?.msg || 'Server error',
        icon: 'error',
        confirmButtonText: 'Ok',
      });
    }
  };

  return (
    <div className="registration-page">
      <Container>
        <h2 className="text-center mb-4">Register</h2>
        <Form onSubmit={handleSubmit} className="registration-form">
          {/* Name Field */}
          <Form.Group controlId="formName" className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Form.Group>

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

          {/* Confirm Password Field */}
          <Form.Group controlId="formConfirmPassword" className="mb-3">
            <Form.Label>Re-enter your password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm your password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </Form.Group>

          {/* Role Selection */}
          <Form.Group className="mb-3">
            <Form.Label>Role</Form.Label>
            <div>
              <Form.Check
                type="radio"
                label="Ideator"
                name="role"
                value="Ideator"
                checked={formData.role === 'Ideator'}
                onChange={handleChange}
              />
              <Form.Check
                type="radio"
                label="Maker"
                name="role"
                value="Maker"
                checked={formData.role === 'Maker'}
                onChange={handleChange}
              />
              <Form.Check
                type="radio"
                label="Pusher"
                name="role"
                value="Pusher"
                checked={formData.role === 'Pusher'}
                onChange={handleChange}
              />
              <Form.Check
                type="radio"
                label="Backer (default)"
                name="role"
                value="Backer"
                checked={formData.role === 'Backer'}
                onChange={handleChange}
              />
            </div>
          </Form.Group>

          {/* Profile Image Upload */}
          <Form.Group controlId="formProfileImage" className="mb-3">
            <Form.Label>Profile Image</Form.Label>
            <Form.Control
              type="file"
              name="profileImage"
              onChange={handleFileChange}
              accept="image/*"
            />
          </Form.Group>

          {/* Submit Button */}
          <Button variant="warning" type="submit" className="w-100">
            Register
          </Button>
        </Form>

        <div className="mt-3 text-center">
          <p>
            Already registered? <a href="/login">Login here</a>
          </p>
        </div>
      </Container>
    </div>
  );
};

export default RegistrationPage;
