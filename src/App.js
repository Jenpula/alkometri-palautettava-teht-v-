import { useState } from 'react';
import './App.css';

function App() {
  const [weight, setWeight] = useState(90);
  const [bottles, setBottles] = useState(0);
  const [time, setTime] = useState(0);
  const [gender, setGender] = useState('male');
  const [result, setResult] = useState(0);

// Calculating alcohol level based on gender
const calculate = () => {
  const litres = bottles * 0.33;
  const burning = weight / 10;
  const grams = litres * 8 * 4.5
  const left = grams - (burning * time)
  let alcohol = 0;

  if(gender === 'male') {
    alcohol = left / (weight * 0.7);
  } else {
    alcohol = left / (weight * 0.6);
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
          value={weight}
          onChange={e => setWeight(e.target.value)}></input>
      </div>
      <div>
      <label>Bottles</label>
      <select
        type='number'
        value={bottles}
        onChange={e => setBottles(e.target.value)}>
          <option value='0'>0</option>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
          <option value='6'>6</option>
          <option value='7'>7</option>
          <option value='8'>8</option>
          <option value='9'>9</option>
          <option value='10'>10</option>    
          <option value='11'>11</option>
          <option value='12'>12</option>
          <option value='13'>13</option>
          <option value='14'>14</option>
          <option value='15'>15</option>
          <option value='16'>16</option>
          <option value='17'>17</option>
          <option value='18'>18</option>
          <option value='19'>19</option>
          <option value='20'>20</option>
        </select>
        </div>
        <div>
      <label>Time</label>
        <select
          type='number'
          value={time}
          onChange={e => setTime(e.target.value)}>
            <option value='0'>0</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
            <option value='6'>6</option>
            <option value='7'>7</option>
            <option value='8'>8</option>
            <option value='9'>9</option>
            <option value='10'>10</option>
         </select>
        </div>
        <div>
          <label>Gender</label>
          <input type='radio' name="gender" value='male' defaultChecked onChange={e => setGender(e.target.value)}></input>
          <label>Male</label>
          <input type='radio' name='gender' value='female' onChange={e => setGender(e.target.value)}></input>
          <label>Female</label>
        </div>
        <output>{result.toFixed(1)}</output>
        <div>
        <button type='button' class='btn btn-dark' onClick={calculate}>Calculate</button>
        </div>
        </div>
  );
}
export default App;
