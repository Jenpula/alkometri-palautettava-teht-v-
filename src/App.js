import {useState} from 'react';
import './App.css';

function App() {

const [Weight, setWeight] = useState(90);
const [Bottles, setBottles] = useState(0);
const [Time, setTime] = useState(0);
const [Gender, setGender] = useState('male');
const [result, setResult] = useState(0);

const calculate = (e) => {
 
  const litres = Bottles * 0.33;
  const burning = Weight / 10;
  const grams = litres * 8 * 4.5
  const left = grams - (burning * Time)

  let alcohol = 0;

  if(Gender === 'male') {
    alcohol = left / (Weight * 0.7);
  } else {
    alcohol = left / (Weight * 0.6);
  }
   if(alcohol < 0 ) {
    setResult(0);
  } else {
    setResult(alcohol);
  }

}
  return (
    <div>
       <h1>Alcometer</h1>
      <div>
        <label>Weight</label>
        <input 
          type='number'
          value={Weight}
          onChange={e => setWeight(e.target.value)}></input>
      </div>
      <div>
      <label>Bottles</label>
        <input
        type='number'
        value={Bottles}
        onChange={e => setBottles(e.target.value)}></input>       
        </div>
        <div>
      <label>Time</label>
        <input
         type='number'
         value={Time}
         onChange={e => setTime(e.target.value)}></input>
        </div>
        <div>
          <label>Gender</label>
          <input type='radio' name="Gender" value='male' onChange={e => setGender(e.target.value)}></input>
          <label>Male</label>
          <input type='radio' name='Gender' value='female' onChange={e => setGender(e.target.value)}></input>
          <label>Female</label>
        </div>
        <output>{result.toFixed(2)}</output>
        <div>
        <button type='button' onClick={calculate}>calculate</button>
        </div>
    </div>
  );
}

export default App;
