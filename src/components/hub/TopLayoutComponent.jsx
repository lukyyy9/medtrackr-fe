// TopLayoutComponent.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import TopLeftButton from './TopLeftButton';
import TopRightMenu from './TopRightMenu';

const TopLayoutComponent = () => {
return (
<div id="topLayoutFrame" className="glassFrame">
  <div className="ProfilePictureButton">
    <TopLeftButton />
    <h1>MedTrackr</h1>
  </div>
  <Routes>
    <Route path="/signup" />
    <Route path="/doctor" element={<TopRightMenu />}/>
    <Route path="/patient" element={<TopRightMenu />}/>
    <Route path="/family" element={<TopRightMenu />}/>
    <Route path="*" />
  </Routes>
</div>
);
};

export default TopLayoutComponent;