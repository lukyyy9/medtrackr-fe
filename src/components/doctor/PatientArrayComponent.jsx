// PatientArrayComponent.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { getAge } from '../../utils/converters';

const PatientArrayComponent = ({ patient }) => {
  return (
    <div id="PatientArrayComponentDiv">
      <Link to={`/doctor/patientdetails?id=${patient.id}`}>
        <div className="PatientComponentInfos">
          <img src="\img\dummyPfp.jpg" alt="Photo du patient" className="PatientLittlePhoto"/>
          <div id="PatientArrayComponentInfosText">
            <h2>{patient.user.firstName} {patient.user.lastName}</h2>
            <p>{patient.user.dateOfBirth ? `${getAge(patient.user.dateOfBirth)} ans` : 'N/A'} - {patient.principalIllness ? `${patient.principalIllness}` : 'N/A'}</p>
          </div>
        </div>
      </Link>
      <div id="PatientArrayComponentContact">
      <a href={`mailto:${patient.user.email}`}>
        <button>
          <img src="\svg\message.svg" alt="Open conversation" />
          </button>
      </a>
      <a href={`tel:${patient.user.phoneNumber}`}>
        <button>
          <img src="\svg\call.svg" alt="Call" />
        </button>
      </a>
      </div>
    </div>
  );
};

export default PatientArrayComponent;