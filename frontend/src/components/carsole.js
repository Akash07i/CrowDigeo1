// //
// import React, { useState, useEffect } from 'react';
// import { Carousel, Container, Row, Col, Button } from 'react-bootstrap';
// import axios from 'axios';

// function Carou() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     // Fetch users from the backend API
//     const fetchUsers = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/getAllUsers');
//         console.log("Users:", response.data.users);
//         setUsers(response.data.users);  // Update the state with the list of users
//       } catch (error) {
//         console.error('Error fetching users:', error);
//       }
//     };

//     fetchUsers();
//   }, []);

//   return (
//     <Container fluid>
//       {/* Bootstrap Carousel */}
//       <Carousel>
//         {/* First Slide */}
//         <Carousel.Item>
//           <div style={{ position: 'relative' }}>
//             <img
//               className="d-block w-100"
//               src="https://www.crowdiego.com/images/slider-01.jpg"  // Replace with your image URL
//               alt="First slide"
//               style={{ height: '600px', objectFit: 'cover' }}
//             />
//             {/* User Info (Positioned on top of the carousel) */}
//             <div style={{
//               position: 'absolute', 
//               bottom: '20px', 
//               left: '50%', 
//               transform: 'translateX(-50%)', 
//               textAlign: 'center', 
//               color: 'white', 
//               width: '100%'
//             }}>
//               <Row>
//                 <Col>
//                   <p>Backers</p>
//                   <div className="d-flex justify-content-center">
//                     {users.filter(user => user.role === 'Backer').map((user, index) => (
//                       <img
//                         key={index}
//                         src={user.profileImage || 'http://localhost:5000/uploads/default.jpg'} // Default fallback if image is missing
//                         alt="user"
//                         className="rounded-circle"
//                         style={{ width: '40px', height: '40px', margin: '0 5px' }}
//                       />
//                     ))}
//                   </div>
//                 </Col>

//                 <Col>
//                   <p>Pushed by</p>
//                   <div className="d-flex justify-content-center">
//                     {users.filter(user => user.role === 'Pusher').map((user, index) => (
//                       <img
//                         key={index}
//                         src={user.profileImage || 'http://localhost:5000/default.jpg'} // Default fallback if image is missing
//                         alt="user"
//                         className="rounded-circle"
//                         style={{ width: '40px', height: '40px', margin: '0 5px' }}
//                       />
//                     ))}
//                   </div>
//                 </Col>

//                 <Col>
//                   <p>Made by</p>
//                   <div className="d-flex justify-content-center">
//                     {users.filter(user => user.role === 'Maker').map((user, index) => (
//                       <img
//                         key={index}
//                         src={user.profileImage || 'http://localhost:5000/uploads/default.jpg'} // Default fallback if image is missing
//                         alt="user"
//                         className="rounded-circle"
//                         style={{ width: '40px', height: '40px', margin: '0 5px' }}
//                       />
//                     ))}
//                   </div>
//                 </Col>
//               </Row>
//             </div>
//           </div>
//           <Carousel.Caption style={{ textAlign: 'center', color: 'white', bottom: '20%' }}>
//             <h3 style={{ fontSize: '3rem', fontWeight: 'bold' }}>A New Software That Can Convert Any Video File To 3D</h3>
//             <p style={{ fontSize: '1.25rem' }}>by EFX Studios</p>
//             <Button variant="warning" size="lg">Featured</Button>
//           </Carousel.Caption>
//         </Carousel.Item>
//       </Carousel>
//     </Container>
//   );
// }

// export default Carou;

// import React, { useState, useEffect } from 'react';
// import { Carousel, Container, Row, Col, Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom'; // Import Link from react-router-dom
// import axios from 'axios';

// function Carou() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     // Fetch users from the backend API
//     const fetchUsers = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/getAllUsers');
//         console.log("Users:", response.data.users);
//         setUsers(response.data.users);  // Update the state with the list of users
//       } catch (error) {
//         console.error('Error fetching users:', error);
//       }
//     };

//     fetchUsers();
//   }, []);

//   return (
//     <Container fluid>
//       {/* Bootstrap Carousel */}
//       <Carousel>
//         {/* First Slide */}
//         <Carousel.Item>
//           <div style={{ position: 'relative' }}>
//             <img
//               className="d-block w-100"
//               src="https://www.crowdiego.com/images/slider-01.jpg"  // Replace with your image URL
//               alt="First slide"
//               style={{ height: '600px', objectFit: 'cover' }}
//             />
//             {/* User Info (Positioned on top of the carousel) */}
//             <div style={{
//               position: 'absolute', 
//               bottom: '20px', 
//               left: '50%', 
//               transform: 'translateX(-50%)', 
//               textAlign: 'center', 
//               color: 'white', 
//               width: '100%'
//             }}>
//               <Row>
//                 <Col>
//                   <p>Backers</p>
//                   <div className="d-flex justify-content-center">
//                     {users.filter(user => user.role === 'Backer').map((user, index) => (
//                       <Link to={`/profilecard`} key={index}> {/* Wrap in Link for navigation */}
//                         <img
//                           src={user.profileImage || 'http://localhost:5000/uploads/default.jpg'} // Default fallback if image is missing
//                           alt="user"
//                           className="rounded-circle"
//                           style={{ width: '40px', height: '40px', margin: '0 5px' }}
//                         />
//                       </Link>
//                     ))}
//                   </div>
//                 </Col>

//                 <Col>
//                   <p>Pushed by</p>
//                   <div className="d-flex justify-content-center">
//                     {users.filter(user => user.role === 'Pusher').map((user, index) => (
//                       <Link to={`/profilecard`} key={index}> {/* Wrap in Link for navigation */}
//                         <img
//                           src={user.profileImage || 'http://localhost:5000/default.jpg'} // Default fallback if image is missing
//                           alt="user"
//                           className="rounded-circle"
//                           style={{ width: '40px', height: '40px', margin: '0 5px' }}
//                         />
//                       </Link>
//                     ))}
//                   </div>
//                 </Col>

//                 <Col>
//                   <p>Made by</p>
//                   <div className="d-flex justify-content-center">
//                     {users.filter(user => user.role === 'Maker').map((user, index) => (
//                       <Link to={`/profilecard`} key={index}> {/* Wrap in Link for navigation */}
//                         <img
//                           src={user.profileImage || 'http://localhost:5000/uploads/default.jpg'} // Default fallback if image is missing
//                           alt="user"
//                           className="rounded-circle"
//                           style={{ width: '40px', height: '40px', margin: '0 5px' }}
//                         />
//                       </Link>
//                     ))}
//                   </div>
//                 </Col>

//               </Row>
//             </div>
//           </div>
//           <Carousel.Caption style={{ textAlign: 'center', color: 'white', bottom: '20%' }}>
//             <h3 style={{ fontSize: '3rem', fontWeight: 'bold' }}>A New Software That Can Convert Any Video File To 3D</h3>
//             <p style={{ fontSize: '1.25rem' }}>by EFX Studios</p>
//             <Button variant="warning" size="lg">Featured</Button>
//           </Carousel.Caption>
//         </Carousel.Item>
//       </Carousel>
//     </Container>
//   );
// }

// export default Carou;

import React, { useState, useEffect } from 'react';
import { Carousel, Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import axios from 'axios';

function Carou() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users from the backend API
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http:// 3.109.1.93/api/getAllUsers');
        console.log("Users:", response.data.users);
        setUsers(response.data.users);  // Update the state with the list of users
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <Container fluid>
      {/* Bootstrap Carousel */}
      <Carousel>
        {/* First Slide */}
        <Carousel.Item>
          <div style={{ position: 'relative' }}>
            <img
              className="d-block w-100"
              src="/images/slider-01.jpg"  // Replace with your image URL
              alt="First slide"
              style={{ height: '600px', objectFit: 'cover' }}
            />
            {/* User Info (Positioned on top of the carousel) */}
            <div style={{
              position: 'absolute', 
              bottom: '20px', 
              left: '50%', 
              transform: 'translateX(-50%)', 
              textAlign: 'center', 
              color: 'white', 
              width: '100%'
            }}>
              <Row>
                {/* Backers */}
                <Col>
                  <p>Backers</p>
                  <div className="d-flex justify-content-center">
                    {users.filter(user => user.role === 'Backer').map((user, index) => (
                      <Link to={`/Profilecard`} key={index}> {/* Wrap in Link for navigation */}  
                        <img
                          src={user.profileImage || 'http:// 3.109.1.93/uploads/default.jpg'} // Default fallback if image is missing
                          alt="user"
                          className="rounded-circle"
                          style={{ width: '40px', height: '40px', margin: '0 5px' }}
                        />
                      </Link>
                    ))}
                  </div>
                </Col>

                {/* Pushed by */}
                <Col>
                  <p>Pushed by</p>
                  <div className="d-flex justify-content-center">
                    {users.filter(user => user.role === 'Pusher').map((user, index) => (
                      <Link to={`/pusherpage`} key={index}> {/* Wrap in Link for navigation */}
                        <img
                          src={user.profileImage || 'http:// 3.109.1.93/default.jpg'} // Default fallback if image is missing
                          alt="user"
                          className="rounded-circle"
                          style={{ width: '40px', height: '40px', margin: '0 5px' }}
                        />
                      </Link>
                    ))}
                  </div>
                </Col>

                {/* Made by */}
                <Col>
                  <p>Made by</p>
                  <div className="d-flex justify-content-center">
                    {users.filter(user => user.role === 'Maker').map((user, index) => (
                      <Link to={`/profilepage`} key={index}> {/* Wrap in Link for navigation */}
                        <img
                          src={user.profileImage || 'http:// 3.109.1.93/uploads/default.jpg'} // Default fallback if image is missing
                          alt="user"
                          className="rounded-circle"
                          style={{ width: '40px', height: '40px', margin: '0 5px' }}
                        />
                      </Link>
                    ))}
                  </div>
                </Col>

                {/* Ideators */}
                <Col>
                  <p>Ideators</p>
                  <div className="d-flex justify-content-center">
                    {users.filter(user => user.role === 'Ideator').map((user, index) => (
                      <Link to={`/idea`} key={index}> {/* Wrap in Link for navigation */}
                        <img
                          src={user.profileImage || 'http:// 3.109.1.93/uploads/default.jpg'} // Default fallback if image is missing
                          alt="user"
                          className="rounded-circle"
                          style={{ width: '40px', height: '40px', margin: '0 5px' }}
                        />
                      </Link>
                    ))}
                  </div>
                </Col>

              </Row>
            </div>
          </div>
          <Carousel.Caption style={{ textAlign: 'center', color: 'white', bottom: '20%' }}>
            <h3 style={{ fontSize: '3rem', fontWeight: 'bold' }}>A New Software That Can Convert Any Video File To 3D</h3>
            <p style={{ fontSize: '1.25rem' }}>by EFX Studios</p>
            <Button variant="warning" size="lg">Featured</Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default Carou;


// import React, { useState, useEffect } from "react";
// import { Carousel, Container, Row, Col, Button } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import axios from "axios";

// function Carou() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/api/getAllUsers");
//         console.log("Users:", response.data.users);
//         setUsers(response.data.users);
//       } catch (error) {
//         console.error("Error fetching users:", error);
//       }
//     };

//     fetchUsers();
//   }, []);

//   return (
//     <Container fluid className="p-0">
//       <Carousel>
//         <Carousel.Item>
//           <div style={{ position: "relative" }}>
//             {/* Background Image */}
//             <img
//               className="d-block w-100 carousel-img"
//               src="/images/slider-01.jpg"
//               alt="First slide"
//             />

//             {/* Overlay Content */}
//             <div className="carousel-overlay">
//               <Row className="justify-content-center text-center">
//                 {["Backer", "Pusher", "Maker", "Ideator"].map((role, idx) => (
//                   <Col key={idx} xs={6} sm={6} md={3} className="mb-3">
//                     <p className="role-title">{role}s</p>
//                     <div className="user-icons">
//                       {users
//                         .filter((user) => user.role === role)
//                         .map((user, index) => (
//                           <Link to={`/${role.toLowerCase()}page`} key={index} className="user-link">
//                             <img
//                               src={user.profileImage || "http://localhost:5000/uploads/default.jpg"}
//                               alt="user"
//                               className="user-img"
//                             />
//                           </Link>
//                         ))}
//                     </div>
//                   </Col>
//                 ))}
//               </Row>
//             </div>
//           </div>

//           {/* Caption Content */}
//           <Carousel.Caption className="carousel-caption">
//             <h3 className="carousel-title">A New Software That Can Convert Any Video File To 3D</h3>
//             <p className="carousel-subtitle">by EFX Studios</p>
//             <Button variant="warning" size="lg">
//               Featured
//             </Button>
//           </Carousel.Caption>
//         </Carousel.Item>
//       </Carousel>

//       {/* CSS Styles */}
//       <style>{`
//         .carousel-img {
//           height: 600px;
//           object-fit: cover;
//         }

//         .carousel-overlay {
//           position: absolute;
//           bottom: 10%;
//           left: 50%;
//           transform: translateX(-50%);
//           width: 100%;
//           padding: 10px;
//           text-align: center;
//         }

//         .role-title {
//           font-size: 1.2rem;
//           font-weight: bold;
//           color: white;
//         }

//         .user-icons {
//           display: flex;
//           justify-content: center;
//           flex-wrap: wrap;
//           gap: 8px;
//         }

//         .user-link {
//           display: inline-block;
//         }

//         .user-img {
//           width: 40px;
//           height: 40px;
//           border-radius: 50%;
//           object-fit: cover;
//         }

//         .carousel-caption {
//           text-align: center;
//           bottom: 25%;
//           color: white;
//         }

//         .carousel-title {
//           font-size: 2.5rem;
//           font-weight: bold;
//         }

//         .carousel-subtitle {
//           font-size: 1.2rem;
//         }

//         @media (max-width: 768px) {
//           .carousel-img {
//             height: 400px;
//           }

//           .carousel-caption {
//             bottom: 15%;
//           }

//           .carousel-title {
//             font-size: 1.8rem;
//           }

//           .carousel-subtitle {
//             font-size: 1rem;
//           }

//           .user-img {
//             width: 30px;
//             height: 30px;
//           }
//         }

//         @media (max-width: 576px) {
//           .carousel-img {
//             height: 300px;
//           }

//           .carousel-caption {
//             bottom: 10%;
//           }

//           .carousel-title {
//             font-size: 1.5rem;
//           }

//           .carousel-subtitle {
//             font-size: 0.9rem;
//           }

//           .user-img {
//             width: 25px;
//             height: 25px;
//           }
//         }
//       `}</style>
//     </Container>
//   );
// }

// export default Carou;
