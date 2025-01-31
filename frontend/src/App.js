import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './screens/home';
import RegistrationPage from './pages/Registrationpage';
import LoginPage from './pages/Loginpage';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProfileCard from './pages/Profilecard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/Profilecard" element={<ProfileCard />} />
      </Routes>
    </Router>
  );
}

export default App;

