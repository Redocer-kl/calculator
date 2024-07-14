import React from 'react'
import './Button.css'

function DeleteButton(props) {    
    const updateValue = props.Delete;
    const text = props.text
    return (
    <div className='number' onClick={() => {updateValue()}}>
        {text}
    </div>
  )
}

export default DeleteButton
