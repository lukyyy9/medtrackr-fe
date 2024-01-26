// PatientDashboardComponent.jsx
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CapteurComponent from './CapteurComponent';
import { sendForm, sendCapteursData, getMyCapteurs, getMyMedications } from '../../routes/patient';
import { getMyInfos } from '../../routes/common';
import { toast } from 'react-hot-toast';

const PatientDashboardComponent = () => {

  let indexDataCapteur=0;

  const [infos, setInfos] = useState({
    patientInfos: {}
  });
  const [capteurs, setCapteurs] = useState([]);
  const [medications, setMedications] = useState([]);

  useEffect(() => {
    let cronValue = null;
    getMyInfos().then(response => {
      setInfos(response);
      if (response && response.cron !== undefined) {
        switch (response.cron) {
          case 0:
            cronValue = 60;
            break;
          case 1:
            cronValue = 600;
            break;
          case 2:
            cronValue = 3600;
            break;
          default:
            cronValue = null;
            break;
        }
          const intervalId = setInterval(() => {
                        try {
              let capteursData = JSON.parse(localStorage.getItem('capteursData')) || [];
              toast.promise(
                sendCapteursData(capteursData),
                {
                  loading: 'Sending sensors data...',
                  success: <b>Data saved!</b>,
                  error: <b>Could not save the data.</b>,
                }
              );            
              localStorage.removeItem('capteursData');
            } catch (error) {
              error.log(error);
            }
          }, cronValue * 1000);
          return () => clearInterval(intervalId);
        }
      });
    }, []);
    

  useEffect(() => {
    getMyCapteurs().then(response => {
      setCapteurs(response);
    });
  }, []);

  useEffect(() => {
    getMyMedications().then(response => {
      setMedications(response);
    });
  }, []);

const handleDataFromChild = (data, type, id) => {
  let capteursData = JSON.parse(localStorage.getItem('capteursData')) || [];
  capteursData.push({
    type: type,
    value: data,
    dateTime: new Date().toISOString(),
    sensorId: id
  });
  // Save to localStorage
  localStorage.setItem('capteursData', JSON.stringify(capteursData));
  console.log(localStorage.getItem('capteursData'));
  };

const sendFormCall = () => {
  try {
    const formData = {
      weight: document.getElementById('poids').value === '' ? 0 : document.getElementById('poids').value,
      water: document.getElementById('verresDeau').value === '' ? 0 : document.getElementById('verresDeau').value,
      pain: document.getElementById('douleursRessenties').value,
      mood: document.getElementById('humeur').value,
      apetite: document.getElementById('appetit').value,
      sleep: document.getElementById('sommeil').value,
      alcohol: document.getElementById('alcool').value,
      medication: "",
      other: document.getElementById('autres').value,
    };
    medications.map((medication, index) => {
      if (document.getElementById(`medication-${index}`).checked) {
        formData.medication=formData.medication+medication.medicationName+",";
      }
    });
    if (formData.medication !== "") {
      formData.medication = formData.medication.slice(0, -1);
    }
    sendForm(formData);
    console.log(formData);
    document.getElementById('poids').value = "";
    document.getElementById('douleursRessenties').value = "";
    document.getElementById('verresDeau').value = "";
    document.getElementById('humeur').value = "2";
    document.getElementById('appetit').value = "2";
    document.getElementById('sommeil').value = "2";
    document.getElementById('alcool').value = "0";
    medications.map((medication, index) => {
      document.getElementById(`medication-${index}`).checked = false;
    });
    document.getElementById('autres').value = "";
  }
  catch (error) {
    error.log(error);
  }
};

return (
<div id="PatientDashboardDiv">
  <div id="PatientDashboardForm" className="glassFrame">
    <div id="ProfileHeader">
      <h2>Formulaire</h2>
      <Link to="/patient/recentdata" id="ProfileSaveButton">Historique</Link>
    </div>
    <div id="PatientFormDiv">
      <div id="PatientFormAllInputs">
        <div id="PatientFormTextInputs">
          <input type="number" id="poids" placeholder="Poids" />
          <input type="text" id="douleursRessenties" placeholder="Douleurs ressenties" />
          <input type="number" id="verresDeau" placeholder="Verres d'eau" />
          <h3>Humeur</h3>
          <select id="humeur">
            <option value="2">Bonne</option>
            <option value="1">Neutre</option>
            <option value="0">Mauvaise</option>
          </select>
          <h3>Appétit</h3>
          <select id="appetit">
            <option value="2">Bon</option>
            <option value="1">Normal</option>
            <option value="0">Mauvais</option>
          </select>
          <h3>Qualité du sommeil</h3>
          <select id="sommeil">
            <option value="2">Bonne</option>
            <option value="1">Normale</option>
            <option value="0">Mauvaise</option>
          </select>
          <h3>Consommation d'alcool</h3>
          <select id="alcool">
            <option value="0">Non</option>
            <option value="1">Légère</option>
            <option value="2">Importante</option>
          </select>
        </div>
        <div>
          {medications.length !== 0 && <h3>Médicaments pris :</h3>}
          {medications.map((medication, index) => (
            <div key={index}>
              <input type="checkbox" id={`medication-${index}`} name={`medication-${index}`} />
              <label htmlFor={`medication-${index}`}> {medication.medicationName.charAt(0).toUpperCase() + medication.medicationName.slice(1)}</label>
            </div>
          ))}
          <textarea name="other" id="autres" placeholder='Autres remarques'></textarea>
        </div>
      </div>
      <button onClick={sendFormCall} id="PatientFormButton">Envoyer</button>
    </div>
  </div>
  <div id="DoctorDashboardAlertesRecentes" className="glassFrame">
    <div id="ProfileHeader">
      <h2>Capteurs connectés</h2>
      <Link to="/patient/addcapteur" id="ProfileSaveButton">+ Ajouter</Link>
    </div>
    <div id="PatientDashboardCapteurList">
      {capteurs.map((capteur, index) => (
        <CapteurComponent 
          key={index} 
          type={capteur.sensorName}
          sendDataToParent={handleDataFromChild} 
          capteur={capteur}
          id={capteur.id}
        />
      ))}
    </div>
  </div>
</div>
);
};

export default PatientDashboardComponent;