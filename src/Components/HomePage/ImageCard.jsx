import React from 'react';
import goodVideo from '../../Resources/shimpiVideo.mp4';

const ImageCard = () => {
  return (
    <div className="relative w-full h-full overflow-hidden"> {/* Adjust the width and height as desired */}
      <video
        src={goodVideo}
        autoPlay
        loop
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
};

export default ImageCard;
