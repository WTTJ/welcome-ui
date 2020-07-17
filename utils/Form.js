/* eslint-disable react/jsx-handler-names */
/* eslint-disable no-console */

import React from 'react'
import { Form as FinalForm } from 'react-final-form'

// eslint-disable-next-line react/prop-types
export const Form = ({ children, initialValues, validate }) => (
  <FinalForm initialValues={initialValues} onSubmit={console.debug} validate={validate}>
    {({ handleSubmit, values }) => (
      <>
        <form onSubmit={handleSubmit}>{children}</form>
        <div data-testid="values">
          {Object.keys(values).length > 0 && <pre>{JSON.stringify(values, 0, 2)}</pre>}
        </div>
      </>
    )}
  </FinalForm>
)

export const getFormValues = node =>
  node.querySelector('pre') ? JSON.parse(node.querySelector('pre').textContent) : {}
