import React from 'react';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();
  const backStyle = {
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div id="BackButton" onClick={handleBack}>
      <img style={backStyle} src="\img\back.png" alt="Back Button" id="topLayoutLogo"/>
    </div>
  );
};

export default BackButton;
