import {useState} from 'react'
import './App.css';

function App() {

const [Weight, setWeight] = useState(0);
const [Bottles,setBottles] = useState(0);
const [Time, setTime] = useState(0);

function calculate(e) {
  e.prevenDefault();
  const litres = Bottles * 0.33;
  const burning = Weight / 10;

}


  return (
    <div className="App">
      <form onSubmit={calculate}>
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
        <div class='custom-control custom-radio'>
          <label>Gender</label>
          <input type='radio' class="custom-control-input" id="defaultChecked" name="defaultExampleRadios"></input>
          <label class="custom-control-label" for="defaultChecked">Male</label>
          <input type='radio' class="custom-control-input" id="defaultChecked" name="defaultExampleRadios"></input>
          <label class="custom-control-label" for="defaultChecked">Female</label>

        </div>
        <div>
        <button class="btn btn-secondary">Check</button>
          <output></output>
        </div>
        </form>
    </div>
  );
}

export default App;
