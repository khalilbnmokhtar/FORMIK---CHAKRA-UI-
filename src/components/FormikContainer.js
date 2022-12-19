import React from 'react'
import { Formik, Form} from 'formik'
import * as Yup from 'yup'
import FormControl from './FormControl'

const initialValues = {
    email : '',
    description :'',
    selectOption : '',
    SelectRadio :'',
    SelectCheckBox :[],
    TheDate : null
}
const validationSchema = Yup.object({
    email : Yup.string().email('not a valid email plz check that').required('email is required there'),
    description : Yup.string().required(' your description is required there '),
    selectOption : Yup.string().required(' your choice is required there '),
    SelectRadio : Yup.string().required('choice your option there plz '),
    SelectCheckBox : Yup.array().required(' check your choices in there '),
    TheDate : Yup.date().required(' select your date in there ').nullable()
})
const onSubmit = values => {console.log( values)
     console.log('saved data ', JSON.parse(JSON.stringify(values)))}

function FormikContainer() {

    const DropDownOption = [
        {key :' select an option ', value:''},
        {key :' option 1', value: 'option 1'},
        {key :' option 2', value: 'option 2'},
        {key :' option 3', value: 'option 3'},
    ]

    const OptionRadioItems = [
        { Key : 'option 1', value :'option 1'},
        { Key : 'option 2', value :'option 2'},
        { Key : 'option 3', value :'option 3'}
    ]

    const OptionCeckBoxItems = [
        { Key : 'option 1', value :'option 1'},
        { Key : 'option 2', value :'option 2'},
        { Key : 'option 3', value :'option 3'}
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
            <div className='container d-flex justify-content-center align-items-center' style={{height:'150vh'}}>
            <Form className='me-auto border border-1 shadow rounded '>
                <FormControl control='input' type='email' label='email' name='email' />
                <FormControl control='textarea' label='description' name='description' />
                <FormControl control='select' label="select your choice" name="selectOption" options={DropDownOption} />
                <FormControl control='radio' label="select your item : " name="SelectRadio" options={OptionRadioItems} />
                <FormControl control='checkbox' label="select your choices : " name="SelectCheckBox" options={OptionCeckBoxItems} />
                <FormControl control='date' label ="select the date :" name='TheDate' />
                <button type="submit" className="btn btn-outline-success"> submit</button>
            </Form>
            </div>
        )
     }
}

    </Formik>
  )
}

export default FormikContainer