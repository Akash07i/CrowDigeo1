import React from 'react';

const ProfileCard = () => {
  return (
    <div style={styles.container}>
      {/* Profile Header Section */}
      <div style={styles.header}>
        <img 
          src="https://s3-alpha.figma.com/hub/file/2760771676/58218286-6bec-4a40-9d23-7be43f1ad5f6-cover.png" 
          alt="Profile Banner" 
          style={styles.bannerImage} 
        />
      </div>

      {/* Profile Section */}
      <div style={styles.profileInfo}>
        {/* Profile Picture */}
        <img 
          src="https://th.bing.com/th/id/OIP._GQhv02YolWMzaKvTlg4GQHaLH?rs=1&pid=ImgDetMain" 
          alt="Profile" 
          style={styles.profileImage} 
        />
        <div style={styles.details}>
          {/* Name and Description */}
          <h2 style={styles.name}>Sample Data</h2>
          <p style={styles.jobTitle}>Aerospace | Startup | Author</p>
          <p style={styles.location}>Herborn, Hesse, Germany</p>
          <div style={styles.contact}>
            <span style={styles.followers}>12,866 followers</span>
            <span style={styles.connections}>500+ connections</span>
          </div>
        </div>
        
      </div>

      {/* About Section */}
      <div style={styles.aboutSection}>
        <h3>About</h3>
        <p style={styles.aboutText}>
          Steering verification and certification at Safran, my focus is on aerospace compliance and delivering software system
          excellence for galley insert products. Collaborating with cross-functional teams, we ensure that deliverables meet the
          stringent requirements of both Airbus and Emirates, reflecting a commitment to quality assurance and customer satisfaction.
        </p>
      </div>

      {/* Experience Section */}
      <div style={styles.experienceSection}>
        <h3>Experience</h3>
        <div style={styles.experience}>
          <h4 style={styles.jobTitle}>Verification and Validation Expert</h4>
          <p style={styles.company}>Safran - Full-time</p>
          <p style={styles.date}>Nov 2023 - Present</p>
          <p style={styles.location}>Herborn, Hesse, Germany</p>
          <p style={styles.description}>Taking care of verification and certification aspects for galley inserts products for Airbus. Working on multiple inserts Software System testing and quality assurance of deliverables to customers.</p>
        </div>

        <div style={styles.experience}>
          <h4 style={styles.jobTitle}>Software Director (Embedded Systems)</h4>
          <p style={styles.company}>DUXES LABS PVT LTD - Full-time</p>
          <p style={styles.date}>Nov 2021 - Jul 2024</p>
          <p style={styles.location}>Greater Bengaluru Area - On-site</p>
          <p style={styles.description}>Heading Embedded Product development activities from planning to delivering the solution to customers.</p>
        </div>

        <div style={styles.experience}>
          <h4 style={styles.jobTitle}>Project Manager | Power Tools | EOL | IoT | Robotics | BOSCH Non-linear Segment</h4>
          <p style={styles.company}>Robert Bosch Engineering and Business Solutions Private Limited - Full-time</p>
          <p style={styles.date}>Aug 2018 - Oct 2021</p>
          <p style={styles.location}>Bengaluru Area, India - On-site</p>
          <p style={styles.description}>Leadership, Requirements Management, and Power Tools expertise in IoT and Robotics domains.</p>
        </div>
      </div>

      {/* Activity Section */}
      <div style={styles.activityCard}>
        <div style={styles.activity}>
          <p><strong>john dhe</strong> commented on a post <span>1d ago</span></p>
          <p>“Google (or Gemini) to Perplexity. It's a no-brainer because neither of those assistants can handle the tasks Perplexity Assistant can. So direct challenge? Gemini can also do this in few days for sure! What next?”</p>
        </div>
        <div style={styles.activity}>
          <p><strong>john dhe</strong> commented on a post <span>1w ago</span></p>
          <p>Happy birthday to someone who gave births to so many waterbodies 🙏</p>
        </div>
        <div style={styles.activity}>
          <p><strong>john dhe</strong> commented on a post <span>1w ago</span></p>
          <p>Congratulations!</p>
        </div>
      </div>

      {/* Button Section */}
      <div style={styles.buttons}>
        <button style={styles.followButton}>+ Follow</button>
        <button style={styles.messageButton}>Message</button>
      </div>
    </div>
  );
};

// CSS for styling the component
const styles = {
  container: {
    width: '80%',
    maxWidth: '800px',
    margin: '0 auto',
    border: '1px solid #ccc',
    // borderRadius: '10px',
    overflow: 'hidden',
    // boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#fff',
    marginBottom: '20px',
  },
  header: {
    // Position:'absolute',
    // top:"100px",
    // left:'100px',
    width: '100%',
    height: '150px',
    backgroundColor: '#ccc',
  },
  bannerImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  profileInfo: {
    display: 'flex',
    padding: '20px',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    // Position:'absolute',
    // top:"10px",
    // left:'10px',
    borderRadius: '50%',
    width: '100px',
    height: '100px',
    border: '4px solid white',
    boxShadow: '0 0 10px rgba(0,0,0,0.2)',
  },
  details: {
    marginLeft: '20px',
  },
  name: {
    fontSize: '1.5rem',
    margin: '0',
    color: '#333',
  },
  jobTitle: {
    fontSize: '1rem',
    color: '#555',
    margin: '5px 0',
  },
  location: {
    fontSize: '0.9rem',
    color: '#777',
    margin: '5px 0',
  },
  contact: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '10px',
  },
  followers: {
    fontSize: '0.9rem',
    color: '#0073b1',
  },
  connections: {
    fontSize: '0.9rem',
    color: '#0073b1',
  },
  aboutSection: {
    padding: '20px',
    borderTop: '1px solid #eee',
  },
  aboutText: {
    fontSize: '1rem',
    color: '#555',
  },
  experienceSection: {
    padding: '20px',
    borderTop: '1px solid #eee',
  },
  experience: {
    marginBottom: '20px',
  },
  company: {
    fontSize: '1rem',
    color: '#555',
  },
  date: {
    fontSize: '0.9rem',
    color: '#777',
  },
  description: {
    fontSize: '0.9rem',
    color: '#555',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px',
    borderTop: '1px solid #eee',
  },
  followButton: {
    padding: '10px 20px',
    backgroundColor: '#0073b1',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  messageButton: {
    padding: '10px 20px',
    backgroundColor: '#ccc',
    color: 'black',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  activityCard: {
    marginTop: '20px',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '10px',
    backgroundColor: '#fafafa',
  },
  activity: {
    margin: '15px 0',
    fontSize: '1rem',
    color: '#555',
  }
};

export default ProfileCard;
