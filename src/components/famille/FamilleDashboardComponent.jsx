// FamilleDashboardComponent.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import RecentDataComponent from '../common/PatientRecentDataComponent';

const FamilleDashboardComponent = () => {
return (
<div id="PatientDashboardDiv">
  <div id="PatientDashboardForm" className="glassFrame">
    <h2>Dernières données</h2>
  </div>
  <div id="PatientDashboardRecentElement" className="glassFrame">
    <h2>Données récemment envoyées</h2>
    <div id="FamilyDashboardRecentElementList">
    </div>
  </div>
</div>
);
};

export default FamilleDashboardComponent;