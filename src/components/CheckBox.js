import React from 'react'
import { ErrorMessage, Field } from 'formik'
import TextError from './TextError'

function CheckBox(props) {

    const { name, label, options, ...rest } = props

    return (

        <div className='m-2 p-2 '>
            <label className='label-form'>{label}</label>
            <Field name={name}  {...rest} >
                {
                    ({ field }) => {
                        return options.map((option, index) => {
                            return (
                                <div className=' form-switch' key={index}>
                                    <input className='form-check-input' type='checkbox' role="switch" id={option.value} {...field} value={option.value} checked={field.value.includes(option.value)} />
                                    <label className='form-check-label ms-2' htmlFor={option.value}> {option.Key} </label>
                                </div >
                            )
                        })
                    }

                }
            </Field>
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}

export default CheckBox