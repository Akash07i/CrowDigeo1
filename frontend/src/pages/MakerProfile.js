


import React, { useState } from 'react';

function ProfilePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const reviews = [
    {
      name: 'Isabella_pro13',
      location: 'United Kingdom',
      rating: 5,
      review: "I absolutely love my book cover! The designer took the time to gather all the necessary details to bring my vision to life, and the result was even better than I imagined. As this is my first book, I didn’t know everything about the process, but he was incredibly patient, supportive, and accommodating.",
      price: '₹4,400',
      duration: '5 days',
      service: 'Logo Design',
      image: 'https://example.com/logo1.jpg', // Add actual image URL
    },
    {
      name: 'regenwellness24',
      location: 'United States',
      rating: 5,
      review: "The seller was super quick in his message response time. Very polite through any and all changes asked. Was transparent about what he could or could not do without having to charge more and assisted working around those issues. It was nice to have a wide variety of concepts to start from for us to be able to work on the one that we felt was the most liked.",
      price: '₹4,200',
      duration: '5 days',
      service: 'Logo Design',
      image: 'https://example.com/logo2.jpg', // Add actual image URL
    },
  ];

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div style={styles.container}>
      <div style={styles.profileCard}>
        {/* Profile Section */}
        <div style={styles.profileHeader}>
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXJA32WU4rBpx7maglqeEtt3ot1tPIRWptxA&s://your-image-link.jpg" 
            alt="profile" 
            style={styles.profileImage} 
          />
          <div style={styles.profileDetails}>
            <h2 style={styles.profileName}>Nafay Sheikh</h2>
            <p style={styles.profileUsername}>@nafaysheikh14</p>
            <div style={styles.rating}>
              <span style={styles.ratingStars}>⭐ 4.8</span>
              <span style={styles.reviews}>(180 Reviews)</span>
            </div>
            <p style={styles.languages}>Pakistan | English, Spanish</p>
          </div>
        </div>

        {/* About Me Section */}
        <div style={styles.aboutSection}>
          <h3 style={styles.sectionTitle}>About Me</h3>
          <p style={styles.aboutText}>
            Hey👋 This is Nafay Sheikh, I am imaginative and visionary logo designer,
            I have more than 4 years experience with unleash the power of creativity 
            with my hand drawn logo designs. I have created a lot of logo designs for 
            various companies and business startups.
          </p>
        </div>

        {/* Skills Section */}
        <div style={styles.skillsSection}>
          <h3 style={styles.sectionTitle}>Skills</h3>
          <div style={styles.skills}>
            <span style={styles.skill}>Logo designer</span>
            <span style={styles.skill}>Minimalist logo designer</span>
            <span style={styles.skill}>Watercolor logo designer</span>
          </div>
        </div>

        {/* My Gigs Section */}
        <div style={styles.gigsSection}>
          <h3 style={styles.sectionTitle}>My Gigs</h3>
          <div style={styles.gigs}>
            <div style={styles.gigCard}>
              <img src="https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/392986211/original/8764ed22054f9867d69c45ed1300e7d2c2d9fc6c.jpg" alt="Gig 1" style={styles.gigImage} />
              <div style={styles.gigDetails}>
                <p style={styles.gigTitle}>I will create unique and eye catching hand drawn logo design</p>
                <div style={styles.gigRating}>⭐ 4.8 (177 reviews)</div>
                <div style={styles.gigPrice}>From ₹914</div>
              </div>
            </div>
            <div style={styles.gigCard}>
              <img src="https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/305728866/original/39b3a86a916a116b6a2b861752d690f86bb7976b.jpg" alt="Gig 2" style={styles.gigImage} />
              <div style={styles.gigDetails}>
                <p style={styles.gigTitle}>I will design modern elegant minimalist business logo design</p>
                <div style={styles.gigRating}>⭐ 5.0 (3 reviews)</div>
                <div style={styles.gigPrice}>From ₹914</div>
              </div>
            </div>
          </div>
        </div>

        {/* Rating Breakdown Section */}
        <div style={styles.ratingBreakdown}>
          <h3 style={styles.sectionTitle}>Rating Breakdown</h3>
          <div style={styles.ratingBars}>
            <div style={styles.ratingBar}>
              <span style={styles.ratingLabel}>5 Stars</span>
              <div style={styles.ratingBarFill(161, 180)}></div>
            </div>
            <div style={styles.ratingBar}>
              <span style={styles.ratingLabel}>4 Stars</span>
              <div style={styles.ratingBarFill(15, 180)}></div>
            </div>
            <div style={styles.ratingBar}>
              <span style={styles.ratingLabel}>3 Stars</span>
              <div style={styles.ratingBarFill(3, 180)}></div>
            </div>
            <div style={styles.ratingBar}>
              <span style={styles.ratingLabel}>2 Stars</span>
              <div style={styles.ratingBarFill(1, 180)}></div>
            </div>
            <div style={styles.ratingBar}>
              <span style={styles.ratingLabel}>1 Star</span>
              <div style={styles.ratingBarFill(0, 180)}></div>
            </div>
          </div>
        </div>

        {/* Search Reviews Section */}
        <div style={styles.reviewSearch}>
          <input 
            type="text" 
            placeholder="Search reviews" 
            value={searchTerm}
            onChange={handleSearch}
            style={styles.searchInput}
          />
          <button style={styles.clearButton}>Clear</button>
        </div>

        {/* Reviews Section */}
        <div style={styles.reviewsSection}>
          {reviews.filter(review => review.review.toLowerCase().includes(searchTerm.toLowerCase())).map((review, index) => (
            <div key={index} style={styles.reviewCard}>
              <div style={styles.reviewHeader}>
                <span style={styles.reviewName}>{review.name}</span>
                <span style={styles.reviewLocation}>{review.location}</span>
              </div>
              <div style={styles.reviewRating}>
                {'⭐'.repeat(review.rating)} ({review.rating})
              </div>
              <p style={styles.reviewText}>{review.review}</p>
              <div style={styles.reviewDetails}>
                <span style={styles.reviewPrice}>{review.price}</span>
                <span style={styles.reviewDuration}>{review.duration}</span>
                <span style={styles.reviewService}>{review.service}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    padding: '20px',
    backgroundColor: '#ffffff',
    minHeight: '100vh',
  },
  profileCard: {
    backgroundColor: '#ffffff',
    width: '60%',
    // boxShadow: '0 0 15px rgba(0, 0, 0, 0.1)',
    // borderRadius: '8px',
    overflow: 'hidden',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
  },
  profileHeader: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
  },
  profileImage: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginRight: '20px',
  },
  profileDetails: {
    display: 'flex',
    flexDirection: 'column',
  },
  profileName: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    margin: '0',
  },
  profileUsername: {
    color: '#888',
    margin: '5px 0',
  },
  rating: {
    display: 'flex',
    alignItems: 'center',
  },
  ratingStars: {
    color: '#f39c12',
  },
  reviews: {
    marginLeft: '5px',
    color: '#888',
  },
  languages: {
    color: '#888',
    marginTop: '10px',
  },
  aboutSection: {
    marginTop: '20px',
  },
  sectionTitle: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  aboutText: {
    fontSize: '1rem',
    color: '#555',
    lineHeight: '1.6',
  },
  skillsSection: {
    marginTop: '20px',
  },
  skills: {
    display: 'flex',
    gap: '10px',
    flexWrap: 'wrap',
  },
  skill: {
    backgroundColor: '#e0e0e0',
    padding: '5px 10px',
    borderRadius: '20px',
    fontSize: '0.9rem',
    color: '#555',
  },
  gigsSection: {
    marginTop: '20px',
  },
  gigs: {
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap',
  },
  gigCard: {
    width: '45%',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    overflow: 'hidden',
    backgroundColor: '#fff',
    padding: '10px',
  },
  gigImage: {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
    borderRadius: '8px',
  },
  gigDetails: {
    paddingTop: '10px',
  },
  gigTitle: {
    fontSize: '1rem',
    fontWeight: 'bold',
    color: '#333',
  },
  gigRating: {
    fontSize: '0.9rem',
    color: '#f39c12',
  },
  gigPrice: {
    fontSize: '1rem',
    color: '#333',
    fontWeight: 'bold',
  },
  ratingBreakdown: {
    marginTop: '20px',
  },
  ratingBars: {
    display: 'flex',
    flexDirection: 'column',
  },
  ratingBar: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
  },
  ratingLabel: {
    fontSize: '1rem',
    color: '#555',
    width: '80px',
  },
  ratingBarFill: (value, total) => ({
    height: '10px',
    backgroundColor: '#4CAF50',
    width: `${(value / total) * 100}%`,
    borderRadius: '5px',
    marginLeft: '10px',
  }),
  reviewSearch: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '20px',
  },
  searchInput: {
    width: '80%',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ddd',
    fontSize: '1rem',
  },
  clearButton: {
    padding: '10px 20px',
    backgroundColor: '#f44336',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  reviewsSection: {
    marginTop: '20px',
  },
  reviewCard: {
    borderBottom: '1px solid #ddd',
    padding: '15px 0',
    marginBottom: '15px',
  },
  reviewHeader: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  reviewName: {
    fontSize: '1rem',
    fontWeight: 'bold',
  },
  reviewLocation: {
    fontSize: '0.9rem',
    color: '#777',
  },
  reviewRating: {
    fontSize: '1rem',
    color: '#f39c12',
  },
  reviewText: {
    fontSize: '1rem',
    color: '#555',
    marginTop: '10px',
  },
  reviewDetails: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '10px',
  },
  reviewPrice: {
    fontSize: '0.9rem',
    color: '#333',
  },
  reviewDuration: {
    fontSize: '0.9rem',
    color: '#333',
  },
  reviewService: {
    fontSize: '0.9rem',
    color: '#333',
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
};

export default ProfilePage;
