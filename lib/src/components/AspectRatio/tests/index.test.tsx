import { render } from '@tests'

import { AspectRatio } from '../'

const content = 'Jungle'

describe('<AspectRatio>', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(<AspectRatio data-testid="testid">{content}</AspectRatio>)

    const element = getByTestId('testid')

    expect(element).toHaveTextContent(content)
  })
})
