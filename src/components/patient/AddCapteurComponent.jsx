// AddCapteurComponent.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { addNewCapteur } from '../../routes/patient';

const AddCapteurComponent = () => {
    const navigate = useNavigate();
    const addNewCapteurCall = (type) => {
        let data = {
            sensorName: null,
            sensorThreshold: null,
        };
        switch (type) {
            case 'freqCar':
                data.sensorName = 'freqCar';
                data.sensorThreshold = '0';
                break;
            case 'presArt':
                data.sensorName = 'presArt';
                data.sensorThreshold = '120/80';
                break;
            case 'tempCorp':
                data.sensorName = 'tempCorp';
                data.sensorThreshold = '39';
                break;
            case 'glycemie':
                data.sensorName = 'glycemie';
                data.sensorThreshold = '400';
                break;
            default:
                break;
            }
      addNewCapteur(data).then(response => {
        navigate('/patient');
      });
    };
  
    return (
      <div id="AddCapteurDiv" className="glassFrame">
        <button onClick={() => addNewCapteurCall('freqCar')}>Capteur de fréquence cardiaque</button>
        <button onClick={() => addNewCapteurCall('presArt')}>Capteur de pression artérielle</button>
        <button onClick={() => addNewCapteurCall('tempCorp')}>Capteur de température corporelle</button>
        <button onClick={() => addNewCapteurCall('glycemie')}>Capteur de glycémie</button>
      </div>
    );
  };
  
  export default AddCapteurComponent;