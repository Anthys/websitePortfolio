import React from 'react'
import {
  Formiz,
  FormizStep, // Import the FormizStep component
  useForm,
} from '@formiz/core'
import { isEmail } from '@formiz/validations'
import { MyField } from './MyField'

export const MyForm = () => {
  const myForm = useForm()

  const handleSubmit = (values) => {
    console.log(values)
  }

  return (
    <Formiz
      connect={myForm}
      onValidSubmit={handleSubmit}
    >
      <form
        noValidate
        // Change the myForm.submit to myForm.submitStep
        onSubmit={myForm.submitStep}
      >

        <FormizStep
          name="step1" // Split the form with FormizStep
        >
          <MyField
            name="firstName"
            label="First Name"
            required="First Name is required"
          />
          <MyField
            name="lastName"
            label="Last Name"
            required="Last Name is required"
          />
        </FormizStep>

        <FormizStep
          name="step2" // Split the form with FormizStep
        >
          <MyField
            name="email"
            label="Email"
            validations={[
              {
                rule: isEmail(),
                message: 'This is not a valid email',
              },
            ]}
          />
        </FormizStep>

        {/* Update the submit button to allow navigation between steps. */}
        {!myForm.isFirstStep && (
          <button type="button" onClick={myForm.prevStep}>
            Back
          </button>
        )}
        {myForm.isLastStep ? (
          <button type="submit" disabled={!myForm.isValid}>
            Submit
          </button>
        ) : (
          <button type="submit" disabled={!myForm.isStepValid}>
            Continue
          </button>
        )}
      </form>
    </Formiz>
  )
}