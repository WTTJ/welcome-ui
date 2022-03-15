import React, { cloneElement } from 'react'
import { Box } from '@welcome-ui/box'
import { FormProvider, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { Code } from './Mdx/Code'

// eslint-disable-next-line react/prop-types
export function HookForm({ children, defaultValues, schemaValidate }) {
  const formMethods = useForm({
    resolver: yupResolver(schemaValidate()),
    defaultValues,
  })
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
    watch,
  } = formMethods
  const values = watch()

  const onSubmit = async values => {
    // eslint-disable-next-line no-console
    console.log(values)
  }

  return (
    <FormProvider {...formMethods}>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        {cloneElement(children, {
          errors,
          register,
          control,
          // eslint-disable-next-line react/prop-types
          ...children.props,
        })}
      </form>
      <Box data-testid="values">
        {Object.keys(values).length > 0 && (
          <Code isCopyable={false} language="json">
            {JSON.stringify(values, 0, 2)}
          </Code>
        )}
      </Box>
    </FormProvider>
  )
}

export const getFormValues = node =>
  node.querySelector('pre') ? JSON.parse(node.querySelector('pre').textContent) : {}
