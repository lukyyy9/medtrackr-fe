import React from 'react';
import BackButton from './BackButton';
import MedTrackrLogo from './MedTrackrLogo';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const TopLeftButton = () => {
  return (
    <div>
      <Routes>
        <Route path="/signup" element={<BackButton />}/>
        <Route path="/doctor/*" element={<BackButton />}/>
        <Route path="/patient/*" element={<BackButton />}/>
        <Route path="/family/*" element={<BackButton />}/>
        <Route path="/doctor" element={<MedTrackrLogo />}/>
        <Route path="/patient" element={<MedTrackrLogo />}/>
        <Route path="/family" element={<MedTrackrLogo />}/>
        <Route path="*" element={<MedTrackrLogo />}/>
      </Routes>
    </div>
  );
};

export default TopLeftButton;