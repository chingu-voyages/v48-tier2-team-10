import React, { useState, useEffect } from 'react';

const DinoOfTheDay = () => {
  const [dinoData, setDinoData] = useState(null);

  useEffect(() => {
    fetch('https://chinguapi.onrender.com/dinosaurs');
      .then(response => response.json())
      .then(data => {
        setDinoData(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); 

  return (
    <div>
      <h2>Dino of the Day</h2>
      {dinoData && (
        <div>
          <h3>{dinoData.name}</h3>
          <p>{dinoData.description}</p>
        </div>
      )}
    </div>
  );
};

export default DinoOfTheDay;
