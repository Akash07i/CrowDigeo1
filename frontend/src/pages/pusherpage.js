// import React from 'react';
// import { Container, Row, Col, Button } from 'react-bootstrap';

// const PusherPage = () => {
//   const investor = {
//     name: "John Doe",
//     contactDetails: {
//       email: "john.doe@example.com",
//       phone: "+1 (555) 123-4567",
//       linkedin: "https://www.linkedin.com/in/johndoe/"
//     },
//     currentPosition: "Partner at ABC Ventures",
//     careerOverview: "John has over 15 years of experience in the venture capital industry, with a track record of successful investments in tech and healthcare startups.",
//     investmentFocus: {
//       industries: ["Technology", "Healthcare", "Renewable Energy"],
//       stage: "Seed, Early-Stage"
//     },
//     investmentPhilosophy: "John is known for his hands-on approach and willingness to take calculated risks in disruptive industries. He values passion, innovation, and resilience in founders.",
//     notableInvestments: [
//       { company: "Tech Innovators Inc.", outcome: "Acquired by XYZ Corp for $200M" },
//       { company: "Green Solutions", outcome: "IPO in 2021" }
//     ],
//     education: "MBA from Harvard Business School | B.S. in Computer Science from Stanford University",
//     additionalInformation: {
//       boardMemberships: ["Tech Innovators Inc.", "Green Solutions"],
//       publications: ["'The Future of Venture Capital'", "'Tech Disruption in 2025'"],
//       mediaFeatures: ["Featured on CNBC", "Guest on 'Tech Talks' Podcast"]
//     }
//   };

//   return (
//     <Container style={styles.container}>
//       <Row>
//         <Col md={4}>
//           <div style={styles.imageWrapper}>
//             <img
//               src="https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/392986211/original/8764ed22054f9867d69c45ed1300e7d2c2d9fc6c.jpg"
//               alt="Investor"
//               style={styles.profileImage}
//             />
//           </div>
//         </Col>
//         <Col md={8}>
//           <div style={styles.profileContent}>
//             <h2 style={styles.name}>{investor.name}</h2>
//             <p style={styles.position}>{investor.currentPosition}</p>

//             <h4 style={styles.sectionTitle}>Contact Details</h4>
//             <p><strong>Email:</strong> <a href={`mailto:${investor.contactDetails.email}`} style={styles.link}>{investor.contactDetails.email}</a></p>
//             <p><strong>Phone:</strong> {investor.contactDetails.phone}</p>
//             <p><strong>LinkedIn:</strong> <a href={investor.contactDetails.linkedin} target="_blank" rel="noopener noreferrer" style={styles.link}>{investor.contactDetails.linkedin}</a></p>

//             <h4 style={styles.sectionTitle}>Career Overview</h4>
//             <p>{investor.careerOverview}</p>

//             <h4 style={styles.sectionTitle}>Investment Focus</h4>
//             <p><strong>Industries/Sectors:</strong> {investor.investmentFocus.industries.join(", ")}</p>
//             <p><strong>Investment Stage:</strong> {investor.investmentFocus.stage}</p>

//             <h4 style={styles.sectionTitle}>Investment Philosophy</h4>
//             <p>{investor.investmentPhilosophy}</p>

//             <h4 style={styles.sectionTitle}>Notable Investments</h4>
//             <ul style={styles.list}>
//               {investor.notableInvestments.map((investment, index) => (
//                 <li key={index}><strong>{investment.company}</strong> - {investment.outcome}</li>
//               ))}
//             </ul>

//             <h4 style={styles.sectionTitle}>Education</h4>
//             <p>{investor.education}</p>

//             <h4 style={styles.sectionTitle}>Additional Information</h4>
//             <p><strong>Board Memberships:</strong> {investor.additionalInformation.boardMemberships.join(", ")}</p>
//             <p><strong>Publications:</strong> {investor.additionalInformation.publications.join(", ")}</p>
//             <p><strong>Media Features:</strong> {investor.additionalInformation.mediaFeatures.join(", ")}</p>

//             <Button variant="primary" style={styles.contactButton}>Contact Investor</Button>
//           </div>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// const styles = {
//   container: {
//     marginTop: '50px',
//     fontFamily: 'Arial, sans-serif',
//   },
//   imageWrapper: {
//     textAlign: 'center',
//   },
//   profileImage: {
//     borderRadius: '50%',
//     width: '150px',
//     height: '150px',
//     border: '4px solid #f0f0f0',
//   },
//   profileContent: {
//     paddingLeft: '20px',
//   },
//   name: {
//     fontSize: '28px',
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   position: {
//     fontSize: '18px',
//     color: '#555',
//     marginBottom: '20px',
//   },
//   sectionTitle: {
//     fontSize: '20px',
//     fontWeight: 'bold',
//     marginTop: '20px',
//     marginBottom: '10px',
//   },
//   link: {
//     color: '#007bff',
//     textDecoration: 'none',
//   },
//   list: {
//     marginLeft: '20px',
//     paddingLeft: '10px',
//   },
//   contactButton: {
//     marginTop: '20px',
//   }
// };

// export default PusherPage;


import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const PusherPage = () => {
  const investor = {
    name: "John Doe",
    contactDetails: {
      email: "john.doe@example.com",
      phone: "+1 (555) 123-4567",
      linkedin: "https://www.linkedin.com/in/johndoe/"
    },
    currentPosition: "Partner at ABC Ventures",
    careerOverview: "John has over 15 years of experience in the venture capital industry, with a track record of successful investments in tech and healthcare startups.",
    investmentFocus: {
      industries: ["Technology", "Healthcare", "Renewable Energy"],
      stage: "Seed, Early-Stage"
    },
    investmentPhilosophy: "John is known for his hands-on approach and willingness to take calculated risks in disruptive industries. He values passion, innovation, and resilience in founders.",
    notableInvestments: [
      { company: "Tech Innovators Inc.", outcome: "Acquired by XYZ Corp for $200M" },
      { company: "Green Solutions", outcome: "IPO in 2021" }
    ],
    education: "MBA from Harvard Business School | B.S. in Computer Science from Stanford University",
    additionalInformation: {
      boardMemberships: ["Tech Innovators Inc.", "Green Solutions"],
      publications: ["'The Future of Venture Capital'", "'Tech Disruption in 2025'"],
      mediaFeatures: ["Featured on CNBC", "Guest on 'Tech Talks' Podcast"]
    }
  };

  return (
    <Container style={styles.container}>
      <Row>
        <Col md={4}>
          <div style={styles.imageWrapper}>
            <img
              src="https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/392986211/original/8764ed22054f9867d69c45ed1300e7d2c2d9fc6c.jpg"
              alt="Investor"
              style={styles.profileImage}
            />
          </div>
        </Col>
        <Col md={8}>
          <div style={styles.profileContent}>
            <h2 style={styles.name}>{investor.name}</h2>
            <p style={styles.position}>{investor.currentPosition}</p>

            <h4 style={styles.sectionTitle}>Contact Details</h4>
            <p><strong>Email:</strong> <a href={`mailto:${investor.contactDetails.email}`} style={styles.link}>{investor.contactDetails.email}</a></p>
            <p><strong>Phone:</strong> {investor.contactDetails.phone}</p>
            <p><strong>LinkedIn:</strong> <a href={investor.contactDetails.linkedin} target="_blank" rel="noopener noreferrer" style={styles.link}>{investor.contactDetails.linkedin}</a></p>

            <h4 style={styles.sectionTitle}>Career Overview</h4>
            <p>{investor.careerOverview}</p>

            <h4 style={styles.sectionTitle}>Investment Focus</h4>
            <p><strong>Industries/Sectors:</strong> {investor.investmentFocus.industries.join(", ")}</p>
            <p><strong>Investment Stage:</strong> {investor.investmentFocus.stage}</p>

            <h4 style={styles.sectionTitle}>Investment Philosophy</h4>
            <p>{investor.investmentPhilosophy}</p>

            <h4 style={styles.sectionTitle}>Notable Investments</h4>
            <ul style={styles.list}>
              {investor.notableInvestments.map((investment, index) => (
                <li key={index}><strong>{investment.company}</strong>: {investment.outcome}</li>
              ))}
            </ul>

            <h4 style={styles.sectionTitle}>Education</h4>
            <p>{investor.education}</p>

            <h4 style={styles.sectionTitle}>Additional Information</h4>
            <p><strong>Board Memberships:</strong> {investor.additionalInformation.boardMemberships.join(", ")}</p>
            <p><strong>Publications:</strong> {investor.additionalInformation.publications.join(", ")}</p>
            <p><strong>Media Features:</strong> {investor.additionalInformation.mediaFeatures.join(", ")}</p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button style={styles.contactButton}>Contact Investor</Button>
        </Col>
      </Row>
    </Container>
  );
};

// Internal styles
const styles = {
  container: {
    padding: '30px',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  },
  imageWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: '100%',
    height: 'auto',
    borderRadius: '50%',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  },
  profileContent: {
    marginLeft: '30px',
  },
  name: {
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  position: {
    fontSize: '18px',
    fontWeight: '500',
    color: '#555',
    marginBottom: '20px',
  },
  sectionTitle: {
    fontSize: '20px',
    fontWeight: '600',
    color: '#333',
    marginTop: '20px',
  },
  link: {
    color: '#007bff',
    textDecoration: 'none',
  },
  list: {
    paddingLeft: '20px',
    listStyleType: 'disc',
  },
  contactButton: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
  },
};

export default PusherPage;
