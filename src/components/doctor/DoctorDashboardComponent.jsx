// DoctorDashboardComponent.jsx
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SearchComponent from '../common/SearchComponent';
import PatientArrayComponent from './PatientArrayComponent';
import PatientAlertComponent from './PatientAlertComponent';
import { getPatients } from '../../routes/doctor';
import { invitePatient } from '../../utils/invite';
import { getAlerts } from '../../routes/common';

const DoctorDashboardComponent = () => {
  const [patients, setPatients] = useState([]);
  const [filteredPatients, setFilteredPatients] = useState([]);

  useEffect(() => {
    getPatients().then(response => {
      setPatients(response);
      setFilteredPatients(response); // Initialize filteredPatients with all patients
    });
    getAlerts().then(response => {
      console.log(response);
    });
  }, []);

  const handleSearch = (query) => {
    const filtered = patients.filter(patient =>
      patient.user.firstName.toLowerCase().includes(query.toLowerCase()) ||
      patient.user.lastName.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredPatients(filtered); // Update filteredPatients based on the search query
  };

  return (
    <div id="DoctorDashboardDiv">
      <div id="DoctorDashboardPatients" className="glassFrame">
        <div id="DoctorDashboardPatientsHeader">
          <h2>Patients</h2>
          <SearchComponent handleSearch={handleSearch} />
        </div>
        <div id="DoctorDashboardPatientsList">
          {filteredPatients.length > 0 ? (
            filteredPatients.map((patient, index) => (
              <PatientArrayComponent key={index} patient={patient} />
            ))
          ) : (
            <p>No patients found.</p>
      )}
      <br />
      <button onClick={invitePatient}>+ Inviter un patient</button>
    </div>
  </div>
  <div id="DoctorDashboardAlertesRecentes" className="glassFrame">
    <h2>Alertes Récentes</h2>
    <div id="DoctorDashboardAlertsList">
      <PatientAlertComponent />
      <PatientAlertComponent />
      <PatientAlertComponent />
      <PatientAlertComponent />
      <PatientAlertComponent />
      <PatientAlertComponent />
      <PatientAlertComponent />
    </div>
  </div>
</div>
);
};

export default DoctorDashboardComponent;