import React, {useState} from 'react';
import './App.css';
import Button  from './components/Button';
import DeleteButton from './components/DeleteButton'
import EqualButton from './components/EqualButton'

function App() {
  const [number, setNumber] = useState("0");
  const [secondNumber, setSecondNumber] = useState("0");
  const [point, setPoint] = useState(true);
  const [action, setAction] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
    


  function updateNumber(value) {
    setErrorMessage('')
    if (value === '.'){
      if (point){
        setNumber(number + value);
        setPoint(false);
      }
    }
    else{
      if (number === '0'){
        setNumber(value);
      }
      else{
        setNumber(number + value);
      }
    }
    
  }
  

  function Delete(){
    if (number.length === 1){
      setNumber('0');
    }
    else{
      if (number[number.length - 1] === ','){
        setPoint(true);
      }
      setNumber(number.substring(0, number.length - 1));
    }
  }

  function Clear(){
    setNumber('0');
    setSecondNumber('0');
    setPoint(true);
  }

  function Action(text){
    if (action === ''){
      setAction(text);
      setSecondNumber(number);
      setNumber('0');
    }
    else{
      equal();
      setAction(text);
      setSecondNumber(number);
      setNumber('0');
    }
  }

  function equal(){
    switch(action){
      case '+':
        setNumber((parseFloat(number) + parseFloat(secondNumber)).toString());
        break;
      case '-':
        setNumber(( parseFloat(secondNumber) - parseFloat(number)).toString());
        break;
      case '*':
        setNumber((parseFloat(number) * parseFloat(secondNumber)).toString())
        break;
      case '/':
        if(number === '0'){
        setErrorMessage('Деление на ноль!')
        }
        else{
          setNumber((parseFloat(secondNumber) / parseFloat(number)).toString())
        }
        break;
      case '%':
        if(secondNumber === '0'){
          setErrorMessage('Деление на ноль!')
          }
        else{
          setNumber((parseFloat(secondNumber) % parseFloat(number)).toString())
        }
        break;
      default:
        break;
    }

  }


  return (
      <div className = 'menu'>
        <div className='inner'>
        <div className='text'> {errorMessage ? errorMessage : number}</div>
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
