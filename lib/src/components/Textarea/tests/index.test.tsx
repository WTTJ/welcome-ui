import React, { useState } from 'react'

import { Textarea } from '../'
import { render } from '../../../../tests'
import type { TextareaProps } from '../types'

const TextareaWrapper: React.FC<TextareaProps> = props => {
  const [value, setValue] = useState('test')

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value)
  }

  return (
    <Textarea
      data-testid="textarea"
      name="textarea"
      onChange={handleChange}
      value={value}
      {...props}
    />
  )
}

describe('<Textarea />', () => {
  it('displays given value', () => {
    const { getByTestId } = render(<TextareaWrapper />)

    const textarea = getByTestId('textarea') as HTMLTextAreaElement
    expect(textarea.value).toBe('test')
  })
})
