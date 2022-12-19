import React from 'react'

function TextError(props) {
  return (
    <div className='rounded bg-info text-white'>{props.children} </div>
  )
}

export default TextError