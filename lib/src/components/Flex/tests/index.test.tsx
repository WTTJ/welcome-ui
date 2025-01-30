import React from 'react'

import { Flex } from '../'
import { render } from '../../../../tests'

const content = 'Jungle'

describe('<Flex>', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(
      <Flex dataTestId="flex" justify="center">
        {content}
      </Flex>
    )
    const element = getByTestId('flex')

    expect(element).toHaveTextContent(content)
    expect(element).toHaveStyleRule('display', 'flex')
  })
})
