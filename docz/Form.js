/* eslint-disable react/jsx-handler-names */
/* eslint-disable no-console */

import React from 'react'
import { func, object } from 'prop-types'
import { Form as FinalForm } from 'react-final-form'

import { DoczCodeBlock } from './CodeBlock'

export const Form = ({ children, initialValues }) => (
  <FinalForm initialValues={initialValues} onSubmit={console.debug}>
    {({ handleSubmit, values }) => (
      <>
        <form onSubmit={handleSubmit}>{children}</form>
        <DoczCodeBlock data-testid="values" show={Object.keys(values).length}>
          {values}
        </DoczCodeBlock>
      </>
    )}
  </FinalForm>
)

Form.propTypes = {
  children: func,
  initialValues: object
}

export const getFormValues = node => JSON.parse(node.querySelector('code').textContent)
