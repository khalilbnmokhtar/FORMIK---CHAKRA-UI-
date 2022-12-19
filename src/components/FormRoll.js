import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormControl from './FormControl'

const SelectcheckBox = [
    {Key : 'Html', value :'Html'},
    {Key : 'Css' , value :'Css'},
    {Key :'JavaScript', value:'JavaScript'}
]

const selectCours = [
    {key : ' select chapitre ', value :''},
    {key : 'chapitre 1', value :'chapitre 1'},
    {key : 'chapitre 2', value :'chapitre 2'},
    {key : 'chapitre 3', value :'chapitre 3'},
]

const initialValues = {
    email : '',
    bio : '',
    cours : '',
    skillset : [],
    coursDate : null,
}

const validationSchema = Yup.object({
    email : Yup.string().email('invalid email ').required('required'),
    bio : Yup.string().required('required'),
    cours: Yup.string().required('required'),
    skillest : Yup.array().required('required'),
    coursDate : Yup.date().required('required').nullable()
})

const onSubmit = values => {
    console.log(values)
}


function FormRoll() {
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {
            formik => {
                return (
                    <div className='container d-flex  align-items-center' style={{ height: '100vh' }} >
                        <Form className='me-auto border border-1 shadow rounded '>
                             <FormControl control='chakraInput' type='email' label='email' name='email' />
                             <FormControl control='ChakraTextarea' label='bio' name='bio' />
                             <FormControl control='select' label="course" name="cours" options={selectCours} />
                             <FormControl control='checkbox' label="skillset : " name="skillset" options={SelectcheckBox} />
                             <FormControl control='date' label ="date of cours :" name='coursDate' />
                             <button type="submit" className="btn btn-outline-success" disabled={!formik.isValid}> send</button>                             
                        </Form>
                     </div>
                )
            }

        }


    </Formik>
  )
}

export default FormRoll