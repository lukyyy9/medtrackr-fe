// FamilleProfilComponent.jsx

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { getMyInfos, setMyInfos } from '../../routes/common';

const FamilleProfilComponent = () => {
        
    const [infos, setInfos] = useState({
        user: {},
        patient: {
            user: {}
        }
    });

    useEffect(() => {
        getMyInfos().then(response => {
            setInfos(response);
        });
    }, []);

    const [selectedImage, setSelectedImage] = useState('/img/dummyPfp.jpg');
    const handleImageChange = (e) => {
            const file = e.target.files[0];
            const reader = new FileReader();

            reader.onloadend = () => {
            setSelectedImage(reader.result);
        };

        if (file) {
            reader.readAsDataURL(file);
        } else {
            setSelectedImage('');
        }
    };

    const setMyInfosCall = async () => {
        try {
        const userData = {
            lastName: document.getElementById('nom').value,
            firstName: document.getElementById('prenom').value,
            gender: document.getElementById('sexe').value,
            dateOfBirth: document.getElementById('dateDeNaissance').value,
            email: document.getElementById('email').value,
            phoneNumber: document.getElementById('telephone').value,
            profilePicture: '',
        };
        setMyInfos(userData);
        }
        catch (error) {
            error.log(error);
        }
    };

    return (
        <div id="ProfileDiv" className="glassFrame">
            <div>
                <div id="ProfileHeader">
                    <h2>Profil</h2>
                    <button onClick={setMyInfosCall} id="ProfileSaveButton">Sauvegarder</button>
                </div>
                <div id="AllPatientInfos">
                    <div className="PatientInfoColumn">
                    <h3>Informations personnelles</h3>
                        <input id="nom" name="Last Name" placeholder="Nom" type="text"
                            defaultValue={infos.user.lastName} />
                        <input id="prenom" name="First Name" placeholder="Prénom" type="text"
                            defaultValue={infos.user.firstName} />
                        <select value={infos.user.gender} id="sexe" name="Gender" onChange={(e) => {
                            const selectedGender = e.target.value;
                            setInfos(prevInfos => ({
                                ...prevInfos,
                                user: {
                                            ...prevInfos.user,
                                            gender: selectedGender
                                        }
                                    }));
                                }}>
                                <option value="M">Homme</option>
                                <option value="F">Femme</option>
                                <option value="O">Autre</option>
                            </select>
                        <input defaultValue={infos.user.dateOfBirth} id="dateDeNaissance" name="Date of Birth" placeholder="Date de naissance" type="date" />
                        <input id="email" name="Email Adress" placeholder="E-mail" type="text"
                            defaultValue={infos.user.email} />
                        <input id="telephone" name="Phone number" placeholder="Téléphone" type="text"
                            defaultValue={infos.user.phoneNumber} />
                    </div>
                    <div className="PatientInfoColumn">
                        <h3>Photo de profil</h3>
                        <img src={selectedImage} alt="Patient profile picture" id="PatientDetailsPfp" />
                        <input type="file" id="hiddenFileInput" onChange={handleImageChange} style={{display: 'none'}} />
                        <button id="ProfilePfpButton" onClick={()=> document.getElementById('hiddenFileInput').click()}>Change
                            Picture</button>
                    </div>
                    <div className="PatientInfoColumn">
                    <h3>Information sur le proche</h3>
                    {infos.patient && infos.patient.user && (
                        <>
                        <p id="docLastName">{infos.patient.user.lastName}</p>
                        <p id="docFirstName">{infos.patient.user.firstName}</p>
                        <p id="docEmail">{infos.patient.user.email}</p>
                        <p className="relationInfo" id="docPhone">{infos.patient.user.phoneNumber}</p>
                        </>
                    )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FamilleProfilComponent;