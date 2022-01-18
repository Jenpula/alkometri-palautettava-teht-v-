
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Alcometer</h1>
      <div>
        <label>Weight</label>
        <input type='number'></input>
      </div>
      <div>
      <label>Bottles</label>
        <input type='number'></input>
        </div>
        <div>
      <label>Time</label>
        <input type='number'></input>
        </div>
        <div class='custom-control custom-radio'>
          <label>Gender</label>
          <input type='radio' class="custom-control-input" id="defaultChecked" name="defaultExampleRadios"></input>
          <label class="custom-control-label" for="defaultChecked">Male</label>
          <input type='radio' class="custom-control-input" id="defaultChecked" name="defaultExampleRadios"></input>
          <label class="custom-control-label" for="defaultChecked">Female</label>
        </div>
    </div>
  );
}

export default App;
