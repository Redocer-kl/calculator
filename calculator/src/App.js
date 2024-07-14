import React, {useState} from 'react';
import './App.css';
import Button  from './components/Button';


function App() {
  let [number, setNumber] = useState("0");
  function updateNumber(value) {
    if (number === "0"){
      setNumber(value)
    }
    else{
      setNumber(number + value);
    }
  }
  return (
      <div>
        <p>{number}</p>
        <Button updateNumber={updateNumber} text = {'1'}/>
      </div>
  );
}

export default App;
