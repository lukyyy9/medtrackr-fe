// PatientDetailsComponent.jsx
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import { getPatientDetails, getPatientMedications, setNewMedication, removeMedication } from '../../routes/doctor';
import { getAge } from '../../utils/converters';
import RecentDataComponent from '../common/RecentDataComponent';

const PatientDetailsComponent = () => {
    const [patientDetails, setPatientDetails] = useState({
      user: {}
    });
    const [medications, setMedications] = useState([]);
    const [isChecked, setIsChecked] = useState(false);  
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const idFromURL = queryParams.get('id');
  
    const checkboxMappings = {
        paracetamol: "paracetamol",
        ibuprofene: "ibuprofene",
        aspirine: "aspirine",
        acetaminophene: "acetaminophene",
        omeprazole: "omeprazole",
        metformine: "metformine",
    };

    useEffect(() => {
        getPatientDetails(idFromURL).then(response => {
            setPatientDetails(response);
        });
    }, [idFromURL]);

    useEffect(() => {
        getPatientMedications(idFromURL).then(response => {
            setMedications(response);
            console.log("Get Patient medications :",response);
        });
    }, [idFromURL]);

    useEffect(() => {
        medications.forEach(medication => {
            const checkboxId = checkboxMappings[medication.medicationName];
            if (checkboxId) {
                const checkbox = document.getElementById(checkboxId);
                if (checkbox) {
                    checkbox.checked = true;
                }
            }
        });
    }, [medications]);

    const handleCheckboxChange = (event) => {
        if (event.target.checked === true) {
            let medicationData = {
                medication: event.target.value
            };
            try {
                setNewMedication(idFromURL, medicationData);
            } catch (error) {
                error.log("Error adding medication :", error);
            }
        } else {
            let medicationData = {
                medicationName: event.target.value
            };
            try {
                removeMedication(idFromURL, medicationData);
            } catch (error) {
                error.log("Error removing medication :", error);
            }
        }
    };


return (
<div id="PatientDetailsDiv" className="glassFrame">
    <h2>Informations Patient</h2>
    <div id="AllPatientInfos">
        <div id="attribMedicaments"  className="PatientInfoColumn">
            <h3>Informations personnelles</h3>
            <p>Prénom : {patientDetails.user.firstName}</p>
            <p>Nom : {patientDetails.user.lastName}</p>
            <p>Sexe : {
            patientDetails.user.gender === "M" ? 'Homme' :
            patientDetails.user.gender === "F" ? 'Femme' :
            patientDetails.user.gender === "O" ? 'Autre' :
            'N/A'
            }</p>
            <p>Date de naissance : {patientDetails.user.dateOfBirth}</p>
            <p>Âge : {getAge(patientDetails.user.dateOfBirth)}</p>
            <p>E-mail : {patientDetails.user.email}</p>
            <p>Téléphone : {patientDetails.user.phoneNumber}</p>
            <p>Activité physique : {
            patientDetails.physicalActivity === 0 ? 'aucune' :
            patientDetails.physicalActivity === 1 ? 'occasionnelle' :
            patientDetails.physicalActivity === 2 ? 'fréquente' :
            'N/A'
            }</p>
            <p>Pathologie : {patientDetails.principalIllness === null ? 'N/A' : patientDetails.principalIllness}</p>
        </div>
        <div className="PatientInfoColumn">
            <h3>Photo de profil</h3>
            <img src='/img/dummyPfp.jpg' alt="Patient profile picture" id="PatientDetailsPfp"/>
        </div>
        <div id="attribMedicaments"  className="PatientInfoColumn">
            <h3>Formulaire quotidien</h3>
            {/*<RecentDataComponent/>*/}
        </div>
        <div id="attribMedicaments" className="PatientInfoColumn">
            <h3>Attribution des médicaments</h3>
            <div>
            <input onChange={handleCheckboxChange} type="checkbox" id="paracetamol" name="medicaments" value="paracetamol"/>
            <label htmlFor="paracetamol">Paracétamol</label>
            </div>
            <div>
            <input onChange={handleCheckboxChange} type="checkbox" id="ibuprofene" name="medicaments" value="ibuprofene"/>
            <label htmlFor="ibuprofene">Ibuprofène</label>
            </div>
            <div>
            <input onChange={handleCheckboxChange} type="checkbox" id="aspirine" name="medicaments" value="aspirine"/>
            <label htmlFor="aspirine">Aspirine</label>
            </div>
            <div>
            <input onChange={handleCheckboxChange} type="checkbox" id="acetaminophene" name="medicaments" value="acetaminophene"/>
            <label htmlFor="acetaminophene">Acétaminophène</label>
            </div>
            <div>
            <input onChange={handleCheckboxChange} type="checkbox" id="omeprazole" name="medicaments" value="omeprazole"/>
            <label htmlFor="omeprazole">Omeprazole</label>
            </div>
            <div>
            <input onChange={handleCheckboxChange} type="checkbox" id="metformine" name="medicaments" value="metformine"/>
            <label htmlFor="metformine">Metformine</label>
            </div>
        </div>
    </div>
</div>
);
};

export default PatientDetailsComponent;