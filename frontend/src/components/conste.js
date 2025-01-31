import React from 'react';
import { Button, Container } from 'react-bootstrap';

const IdeaSection = () => {
  return (
    <section style={{
      background: 'linear-gradient(45deg, #FF6A00, #FF9000)', 
      margin:'0px 12px',
      padding: '100px', 
      textAlign: 'center',
      color: 'white',
      height: '300px',
    }}>
      <Container>
        <h2 style={{ fontSize: '3rem', fontWeight: 'bold' }}>
          We help your ideas come to life
        </h2>
        <Button variant="light" size="lg" style={{
          padding: '12px 24px', 
          fontSize: '18px', 
          backgroundColor: '#fff', 
          color: '#FF6A00', 
          border: 'none', 
          borderRadius: '30px', 
          marginTop: '20px'
        }}>
          Post your idea
        </Button>
      </Container>
    </section>
  );
}

export default IdeaSection;
