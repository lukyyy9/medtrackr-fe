// App.jsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import LoginComponent from './components/hub/LoginComponent';
import SignUpComponent from './components/hub/SignUpComponent';
import TopLayoutComponent from './components/hub/TopLayoutComponent';
import DoctorDashboardComponent from './components/doctor/DoctorDashboardComponent';
import PatientDetailsComponent from './components/doctor/PatientDetailsComponent';
import PatientDashboardComponent from './components/patient/PatientDashboardComponent';
import FamilleDashboardComponent from './components/famille/FamilleDashboardComponent';
import DoctorProfilComponent from './components/doctor/DoctorProfilComponent';
import PatientProfilComponent from './components/patient/PatientProfilComponent';
import FamilleProfilComponent from './components/famille/FamilleProfilComponent';
import NotificationsComponent from './components/hub/NotificationsComponent';
import AddCapteurComponent from './components/patient/AddCapteurComponent';
import RecentDataComponent from './components/common/RecentDataComponent';

const App = () => {
  const currentProtocol = window.location.protocol;
  console.log(currentProtocol + '//' + import.meta.env.VITE_BE_HOST)

return (
  <Router>
    <div><Toaster/></div>
    <div>
      <TopLayoutComponent/>
      <div id="rootDiv">
        <Routes>
          <Route path="/" element={<LoginComponent/>}/>
          <Route path="/signup" element={<SignUpComponent />} />
          <Route path="/doctor" element={<DoctorDashboardComponent/>}/>
          <Route path="/doctor/patientdetails" element={<PatientDetailsComponent/>}/>
          <Route path="/doctor/patientdetails/recentdata" element={<RecentDataComponent/>}/>
          <Route path="/doctor/profile" element={<DoctorProfilComponent/>}/>
          <Route path="/doctor/notifications" element={<NotificationsComponent/>}/>
          <Route path="/patient" element={<PatientDashboardComponent/>}/>
          <Route path="/patient/recentdata" element={<RecentDataComponent/>}/>
          <Route path="/patient/addcapteur" element={<AddCapteurComponent/>}/>
          <Route path="/patient/profile" element={<PatientProfilComponent/>}/>
          <Route path="/patient/notifications" element={<NotificationsComponent/>}/>
          <Route path="/family" element={<FamilleDashboardComponent/>}/>
          <Route path="/family/profile" element={<FamilleProfilComponent/>}/>
          <Route path="/family/notifications" element={<NotificationsComponent/>}/>
        </Routes>
      </div>
    </div>
  </Router>
);
};

export default App;