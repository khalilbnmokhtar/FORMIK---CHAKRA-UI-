import React,{useState} from 'react'
import {Formik,Form,Field,ErrorMessage, FieldArray, FastField} from 'formik'
import * as yup from 'yup'
import TextError from './TextError'



const initialValues = {
    name : '',
    email :'',
    channel :'', 
    comments :'',
    adresse :'',
    social : {
        facebook : '',
        twitter :'',
    },  
    phone : ['',''],
    phoneNum : [''],
}


const savedData = {
    name : 'khalil ',
    email :'khalil@exemple.om',
    channel :'khalil channel', 
    comments :' welcom to khalil channel',
    adresse :' tunis, tunisia ',
    social : {
        facebook : '',
        twitter :'',
    },  
    phone : ['',''],
    phoneNum : [''],
}

const onSubmit =  (values, onSubmitProps) => {
    console.log( values)
   
    onSubmitProps.setSubmitting(false)

   
    
}



const validationSchema = yup.object({
    name: yup.string().required(' name is required in there'),
    email: yup.string().email('thers is invalid email ').required(' email is required in there '),
    channel : yup.string().required(' channel is required in there '),
    comments : yup.string().required(' comments is required plz'),
    adresse : yup.string().required(' adresse is required plz'),
   

})

function NewForm() {

    const [initData, setinitData] = useState(null)

  return (
    <div className='container d-flex align-items-center justify-content-center' style={{height:"150vh"}}>
    <Formik 
     initialValues={initData || initialValues}
     validationSchema={validationSchema}
     onSubmit={onSubmit}
     validateOnChange={false}
     enableReinitialize
    
     >
    {
        formik => {
           
            return(
                <Form className='border border-1 rounded shadow w-50' >

        <div className='m-2 p-2 '>
        <label className='form-label me-2 fw-bold' htmlFor="name">name</label>
        <Field type="text" 
        className='form-control' 
        id='name' name='name' 
        />
        <ErrorMessage name="name" component={TextError} />
        </div>

        <div className='m-2 p-2 '>
        <label className='form-label me-2 fw-bold' htmlFor="email">email</label>
        <Field type="email"
         className='form-control' 
         id='email' name='email' 
         />
        <ErrorMessage name='email' component={TextError} />
        </div>

        <div className='m-2 p-2 '>
        <label className='form-label me-2 fw-bold' htmlFor="channel">channel</label>
        <Field  type="text"
        className='form-control' 
        id='channel' name='channel' 
        />
        <ErrorMessage name='channel' component={TextError}/>
        </div>

        <div className='m-2 p-2 '>
        <label className='form-label me-2 fw-bold' htmlFor="channel">comments</label>
        <Field  type="text" as='textarea'
        className='form-control' 
        id='comments' name='comments' 
        />
        <ErrorMessage name='comments' component={TextError}/>
        </div>

        <div className='m-2 p-2 '>
        <label className='form-label me-2 fw-bold' htmlFor='adresse'>adresse</label>
        <FastField name="adresse">
            {
                (props)=>{
                    
                   const {field, meta} = props
                    return( 
                   <div> 
                    <input type="text" id="adresse" className='form-control' {...field} />
                    { meta.touched && meta.error ? <div className='bg-info rounded text-white'>{meta.error}</div> : null }    
                   </div>
                    )}
            }
        </FastField>
      
        </div>

        <div className='m-2 p-2 '>
            <label className='form-label me-2 fw-bold' htmlFor='facebook'> facebook </label>
            <Field type="text" id="facebook" name="social.facebook" className='form-control'/>
           
        </div> 

        <div className='m-2 p-2 '>
            <label className='form-label me-2 fw-bold' htmlFor='twitter'> twitter </label>
            <Field type="text" id="twitter" name="social.twitter" className='form-control' />
          

        </div> 


        <div className='m-2 p-2 '>
            <label className='form-label me-2 fw-bold' htmlFor='primaryPhone'> primaryPhone </label>
            <Field type="text" id="primaryPhone" name="phone[0]" className='form-control'/>
           
        </div> 

        <div className='m-2 p-2 '>
            <label className='form-label me-2 fw-bold' htmlFor='secondaryPhone'> secondaryPhone </label>
            <Field type="text" id="secondaryPhone" name="phone[1]" className='form-control'/>
           
        </div>
        <div className='m-2 p-2 '>
            <label className='form-label me-2 fw-bold' htmlFor='phoneNum'> liste of phone numbers</label>
            <FieldArray name="phoneNum">
                {
                    (FieldArrayProps) => {
                        
                        const {push, remove, form} = FieldArrayProps
                        const {values} = form
                        const {phoneNum} = values
                        return(
                            <div>
                        {phoneNum.map((num, index)=>(
                            <div key={index} className="d-flex flex-row my-1">
                                <Field name={`phoneNum[${index}]`} className="form-control"/>
                                <button className='btn btn-outline-success p-2' onClick={()=>push('')}> + </button>
                                { index > 0 &&   <button className='btn btn-outline-success p-2' onClick={()=>remove(index)}> - </button>}
                               
                            </div>
                        ))}
                        </div>
                        )
                    }
                }

            </FieldArray>
        </div>


        <button className='btn btn-outline-primary' type='button' onClick={()=>setinitData(savedData)}>load saved data submit</button>
        <button className='btn btn-success' type='submit' disabled={(!formik.isValid || formik.isSubmitting)}> submit</button>
        <button className='btn btn-outline-danger' type='reset' > reset</button>

        </Form>
            )
        
        }}
 
    </Formik>
    </div>
  )
}

export default NewForm