import { ErrorMessage, Field } from 'formik'
import React, { Fragment } from 'react'
import TextError from './TextError'

function Radio(props) {
    const {name, label, options, ...rest} = props

    return (
    <div  className='m-2 p-2 '>
        <label className='label-form mx-2'>{label}</label>
        <Field  name={name}  {...rest} >
            {
                    
                    ({field}) =>{

                        return   options.map((option,index)=>{
                           
                            return (
                                        <Fragment key={index}>
                                            <input className='form-check-input' type='radio' id={option.value} {...field} value={option.value} checked={field.value === option.value}/>
                                            <label className='form-check-label mx-2 ' htmlFor={option.value}> {option.Key} </label>
                                        </Fragment >
                            )
                        })
                    }
                 

            }


        </Field>
        <ErrorMessage name={name} component={TextError} />

    </div>
  )
}

export default Radio