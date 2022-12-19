import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormControl from './FormControl'

const initialValues ={
    email :'',
    password : '',
    confirmPasword :'',
    contactMode : '',
    phone : '',
}

const validationSchema = Yup.object({
    email : Yup.string().email(' invalid email format ').required('required'),
    password : Yup.string().required('required'),
    confirmPasword : Yup.string().oneOf([Yup.ref('password'),''],'it must be confirm to password').required('required'),
    contactMode : Yup.string().required('required'),
    phone : Yup.number().when('contactMode',{
        is : 'Telephone',
        then : Yup.number().required(' required phone number')
    })
})

const onSubmit = values => {
    console.log(JSON.parse(JSON.stringify(values)))
}
function Register() {

    const SelectOption = [
        { Key : 'Email', value : 'Email'},
        { Key : 'Telephone' , value : 'Telephone' }
    ]


  return (
    <Formik 
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit} 
    >
    {
        formik => {
            return (
                <div className='container d-flex  align-items-center' style={{ height: '100vh' }} >
                <Form className='me-auto border border-1 shadow rounded '>
                 <FormControl control='input' id='email' name='email' label='email' type="email" />
                 <FormControl control='input' id='password' name='password' type="password" label="password" />
                 <FormControl control='input' id='confirmpassword' name='confirmPasword' type="password" label="password" />
                 <FormControl control='radio' label='mode of contact ' name='contactMode' options={SelectOption} />
                 <FormControl control='input' label='phone ' name='phone' id='phone'  />
                 <button type="submit" className="btn btn-outline-success" disabled={!formik.isValid}> se connecter </button>
                 
                 </Form>
                 </div>   
            )
        }
    }


    </Formik>
    )
}

export default Register