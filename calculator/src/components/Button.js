import React from 'react'
import './Button.css'

function Button(props) {    
    const text = props.text;
    const updateValue = props.updateNumber;
    return (
    <div className='number' onClick={() => {updateValue(text)}}>
        {text}
    </div>
  )
}

export default Button
