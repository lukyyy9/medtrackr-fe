// PatientAlertComponent.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const PatientAlertComponent = () => {
return (
<div id="PatientAlertComponentDiv">
  <div className="PatientComponentInfos">
  <div id="alertHeader">
    <img src="\img\dummyPfp.jpg" alt="Photo du patient" className="PatientLittlePhoto"/>
      <h2>Larry</h2>
      </div>
      <img src="\img\alert.png" alt="Alert" id="alertIcon"/>
  </div>
  <div id="alertBody">
    Arrêt cardiaque à 00h00
  </div>
</div>
);
};

export default PatientAlertComponent;