import React from 'react'


function Button(props) {    
    const text = props.text;
    const updateValue = props.updateNumber;
    return (
    <div onClick={() => {updateValue(text)}}>
        add {text}
    </div>
  )
}

export default Button
