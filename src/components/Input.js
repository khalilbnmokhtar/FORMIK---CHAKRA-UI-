import React from 'react'
import { Field,ErrorMessage } from 'formik'
import TextError from './TextError'

function Input(props) {
    const { label ,name ,...rest} = props
  return (
    <div className='m-2 p-2'>
        <label className='form-label' htmlFor={name}>{name}</label>
        <Field className='form-control' id={name} name={name} type={name} {...rest} />
        <ErrorMessage name={name} component={TextError}/>
    </div>
  )
}

export default Input