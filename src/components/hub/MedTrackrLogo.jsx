import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const BackButton = () => {
  const backStyle = {
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  };

  return (
    <div>
      <img src='/img/MedTrackrRounded.png' alt="MedTrackr Logo" id="topLayoutLogo"/>
    </div>
  );
};

export default BackButton;
