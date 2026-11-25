import { screen } from '@testing-library/react'

import { Text } from '@/components/Text'

import { render } from '@tests'

import { Toast } from './'

const content = 'Jungle'

describe('<Title>', () => {
  it('should render correctly', () => {
    render(<Toast.Title data-testid="growl-title">{content}</Toast.Title>)
    const title = screen.getByTestId('growl-title')

    expect(title).toHaveTextContent(content)
  })
})

describe('<Snackbar>', () => {
  it('should not nest paragraphs when children contain Text elements', () => {
    const { container } = render(
      <Toast.Snackbar variant="success">
        <Toast.Title>{content}</Toast.Title>
        <Text>Description</Text>
      </Toast.Snackbar>
    )

    expect(screen.getByText(content)).toBeInTheDocument()
    expect(container.querySelector('p p')).toBeNull()
  })
})
