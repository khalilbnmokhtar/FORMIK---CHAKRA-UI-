import React from 'react'
import {useFormik} from 'formik'
import * as yup from 'yup'



const initialValues = {
    name : '',
    email :'',
    channel :'',    
}

const onSubmit =  values => {
    console.log( values.name +' || '+values.email+' || '+values.channel)
    
}

const validate =  values => {
    let errors = {}
    if (!values.name)
    {
        errors.name =' name required'
    }else if (!/^[A-z][A-z0-9-_ ]{3,10}$/.test(values.name))
    {
        errors.name = ' invalid name'
    }

    if (!values.email)
    {
        errors.email =' email required'
    }else if (/A[A-Z0-9_!#$%&'*+/=?`{|}~^.-]+@[A-Z0-9.-]+Z/.test(values.email))
    {
        errors.email =' invalid email'
    }

    if (!values.channel)
    {
        errors.channel =' channel required'
    }else if (!/^[A-z][A-z0-9-_ ]{3,10}$/.test(values.channel))
    {
        errors.channel =' invalid channel'
    }
    return errors

}

const validationSchema = yup.object({
    name: yup.string().required(' name is required in there'),
    email: yup.string().email('thers is invalid email ').required(' email is required in there '),
    channel : yup.string().required(' channel is required in there ')

})

function Form() {

    const formik = useFormik({
        initialValues,
        onSubmit,
       // validate, 
        validationSchema,
    })
    
    console.log(formik.errors )


  return (
    <div className='container d-flex align-items-center justify-content-center' style={{height:"100vh"}}>
    <form className='border border-1 rounded shadow w-50' onSubmit={formik.handleSubmit}>

        <div className='m-2 p-2 '>
        <label className='form-label me-2 fw-bold' htmlFor="name">name</label>
        <input type="text" 
        className='form-control' 
        id='name' name='name' 
        value={formik.values.name} 
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        />
        { (formik.errors.name && formik.touched.name  ? <div className='bg-danger text-white rounded'> {formik.errors.name}</div> : null )}
        </div>

        <div className='m-2 p-2 '>
        <label className='form-label me-2 fw-bold' htmlFor="email">email</label>
        <input type="email"
         className='form-control' 
         id='email' name='email' 
         value={formik.values.email} 
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         />
        { (formik.errors.email && formik.touched.email ? <div className='bg-danger text-white rounded'> {formik.errors.email}</div> : null )}
        </div>

        <div className='m-2 p-2 '>
        <label className='form-label me-2 fw-bold' htmlFor="channel">channel</label>
        <input  type="text"
        className='form-control' 
        id='channel' name='channel' 
        value={formik.values.channel} 
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        />
        { (formik.errors.channel && formik.touched.channel ? <div className='bg-danger text-white rounded'> {formik.errors.channel}</div> : null )}
        </div>

        <button className='btn btn-success' type='submit'> submit</button>
    </form>
    </div>
  )
}

export default Form