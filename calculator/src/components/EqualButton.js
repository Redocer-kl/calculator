import React from 'react'
import './Button.css'

function equalButton(props) {    
    const text = props.text;
    const updateValue = props.updateNumber;
    return (
    <div className={"equal"} onClick={() => {updateValue(text)}}>
        {text}
    </div>
  )
}

export default equalButton
