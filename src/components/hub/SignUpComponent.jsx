// SignUpComponent.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { signUp } from '../../routes/auth';

const SignUpComponent = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const emailFromURL = queryParams.get('invite');

  const [isPatientChecked, setIsPatientChecked] = useState(true);

  const handleRadioChange = (event) => {
    setIsPatientChecked(event.target.value === 'Patient');
  };

  const signUpCall = async () => {
    try {
      const userData = {
        email: document.getElementById('signUpEMail').value,
        password: document.getElementById('signUpPassword').value,
        firstName: document.getElementById('signUpPrenom').value,
        lastName: document.getElementById('signUpNomDeFamille').value,
        phoneNumber: document.getElementById('signUpTelephone').value,
        role: document.querySelector('input[name="role"]:checked').value,
        relativeEmail: isPatientChecked ? document.getElementById('signUpEMailFamily').value : '',
        doctorEmail: isPatientChecked ? document.getElementById('signUpEMailDoctor').value : ''
      };

      const response = await signUp(userData);

      if (response === 'Medecin') {
        navigate('/doctor');
      } else if (response === 'Patient') {
        navigate('/patient');
      } else if (response === 'Proche') {
        navigate('/family');
      }
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  useEffect(() => {
    if (emailFromURL) {
      document.getElementById('signUpEMailDoctor').value = decodeURIComponent(emailFromURL);
    }
  }, [emailFromURL]);

  return (
    <div id="signUpFrame" className="glassFrame">
      <h1>Inscription</h1>
      <div id="SignUpDiv">
        <div id="SignupTextInputs">
          <input placeholder="E-mail" type="text" id="signUpEMail" />
          <input placeholder="Mot de passe" type="password" id="signUpPassword" />
          <input placeholder="Prénom" type="text" id="signUpPrenom" />
          <input placeholder="Nom de famille" type="text" id="signUpNomDeFamille" />
          <input placeholder="Téléphone" type="text" id="signUpTelephone" />
        </div>
        {isPatientChecked && (
          <div id="SignupTextInputs">
            <input placeholder="E-mail du médecin" type="text" id="signUpEMailDoctor" />
            <input placeholder="E-mail du proche" type="text" id="signUpEMailFamily" />
          </div>
        )}
        <div id="signUpRadios">
          <h2>Je suis :</h2>
          <div>
            <input type="radio" id="patient" name="role" value="Patient" onChange={handleRadioChange} defaultChecked />
            <label htmlFor="patient">Un patient</label>
          </div>
          <div>
            <input type="radio" id="proche" name="role" value="Proche" onChange={handleRadioChange} />
            <label htmlFor="proche">Un proche</label>
          </div>
          <div>
            <input type="radio" id="medecin" name="role" value="Medecin" onChange={handleRadioChange} />
            <label htmlFor="medecin">Un médecin</label>
          </div>
        </div>
      </div>
      <button id="signUpButton" onClick={signUpCall}>Je m'inscris</button>
    </div>
  );
};

export default SignUpComponent;
