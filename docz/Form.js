/* eslint-disable react/jsx-handler-names */
/* eslint-disable no-console */

import React from 'react'
import { Form as FinalForm } from 'react-final-form'

import { Box } from '../packages/Box'

import { Code } from './Code'

// eslint-disable-next-line react/prop-types
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

export const getFormValues = node =>
  node.querySelector('pre') ? JSON.parse(node.querySelector('pre').textContent) : {}
