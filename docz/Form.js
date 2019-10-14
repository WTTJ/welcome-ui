/* eslint-disable react/jsx-handler-names */
/* eslint-disable no-console */

import React from 'react'
import { func, object } from 'prop-types'
import { Form as FinalForm } from 'react-final-form'

import { Box } from '../src/components/Box'

import { Code } from './Code'

export const Form = ({ children, initialValues, validate }) => (
  <FinalForm initialValues={initialValues} onSubmit={console.debug} validate={validate}>
    {({ handleSubmit, values }) => (
      <>
        <form onSubmit={handleSubmit}>{children}</form>
        <Box data-testid="values">
          {Object.keys(values).length > 0 && (
            <Code language="json">{JSON.stringify(values, 0, 2)}</Code>
          )}
        </Box>
      </>
    )}
  </FinalForm>
)

Form.propTypes = {
  children: func,
  initialValues: object,
  validate: func
}

export const getFormValues = node =>
  node.querySelector('pre') ? JSON.parse(node.querySelector('pre').textContent) : {}
