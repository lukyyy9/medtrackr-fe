// AddCapteurComponent.jsx
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { getForms } from '../../routes/patient';
import { getPatientForms } from '../../routes/doctor';
import PatientRecentDataComponent from './PatientRecentDataComponent';

const RecentDataComponent = (patientId) => {
    const [forms, setForms] = useState([]);

    useEffect(() => {
        if (window.location.pathname === '/patient/recentdata') {
        getForms().then(response => {
            setForms(response);
            console.log(response);
        }).catch(error => {
            console.error('Error fetching forms:', error);
        });
    }
    else if (window.location.pathname === '/doctor/patientdetails') {
        getPatientForms(patientId).then(response => {
            setForms(response);
            console.log(response);
        }).catch(error => {
            console.error('Error fetching forms:', error);
        });
    }
    }, []);

    return (
        <div id="RecentDataDiv" className="glassFrame">
            {forms.map((formData, index) => (
                <PatientRecentDataComponent 
                    key={index}
                    formData={formData}
                />
            ))}
        </div>
    );
};

export default RecentDataComponent;
