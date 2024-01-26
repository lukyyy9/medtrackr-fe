export function generateHeartRate(previousHeartRate) {
    const minChange = -2;
    const maxChange = 2;
  
    // Générer un changement de fréquence cardiaque aléatoire dans les limites définies
    const change = Math.floor(Math.random() * (maxChange - minChange + 1)) + minChange;
    const newHeartRate = previousHeartRate + change;
  
    // Limiter la fréquence cardiaque dans une plage raisonnable (60-100 bpm)
    return Math.min(Math.max(newHeartRate, 60), 100);
  }
  
  

export function generateBloodGlucose(previousBloodGlucose) {
    const minChange = -2;
    const maxChange = 2;
  
    // Générer un changement de taux de glycémie aléatoire dans les limites définies
    const change = Math.floor(Math.random() * (maxChange - minChange + 1)) + minChange;
  
    // Appliquer le changement progressivement au taux de glycémie précédent
    const newBloodGlucose = previousBloodGlucose + change;
  
    // Limiter le taux de glycémie dans une plage raisonnable (70-180 mg/dL)
    return Math.min(Math.max(newBloodGlucose, 70), 180);
  }


  export function generateBodyTemperature(previousBodyTemperature) {
    const minChange = -0.2;
    const maxChange = 0.2;
  
    // Générer un changement de température corporelle aléatoire dans les limites définies
    const change = (Math.random() * (maxChange - minChange)) + minChange;
  
    // Appliquer le changement progressivement à la température corporelle précédente
    let newBodyTemperature = previousBodyTemperature + change;
  
    // Limiter la température corporelle dans une plage raisonnable (36.0-37.5 °C)
    newBodyTemperature = Math.min(Math.max(newBodyTemperature, 36.0), 37.5);

    // Return the result with a maximum of 2 decimal places
    return parseFloat(newBodyTemperature.toFixed(2));
}


// Function to generate blood pressure with changes
export function generateBloodPressure(previousBloodPressure, bpscase) {
  const minChange = -2;
  const maxChange = 2;

  // Generate a random change within the defined limits
  const change = Math.floor(Math.random() * (maxChange - minChange + 1)) + minChange;
  //bpscase définit s'il s'agit de la pression artérielle systolique ou diastolique
  switch (bpscase) {
    case "systolic":
      // Apply the change gradually to the previous systolic blood pressure
      const newSystolicBloodPressure = previousBloodPressure + change;
      // Limit the systolic blood pressure within a reasonable range (90-120 mmHg)
      return Math.min(Math.max(newSystolicBloodPressure, 90), 120);
    case "diastolic":
      // Apply the change gradually to the previous diastolic blood pressure
      const newDiastolicBloodPressure = previousBloodPressure + change;
      // Limit the diastolic blood pressure within a reasonable range (60-80 mmHg)
      return Math.min(Math.max(newDiastolicBloodPressure, 60), 80);
    default:
      return previousBloodPressure;
  }
}
