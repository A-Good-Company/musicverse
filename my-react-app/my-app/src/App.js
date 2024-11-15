import React, { useState } from 'react';
import './App.css';

function App() {
  const [youtubeLink, setYoutubeLink] = useState ('');
  const [components, setComponents] = useState([]);

  const handleInputChange = (e) => {
    setYoutubeLink(e.target.value);
  };

  const handleButtonClick = () => {
    setComponents([
      'Intro',
      'Verse 1',
      'Chorus',
      'Verse 2',
      'Bridge',
      'Chorus',
      'Outro'
    ]);
  };

  const extractVideoID = (url) => {
    const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  return(
    <div className ="App">
      <h1>Music Component Analyzer</h1>
      <input
        type="text"
        placeholder="Drop the beat"
        value={youtubeLink}
        onChange={handleInputChange}
    />
    <button onClick={handleButtonClick}>Analyze Music</button>

    {youtubeLink &&(
      <div className="video-container">
        <iframe
          width="560"
          height="315"
          src={'https://www.youtube.com/embed/${extractVideoID(youtubeLink)}'}
          title="Youtube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    )}

    {components.length > 0 && (
      <div className="components-list">
        <h2>Music yo</h2>
        <ul>
          {components.map((component, index) => (
            <li key={index}>{component}</li>
          ))}
        </ul>
      </div>
    )}

    </div>
   );
}

export default App;
