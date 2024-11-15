// Import necessary packages
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  // State to hold the input link
  const [link, setLink] = useState('');
  
  // useNavigate hook for navigation
  const navigate = useNavigate();

  // Function to handle button click
  const handleNavigation = () => {
    if (link) {
      // Navigate to the next page with the link as a query parameter or state
      navigate('/next-page', { state: { link } });
    } else {
      alert('Please enter a link before proceeding.');
    }
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Enter a Link</h1>
      <input
        type="text"
        placeholder="Drop your link here"
        value={link}
        onChange={(e) => setLink(e.target.value)}
        style={{ padding: '10px', width: '80%', marginBottom: '10px' }}
      />
      <br />
      <button onClick={handleNavigation} style={{ padding: '10px 20px' }}>
        Go to Next Page
      </button>
    </div>
  );
};

export default LandingPage;