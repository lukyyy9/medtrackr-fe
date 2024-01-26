import React, { useEffect, useState } from 'react';
import { generateHeartRate, generateBloodGlucose, generateBodyTemperature, generateBloodPressure } from '../../utils/capteur';

const CapteurComponent = ({ type, sendDataToParent, id }) => {
  const [dataValue, setDataValue] = useState('-');
  const [dangerDetected, setDangerDetected] = useState(false);
  let data=null;
  let data2=null;
  const imageMap = {
    'freqCar': '/img/heart.gif',
    'presArt': '/img/blood.gif',
    'tempCorp': '/img/temperature.gif',
    'glycemie': '/img/glycemia.gif',
    // Add more mappings as needed
  };

  const textMap = {
    'freqCar': 'Fréquence cardiaque',
    'presArt': 'Pression artérielle',
    'tempCorp': 'Température corporelle',
    'glycemie': 'Glycémie',
    // Add more mappings as needed
  };

  const unitMap = {
    'freqCar': ' BPM',
    'presArt': ' mmHg',
    'tempCorp': ' °C',
    'glycemie': ' mg/dL',
    // Add more mappings as needed
  };

  const imageSrc = imageMap[type] || '/img/default.gif';
  const text = textMap[type] || 'Undefined';
  const unit = unitMap[type] || '';

  const generateData = () => {
    if (!dangerDetected) {

      switch (type) {
        case 'freqCar':
          if (data===null){
            data = Math.floor(Math.random() * 41) + 60;
            break;
          }
          else{
            data = Math.random() < 0.01 ? 0 : generateHeartRate(data);
            break;
          }
          case 'presArt':
            if (data === null && data2 === null) {
              data = Math.floor(Math.random() * 31) + 90;
              data2 = Math.floor(Math.random() * 21) + 60;
              break;
            } else {
              if (Math.random() < 0.01) {
                data = 120;
                data2 = 80;
              } else {
                data = generateBloodPressure(data, 'systolic');
                data2 = generateBloodPressure(data2, 'diastolic');
              }
              break;
            }
        case 'tempCorp':
          if (data===null){
            data = (Math.random() * 2) + 36;
            break;
          }
          else{
            data = Math.random() < 0.01 ? 39 : generateBodyTemperature(data);
            break;
          }
        case 'glycemie':
          if (data===null){
            data = Math.floor(Math.random() * 31) + 70;
            break;
          }
          else{
            data = Math.random() < 0.01 ? 400 : generateBloodGlucose(data);
            break;
          }
        default:
          data = 'Undefined';
      }
      if ((type === 'freqCar' && data === 0) || (type === 'tempCorp' && parseFloat(data) === 39) || (type === 'glycemie' && data === 400) || (type === 'presArt' && (data === 120 && data2 === 80))) {
        setDangerDetected(true);
      }
      if (type === 'presArt'){
        sendDataToParent(data + '/' + data2, type , id);
        setDataValue(data + '/' + data2 + unit);
      }
      else{
        sendDataToParent(data, type, id);
        setDataValue(data + unit);
      }
    }
    else{
      if (type === 'presArt'){
        sendDataToParent(120 + '/' + 80, type, id);
        setDataValue(120 + '/' + 80 + unit);
      }
      else{
        switch (type) {
          case 'freqCar':
            data = 0;
            break;
          case 'tempCorp':
            data = 39;
            break;
          case 'glycemie':
            data = 400;
            break;
          default:
            data = 'Undefined';
        }
      }
    }
  };

  useEffect(() => {
    generateData();
    //definition du delai d'actualisation des données du capteur
    const intervalId = setInterval(generateData, 5000);

    return () => clearInterval(intervalId);
  }, [dangerDetected]);

  return (
    <div id="CapteurArray">
      <button id="xButton">x</button>
      <div className="PatientComponentInfos">
        <div id="alertHeader">
          <img src={imageSrc} alt="Photo du patient" className="PatientLittlePhoto" />
          <h2>{text}</h2>
        </div>
      </div>
      <div id="alertBody">{dataValue}</div>
    </div>
  );
};

export default CapteurComponent;
