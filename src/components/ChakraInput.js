import React from 'react'
import { Field } from 'formik'
import {Input, FormControl, FormErrorMessage, FormLabel} from '@chakra-ui/react'

function ChakraInput(props) {
    const  { name, label, ...rest} = props
  return (
    <Field name={name}>
        {
            ({form, field}) => {
                return (
                    <FormControl isInvalid={form.errors[name] && form.touched[name]}>
                        <FormLabel htmlFor={name}>{label}</FormLabel>
                        <Input id={name} {...rest} {...field} />
                        <FormErrorMessage>{form.errors[name]}</FormErrorMessage>
                    </FormControl>
                )
            }
        }

    </Field>
  )
}

export default ChakraInput