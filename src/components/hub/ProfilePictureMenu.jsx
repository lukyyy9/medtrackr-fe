// ProfilePictureMenu.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { logOut } from '../../routes/auth';

const ProfilePictureMenu = () => {
  const navigate = useNavigate();
  const handleProfile = () => {
    navigate(`${location.pathname}/profile`);
  };

  const logOutCall = () => {
    logOut();
    navigate('/');
  };

  return (
    <div id="ProfilePictureMenuDiv">
      <button onClick={handleProfile} id="ProfilePictureMenuProfileButton">Profil</button>
      <Link to="/">
        <button onClick={logOutCall} id="ProfilePictureMenuDisconnectButton">Déconnexion</button>
      </Link>
    </div>
  );
};

export default ProfilePictureMenu;
