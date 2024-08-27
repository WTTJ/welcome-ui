import React from 'react'

import { render } from '../../../utils/tests'
import { Box } from '../../Box/src'
import { shouldForwardProp } from '../src/index'

const content = 'test'

describe('<Box>', () => {
  it('should render correctly with the fontStyle style prop', () => {
    const { container, getByTestId } = render(
      <Box data-testid="box" fontStyle="italic" fontWeight="bold">
        {content}
      </Box>
    )

    const box = getByTestId('box')

    expect(container).toHaveTextContent(content)
    // check if font-style is set to italic
    expect(getComputedStyle(box).fontStyle).toBe('italic')
  })
})

describe('shouldForwardProps', () => {
  it('should forward valid props only', () => {
    expect(shouldForwardProp('href')).toBeTruthy()
    expect(shouldForwardProp('data-test')).toBeTruthy()

    expect(shouldForwardProp('as')).toBeFalsy()
    expect(shouldForwardProp('isActive')).toBeFalsy()
    expect(shouldForwardProp('backgroundColor')).toBeFalsy()
    expect(shouldForwardProp('$href')).toBeFalsy()
  })

  it("should use xstyled's shouldForwardProps with styled.xBox", () => {
    const StyledDiv = styled.div``
    const StyledDivBox = styled.divBox``

    const { getByTestId } = render(
      <div>
        <StyledDiv color="tomato" data-testid="div" />
        <StyledDivBox color="tomato" data-testid="div-box" />
        <Box color="tomato" data-testid="wui-box" />
      </div>
    )

    const styledDivElement = getByTestId('div')
    const styledDivBoxElement = getByTestId('div-box')
    const wuiBoxElement = getByTestId('wui-box')

    expect(styledDivElement).toHaveAttribute('color')
    expect(styledDivBoxElement).not.toHaveAttribute('color')
    expect(wuiBoxElement).not.toHaveAttribute('color')
  })
})
