import React from 'react'
import './Button.css'

function DeleteButton(props) {    
    const updateValue = props.Delete;
    return (
    <div className='number' onClick={() => {updateValue()}}>
        {'⌫'}
    </div>
  )
}

export default DeleteButton
