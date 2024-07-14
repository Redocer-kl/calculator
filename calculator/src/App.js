import React, {useState} from 'react';
import './App.css';
import Button  from './components/Button';
import DeleteButton from './components/DeleteButton'

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
  function Delete(){
    if (number.length === 1){
      setNumber('0')
    }
    else{
      setNumber(number.substring(0, number.length - 1))
    }
  }
  return (
      <div>
        <p>{number}</p>
        <tbody>
          <tr>
            <td>
              <Button updateNumber={updateNumber} text = {'1'}/>
            </td>
            <td>
              <Button updateNumber={updateNumber} text = {'2'}/>
            </td>
            <td>
              <Button updateNumber={updateNumber} text = {'3'}/>
            </td>
            <td>
              <DeleteButton Delete={Delete} text = {'3'}/>
            </td>
          </tr>
          <tr>
            <td>
              <Button updateNumber={updateNumber} text = {'4'}/>
            </td>
            <td>
              <Button updateNumber={updateNumber} text = {'5'}/>
            </td>
            <td>
              <Button updateNumber={updateNumber} text = {'6'}/>
            </td>
          </tr>
          <tr>
            <td>
              <Button updateNumber={updateNumber} text = {'7'}/>
            </td>
            <td>
              <Button updateNumber={updateNumber} text = {'8'}/>
            </td>
            <td>
              <Button updateNumber={updateNumber} text = {'9'}/>
            </td>
          </tr>
        </tbody>
      </div>
  );
}

export default App;
