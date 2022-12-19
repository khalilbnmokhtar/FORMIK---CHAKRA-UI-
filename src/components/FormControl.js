import React from 'react'
import ChakraInput from './ChakraInput'
import ChakraTextarea from './ChakraTextarea'
import CheckBox from './CheckBox'
import DatePicker from './DatePicker'
import Input from './Input'
import Radio from './Radio'
import Select from './Select'
import Textarea from './Textarea'

function FormControl(props) {
  const { control, ...rest } = props
  

  switch (control)
  {
    case 'input' : return <Input {...rest} />
    case 'textarea' : return <Textarea {...rest} />
    case 'select' : return <Select {...rest} />
    case 'radio' : return <Radio {...rest} />
    case 'checkbox' : return <CheckBox {...rest} />
    case 'date' : return <DatePicker {...rest} />
    case 'chakraInput' : return <ChakraInput {...rest} />
    case 'ChakraTextarea' : return <ChakraTextarea {...rest} />
     default : return null   
  }
}

export default FormControl