import React, { useState } from 'react';
import { Dropdown, Card, Button, Row, Col, ProgressBar } from 'react-bootstrap';

const Cards = () => {
  const [selectedCategory, setSelectedCategory] = useState('Choose Category');
  
  const handleCategorySelect = (eventKey) => {
    setSelectedCategory(eventKey);
  };

  // Projects with individual image URLs for each card
  const initialProjects = [
    {
      id: 1,
      title: "Help Us Make Another Season of The Yarn",
      amount: "$24568",
      goal: "$100,000",
      progress: 50,
      category: "Movie, Branding",
      description: "We'd like to continue to make a high quality audio show that takes listeners behind the scenes of children's literature.",
      image: "/images/bg-prof-01.jpg", // Image URL for this project
      
    // image: "url('/images/slider-bottom-bg.jpg')",rangeValue: 50, // Initial range value
    },
    {
      id: 2,
      title: "Kyoto Project",
      amount: "$24568",
      goal: "$100,000",
      progress: 50,
      category: "Tech, Art",
      description: "This project brings art and technology together to showcase the beauty of Kyoto.",
      image: "/images/bg-prof-02.jpg", // Image URL for this project
      rangeValue: 50, // Initial range value
    },
    {
      id: 3,
      title: "Adventure Quest",
      amount: "$24568",
      goal: "$100,000",
      progress: 50,
      category: "Games, Entertainment",
      description: "A new game where players can go on thrilling adventures through beautiful landscapes.",
      image: "/images/bg-prof-03.jpg", // Image URL for this project // Image URL for this project
      rangeValue: 50, // Initial range value
    },
  ];

  const [projects, setProjects] = useState(initialProjects);

  // Handle range change for a specific project
  const handleRangeChange = (index, value) => {
    const updatedProjects = [...projects];
    updatedProjects[index].rangeValue = value;
    setProjects(updatedProjects);
  };

  return (
    <div>
      {/* Category Dropdown */}
      <div className="category-dropdown" style={{ textAlign: 'right', marginTop: '10px' }}>
        <Dropdown onSelect={handleCategorySelect} align="end">
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            {selectedCategory}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item eventKey="Choose Category">Choose Category</Dropdown.Item>
            <Dropdown.Item eventKey="Choose Category 1">Choose Category 1</Dropdown.Item>
            <Dropdown.Item eventKey="Choose Category 2">Choose Category 2</Dropdown.Item>
            <Dropdown.Item eventKey="Choose Category 3">Choose Category 3</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      {/* Featured Projects Section */}
      <h2 className="featured-projects-title">Featured Projects</h2>

      <Row>
        {projects.map((project, index) => (
          <Col key={project.id} sm={12} md={6} lg={4}>
            <Card className="mb-4">
              {/* Use individual image for each project */}
              <Card.Img variant="top" src={project.image} />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <ProgressBar now={project.progress} label={`${project.progress}%`} />
                <div className="range-container" style={{ textAlign: 'center', marginTop: '50px' }}>
                  {/* Range Slider for each project */}
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={project.rangeValue}
                    onChange={(e) => handleRangeChange(index, e.target.value)}
                    style={{ width: '80%', marginBottom: '10px' }} // Adjust the width of the range
                  />

                  {/* Display selected value */}
                  <div style={{ marginTop: '10px' }}>
                    <p>Selected Value: {project.rangeValue}</p>
                  </div>
                </div>
                <div className="project-info">
                  <p>Amount: {project.amount}</p>
                  <p>Goal: {project.goal}</p>
                  <p>Days Left: 50</p>
                  <Button variant="danger">Back Now</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Cards;
