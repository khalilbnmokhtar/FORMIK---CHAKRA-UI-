import React from 'react'
import { Field,ErrorMessage } from 'formik'
import TextError from './TextError'

function Textarea(props) {
    const { label ,name ,...rest} = props
  return (
    <div className='m-2 p-2'>
        <label className='form-label' htmlFor={name}>{name}</label>
        <Field  as='textarea' className='form-control' id={name} name={name} {...rest} />
        <ErrorMessage name={name} component={TextError}/>
    </div>
  )
  }
export default Textarea