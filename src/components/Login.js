import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormControl from './FormControl'


const initialValues = {
    email : '',
    password : ''
}

const validationSchema = Yup.object({
    email: Yup.string().email('check you are making a write email there').required(' your email is required'),
    password: Yup.string().required('your password is required plz ')
})

const onSubmit = values => {
    console.log(JSON.parse(JSON.stringify(values)))
}

function Login() {
   

    return (
        <Formik initialValues={initialValues} 
        validationSchema={validationSchema} 
        onSubmit={onSubmit}
        validateOnChange={false}>
            {
                formik => {
                    return (
                        <div className='container d-flex  align-items-center' style={{ height: '100vh' }} >
                            <Form className='me-auto border border-1 shadow rounded '>
                           
                                <FormControl control='input' type='email' label='email' name='email' />
                                <FormControl control='input' type='password' label='password' name='password' />

                                <button type="submit" className="btn btn-outline-success" disabled={!formik.isValid}> se connecter </button>

                            </Form>
                        </div>

                    )
                }
            }
        </Formik>
    )
}

export default Login