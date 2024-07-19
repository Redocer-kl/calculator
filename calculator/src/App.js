import React, {useState} from 'react';
import './App.css';
import Button  from './components/Button';
import DeleteButton from './components/DeleteButton'
import EqualButton from './components/EqualButton'

function App() {
  const [number, setNumber] = useState("0");
  const [result, setResult] = useState("0");
  const [secondNumber, setSecondNumber] = useState("0");
  const [point, setPoint] = useState(true);
  const [action, setAction] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
    


  function updateNumber(value) {
    let temp;
    setErrorMessage('')
    if (value === '.'){
      if (point){
        temp = number + value;
        setPoint(false);
      }
    }
    else{
      if (number === '0' || number === '-0'){
        temp = number.includes('-')? "-" + value : value;
      }
      else{
        temp = number + value;
      }
    }
    setNumber(temp);
    setResult(secondNumber !== "0" ? temp + " " + action + " " + secondNumber : temp);

  }
  

  function Delete(){
    let temp;
    if (number.length === 1){
      temp = '0';
    }
    else{
      if (number[number.length - 1] === ','){
        setPoint(true);
      }
      temp = number.substring(0, number.length - 1);
    }
    setNumber(temp);
    setResult(secondNumber !== "0" ? temp + " " + action + " " + secondNumber : temp);
  }

  function Clear(){
    setResult("0");
    setNumber('0');
    setSecondNumber('0');
    setPoint(true);
    setAction("")
    setErrorMessage("");
  }

  function Action(text){
    let temp;
    if (text === '-' && (number === '0' || number === '-0')){
      temp = (number.includes('-')? number.substring(1) : '-' + number)
      setNumber(temp);
    } else{
      if (action === ''){
        setAction(text);
        setSecondNumber(number);
        setNumber('0');
      }
      else{
        setAction(text);
      }
    }
    if ((number === '0' || number !== '-0') && text === "-"){
      setResult(temp);
    }
    else if(action !== ''){
      setResult(number + " " + text + " " + secondNumber)
    }
    else{
      setResult(0 + " " + text + " " + number);
    }
  }

  function equal(){
    let temp;
    switch(action){
      case '+':
        temp = (parseFloat(number) + parseFloat(secondNumber)).toString();
        break;
      case '-':
        temp = (parseFloat(secondNumber) - parseFloat(number)).toString();
        break;
      case '*':
        temp = (parseFloat(number) * parseFloat(secondNumber)).toString();
        break;
      case '/':
        if(number === '0'){
        setErrorMessage('!Деление на ноль')
        return "";
        }
        else{
          temp = ((parseFloat(secondNumber) / parseFloat(number)).toString())
        }
        break;
      case '%':
        if(secondNumber === '0'){
          setErrorMessage('Деление на ноль!')
          return "";
          }
        else{
          temp = ((parseFloat(secondNumber) % parseFloat(number)).toString())
        }
        break;
      default:
        break;
    }
    setSecondNumber(temp);
    setResult(temp + " = " + number + " " + action + " " + secondNumber);
  }


  return (
      <div className = 'menu'>
        <div className='inner'>
        <div className='text'>
          <div className='secondText'> {result} </div>
          <div> {errorMessage ? errorMessage : number}</div>
        </div>
          <tbody>
            <tr>
              <td>
                <DeleteButton Delete={Delete} text = 'D'/>
              </td>

              <td>
                <DeleteButton Delete={Clear} text = {'C'}/>
              </td>
              <td>
                <Button  updateNumber={Action} text = {'%'}/>
              </td>
              <td>
                <Button updateNumber={Action} text = {'/'}/>
              </td>
            </tr>
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
                <Button updateNumber={Action} text = {'+'}/>
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
              <td>
                <Button updateNumber={Action} text = {'-'}/>
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
              <td>
                <Button updateNumber={Action} text = {'*'}/>
              </td>
            </tr>
          </tbody>
          <tfoot> 
            <tr>
              <td>
                <Button updateNumber={updateNumber} text = {'0'}/>
              </td>
              <td>
                <Button updateNumber={updateNumber} text = {'.'}/>
              </td>
              <td colspan="2">
                <EqualButton updateNumber={equal} text = {'='}/>
              </td>
            </tr>
          </tfoot>
           
        </div>
      </div>
  );
}

export default App;
