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
        const response = await axios.get('http://localhost:5000/api/getAllUsers');
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
              src="https://www.crowdiego.com/images/slider-01.jpg"  // Replace with your image URL
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
                          src={user.profileImage || 'http://localhost:5000/uploads/default.jpg'} // Default fallback if image is missing
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
                          src={user.profileImage || 'http://localhost:5000/default.jpg'} // Default fallback if image is missing
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
                          src={user.profileImage || 'http://localhost:5000/uploads/default.jpg'} // Default fallback if image is missing
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
                          src={user.profileImage || 'http://localhost:5000/uploads/default.jpg'} // Default fallback if image is missing
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

