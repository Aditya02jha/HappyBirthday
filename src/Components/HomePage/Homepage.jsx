import React from 'react';
import ImageCard from './ImageCard';
import BirthdayCard from './BirthdayCard';

const Homepage = () => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 9999,
        backgroundColor: '#000000',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: '20px', // Add some padding
        overflow: 'hidden', // Make the screen unscrollable
      }}
    >
      <div
        style={{
          width: '100%', // Set the desired width
          height: '900px', // Set the desired height
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden', // Hide any potential scrollbars
          border: '1px solid #ccc', // Add a border for visual separation
          marginRight: '20px', // Add some margin between the cards
        }}
      >
        <ImageCard />
      </div>
      <div
        style={{
          width: '30%', // Set the desired width
          height: '300px', // Set the desired height
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginRight: '20px', // Add some margin between the cards
        }}
      >
        <BirthdayCard />
      </div>
    </div>
  );
};

export default Homepage;
