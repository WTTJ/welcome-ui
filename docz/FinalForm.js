import React from 'react'
import { func, object } from 'prop-types'
import { Form as FinalForm } from 'react-final-form'

import { DoczCodeBlock } from './CodeBlock'

export const TestFinalForm = ({ children, initialValues }) => {
  // eslint-disable-next-line no-console
  const handleSubmit = console.debug
  return (
    <FinalForm initialValues={initialValues} onSubmit={handleSubmit}>
      {({ handleSubmit, values }) => (
        <>
          <form onSubmit={handleSubmit}>{children}</form>
          <DoczCodeBlock data-testid="values">{values}</DoczCodeBlock>
        </>
      )}
    </FinalForm>
  )
}

export const getFormValues = node => JSON.parse(node.querySelector('code').textContent)

TestFinalForm.propTypes = {
  children: func,
  initialValues: object
}
