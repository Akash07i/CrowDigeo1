

// import React, { useState, useEffect } from 'react';
// import { Navbar, Container, Nav, Form, Button, Dropdown } from 'react-bootstrap';
// import { Link, useNavigate } from 'react-router-dom';

// function CustomNavbar() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [userProfile, setUserProfile] = useState({
//     name: '',
//     image: ''
//   });
//   const navigate = useNavigate();
//   const profileImage = localStorage.getItem('profileImage');

//   // Check if user is logged in
//   useEffect(() => {
//     const token = localStorage.getItem('authToken');
//     if (token) {
//       setIsLoggedIn(true);
//       setUserProfile({
//         name: localStorage.getItem('name'),
//         image: localStorage.getItem('profileImage')
//       });
//     }
//   }, []);
  

//   const handleLogout = () => {
//     // Clear the local storage and reset the login state
//     localStorage.removeItem('authToken');
//     localStorage.removeItem('userId');
//     localStorage.removeItem('role');
//     localStorage.removeItem('profileImage');
//     localStorage.removeItem('name');
//     setIsLoggedIn(false);
//     navigate('/login'); // Redirect to the login page
//   };

//   return (
//     <Navbar expand="lg" className="bg-transparent fixed-top">
//       <Container>
//         {/* Logo Section */}
//         <Navbar.Brand href="#home">
//           <img
//             src="https://www.crowdiego.com/images/logo.png"
//             alt="Crowdiego Logo"
//             style={{ width: '120px', height: 'auto' }}
//           />
//         </Navbar.Brand>

//         {/* Navbar Toggle Button for mobile screens */}
//         <Navbar.Toggle aria-controls="navbar-nav" />

//         {/* Navbar Links */}
//         <Navbar.Collapse id="navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link href="#home" style={{ color: 'white' }}>Home</Nav.Link>
//             <Nav.Link href="#Explore Campaign" style={{ color: 'white' }}>Explore Campaigns</Nav.Link>
//             <Nav.Link href="#About Us" style={{ color: 'white' }}>About Us</Nav.Link>
//           </Nav>

//           {/* Search Bar and Login/Register/Logout/Profile */}
//           <Nav className="ms-auto d-flex align-items-center">
//             {isLoggedIn ? (
//               <>
//                 {/* Search Bar */}
//                 <Form className="d-flex me-2">
//                   <Form.Control
//                     type="search"
//                     placeholder="What are we looking for?"
//                     className="me-2"
//                     aria-label="Search"
                    
//                   />
//                 </Form>

//                 {/* Profile image and Logout Button */}
//                 <Dropdown align="end">
//                   <Dropdown.Toggle variant="link" id="dropdown-profile">
//                     {/* <img
//                       src={userProfile.image}
//                       alt="Profile"
//                       style={{
//                         width: '40px',
//                         height: '40px',
//                         borderRadius: '50%',
//                         objectFit: 'cover',
//                       }}
//                     /> */}
//                     <img src={profileImage} alt="Profile" className="profile-image" style={{
//                         width: '40px',
//                         height: '40px',
//                         borderRadius: '50%',
//                         objectFit: 'cover',
//                       }} />
//                   </Dropdown.Toggle>
//                   <Dropdown.Menu>
//                     <Dropdown.Item as="button" onClick={handleLogout}>Logout
//                     <p>Welcome, {userProfile.name}!</p>

//                     </Dropdown.Item>
//                   </Dropdown.Menu>
//                 </Dropdown>
//               </>
//             ) : (
//               <>
//                 <Form className="d-flex me-2">
//                   <Form.Control
//                     type="search"
//                     placeholder="What are we looking for?"
//                     className="me-2"
//                     aria-label="Search"
//                   />
//                 </Form>

//                 <Button variant="warning" className="ms-2">
//                   <Link to="/login" style={{ color: 'white', textDecoration: 'none' }}>Login</Link>
//                 </Button>

//                 <Button variant="warning" className="ms-2">
//                   <Link to="/register" style={{ color: 'white', textDecoration: 'none' }}>Register</Link>
//                 </Button>
//               </>
//             )}
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default CustomNavbar;



import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav, Form, Button, Dropdown } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

function CustomNavbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userProfile, setUserProfile] = useState({ name: '', image: '' });
  const [showDropdown, setShowDropdown] = useState(false); // State for hover dropdown
  const navigate = useNavigate();
  const profileImage = localStorage.getItem('profileImage');

  // Check if user is logged in
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsLoggedIn(true);
      setUserProfile({
        name: localStorage.getItem('name'),
        image: localStorage.getItem('profileImage'),
      });
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userId');
    localStorage.removeItem('role');
    localStorage.removeItem('profileImage');
    localStorage.removeItem('name');
    setIsLoggedIn(false);
    navigate('/login');
  };

  return (
    <Navbar expand="lg" className="bg-transparent fixed-top">
      <Container>
        {/* Logo Section */}
        <Navbar.Brand href="#home">
          <img
            src="/images/logo-orange.png"
            alt="Crowdiego Logo"
            style={{ width: '120px', height: 'auto' }}
          />
        </Navbar.Brand>

        {/* Navbar Toggle Button for mobile screens */}
        <Navbar.Toggle aria-controls="navbar-nav" />

        {/* Navbar Links */}
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" style={{ color: 'white' }}>Home</Nav.Link>
            <Nav.Link href="#Explore Campaign" style={{ color: 'white' }}>Explore Campaigns</Nav.Link>
            <Nav.Link href="#About Us" style={{ color: 'white' }}>About Us</Nav.Link>
          </Nav>

          {/* Search Bar and Login/Register/Logout/Profile */}
          <Nav className="ms-auto d-flex align-items-center">
            {isLoggedIn ? (
              <>
                {/* Search Bar */}
                <Form className="d-flex me-2">
                  <Form.Control
                    type="search"
                    placeholder="What are we looking for?"
                    className="me-2"
                    aria-label="Search"
                  />
                </Form>

                {/* Profile image and Dropdown */}
                <Dropdown
                  show={showDropdown}
                  onMouseEnter={() => setShowDropdown(true)}
                  onMouseLeave={() => setShowDropdown(false)}
                  align="end"
                >
                  <Dropdown.Toggle
                    variant="link"
                    id="dropdown-profile"
                    className="d-flex align-items-center"
                    style={{ border: "none", boxShadow: "none" }}
                  >
                    <img
                      src={profileImage}
                      alt="Profile"
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        objectFit: 'cover',
                        cursor: 'pointer',
                      }}
                    />
                  </Dropdown.Toggle>

                  {/* Dropdown Menu with 4 Items */}
                  <Dropdown.Menu>
                    <Dropdown.Item as="button">
                      <strong>Welcome, {userProfile.name}!</strong>
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item as={Link} to="/dashboard">Dashboard</Dropdown.Item>
                    {/* <Dropdown.Item as={Link} to="/Switch to Pusher">Switch to Pusher</Dropdown.Item>
                    <Dropdown.Item as={Link} to="/Switch to backer">Switch to backer</Dropdown.Item>
                    <Dropdown.Item as={Link} to="/Switch to Maker">Switch to Macker</Dropdown.Item> */}
                    <Dropdown.Divider />
                    <Dropdown.Item as="button" onClick={handleLogout} className="text-danger">
                      Logout
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </>
            ) : (
              <>
                <Form className="d-flex me-2">
                  <Form.Control
                    type="search"
                    placeholder="What are we looking for?"
                    className="me-2"
                    aria-label="Search"
                  />
                </Form>

                <Button variant="warning" className="ms-2">
                  <Link to="/login" style={{ color: 'white', textDecoration: 'none' }}>Login</Link>
                </Button>

                <Button variant="warning" className="ms-2">
                  <Link to="/register" style={{ color: 'white', textDecoration: 'none' }}>Register</Link>
                </Button>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
