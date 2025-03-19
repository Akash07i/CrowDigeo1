import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './screens/home';
import RegistrationPage from './pages/Registrationpage';
import LoginPage from './pages/Loginpage';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProfileCard from './userpages/Profilecard';
import ProfilePage from './userpages/MakerProfile';
import PusherPage from './userpages/pusherpage';
import IdeatorProfileForm from './components/IdeatorProfile/IdeatorProfileForm';
import IdeatorDashboard from './components/dashbord';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/Profilecard" element={<ProfileCard />} />
        <Route path="/ProfilePage" element={<ProfilePage />} />
        {/* <Route path='/idea' element={<Ideator />}/> */}
        {/* <Route path='/idea' element={<Ideator />}/> */}
        <Route path='/pusherpage' element={<PusherPage />}/> 
        <Route path='/dashboard' element={<IdeatorDashboard />}/> 
        <Route path='/IdeatorProfileForm' element={<IdeatorProfileForm />}/>       
      </Routes>
    </Router>
  );
}

export default App;

