import React from 'react'
import DateView from 'react-datepicker'
import { Field,ErrorMessage } from 'formik'
import TextError from './TextError'
import "react-datepicker/dist/react-datepicker.css"


function DatePicker(props) {

    const {name , label, ...rest} = props

  return (
    <div  className='m-2 p-2 '>
    <label className='label-form mx-2' htmlFor={name}>{label}</label>
    <Field name={name}>
    {
        ({field, form}) => {
            const {setFieldValue} = form
            const {value} = field
            return <DateView id={name} {...field} {...rest} selected={value} onChange={val=> setFieldValue(name, val)} dateFormat="dd-MM-yyyy" className='form-control' />

        }

    }
    </Field>
    <ErrorMessage name={name} component={TextError} />

    </div>
  )
}

export default DatePicker