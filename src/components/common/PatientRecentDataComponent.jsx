// PatientRecentDataComponent.jsx
import React from 'react';

const PatientRecentDataComponent = ({ formData, index }) => {
return (
<div id="RecentDataArray">
    <h3>{new Date(formData.completionDate).toLocaleDateString('fr-FR')}</h3>
    <p>Poids : {formData.weight}kg</p>
    <p>Douleurs ressenties : {formData.pain}</p>
    <p>Nb. de verres d'eau : {formData.water}</p>
    <p>Humeur : {formData.mood === 0 ? 'mauvaise' : formData.mood === 1 ? 'neutre' : 'bonne'}</p>
    <p>Appétit : {formData.apetite === 0 ? 'mauvais' : formData.apetite === 1 ? 'neutre' : 'bon'}</p>
    <p>Consommation d'alcool : {formData.alcohol === 0 ? 'aucune' : formData.alcohol === 1 ? 'faible' : 'importante'}</p>
    <p>Médicaments pris : {formData.medication === "" ? 'Aucun' : formData.medication}</p>
    <p>Informations supplémentaires : {formData.other}</p>
</div>
);
};

export default PatientRecentDataComponent;