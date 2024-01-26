// ProfilePictureButton.js
import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ProfilePictureMenu from './ProfilePictureMenu'; // Import the ProfilePictureMenu component

const ProfilePictureButton = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const menuRef = useRef(null);

  const backStyle = {
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  };

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div>
      <img
        style={backStyle}
        src="/img/dummyPfp.jpg"
        alt="Profile Picture"
        id="topLayoutPfp"
        onClick={toggleMenu}
      />

      {/* Conditionally render ProfilePictureMenu based on menuVisible state */}
      {menuVisible && (
        <div ref={menuRef}>
          <ProfilePictureMenu />
        </div>
      )}
    </div>
  );
};

export default ProfilePictureButton;
