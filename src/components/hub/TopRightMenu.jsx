import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import ProfilePictureButton from './ProfilePictureButton';

const TopRightMenu = () => {
  const navigate = useNavigate();
  const handleNotifications = () => {
    navigate(`${location.pathname}/notifications`);
  };
return (
<div className="TopLayoutRightbuttonComponent">
    <img onClick={handleNotifications} src="\svg\bell.svg" alt="Notification Bell" id="topLayoutNotificationBell" />
    <ProfilePictureButton />
</div>
);
};

export default TopRightMenu;