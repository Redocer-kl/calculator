import React, {useState} from 'react';
import './App.css';
import Button  from './components/Button';
import DeleteButton from './components/DeleteButton'
import EqualButton from './components/EqualButton'
import { motion } from 'framer-motion';

/* eslint no-eval: 0 */

function App() {
  const [text, setText] = useState("0");
  const [changed, setChanged] = useState(false);
  const [result, setResult] = useState("0");
  const [equel, setEqual] = useState(false);
 

  function checkLength(value, number){
    return value.length > number ? value.substring(value.length - number) : value;
  }

  function evaluateExpression(expression) {
    try {
        // Используем eval для вычисления математического выражения
        setResult(eval(expression));
    } catch (error) {
        return 'Ошибка в выражении';
    }
  }

  function updateNumber(value) {
    if (equel){
      setEqual(false);
      setText(value);
      setChanged(value !== '0');
      evaluateExpression(value);
    }
    else{
      let temp;
      if (!changed){
        temp = text.substring(0, text.length - 1) + value;
        setChanged(true);
      }
      else{
        temp = (text + value);
      }
      setText(temp);
      evaluateExpression(temp);
    }
  }
  

  function Delete(){
    let temp;
    if(('+-*/%'.includes(text.at[-2]) || text.at[-2] === "undefined") && text.at[-1] !== "0"){
      temp = (text.substring(0, text.length - 1) + 0)
      setChanged(false);
    }
    else{
      if (text.length === 1){
        temp = "0";
      }
      else{
        temp = (text.substring(0, text.length - 1))
      }
    }
    setText(temp)
    evaluateExpression(temp)
  }

  function Clear(){
    setEqual(false);
    setChanged(false);
    setText('0');
    setResult('0');
  }

  function Action(value){
    let temp;
    if ('+-*/%'.includes(text.at(-1))){
      temp = (text.substring(0, text.length - 1) + value)
    }
    else{
      if(text === "0" && value === '-'){
        temp = (value);
      }
      else{
        temp = (text + value);
      }
    }
    setText(temp);
    evaluateExpression(temp)
  }

  function equal(){
    setEqual(true);
  }


  return (
      <div className = 'menu'>
        <div className='inner'>
        <div className='text'>
          <div className= {equel ? 'secondText' : ""}>
              {checkLength(text, equal ? 15 : 20)}
          </div>
          <motion.div 
                className= {equel ? "": 'secondText'} 
                key={result} 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5}}
            >
                {checkLength("=" + result, equal ? 20 : 15)}
          </motion.div>
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
