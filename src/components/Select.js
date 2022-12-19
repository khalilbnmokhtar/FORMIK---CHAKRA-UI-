import React from 'react'
import { Field,ErrorMessage } from 'formik'
import TextError from './TextError'

function Select(props) {
    const { name , label , options , ...rest } = props
  return (
    <div className='m-2 p-2'>
        <label className='form-label' htmlFor={name}>{label}</label>
        <Field as='select' id={name} name={name} className="form-select" {...rest}>
            {
                options.map(Option =>{
                    return (
                        <option key={Option.value} value={Option.value}> {Option.key}</option>
                    )
                })
            }

        </Field>
        <ErrorMessage name={name} component={TextError}/>
    </div>
  )
}

export default Select