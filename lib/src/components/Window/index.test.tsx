import { useTabStore } from '@ariakit/react'
import { screen } from '@testing-library/react'

import { Window } from '@/components/Window'

import { render } from '@tests'

const onClose = vi.fn()
const onExpand = vi.fn()

describe('<Window>', () => {
  it('should render correctly', () => {
    const { container } = render(<Window>Content</Window>)

    expect(container).toHaveTextContent('Content')
  })

  it('should render with default role', () => {
    render(<Window data-testid="window">Content</Window>)

    const component = screen.getByTestId('window')

    expect(component).toHaveAttribute('role', 'region')
  })

  it('should render with custom className', () => {
    render(
      <Window className="custom-class" data-testid="window">
        Content
      </Window>
    )

    const component = screen.getByTestId('window')

    expect(component.className).toMatch(/custom-class/)
  })

  it('should render with header and body', () => {
    render(
      <Window data-testid="window">
        <Window.Header>
          <Window.Header.Title title="Test Title" />
        </Window.Header>
        <Window.Body>Body content</Window.Body>
      </Window>
    )

    expect(screen.getByText('Test Title')).toBeInTheDocument()
    expect(screen.getByText('Body content')).toBeInTheDocument()
  })

  it('should render with header actions', () => {
    render(
      <Window>
        <Window.Header>
          <Window.Header.LeftActions isExpandable onExpandChange={onExpand} />
          <Window.Header.Title title="Title" />
          <Window.Header.RightActions isClosable onClose={onClose} />
        </Window.Header>
        <Window.Body>Content</Window.Body>
      </Window>
    )

    expect(screen.getByText('Title')).toBeInTheDocument()
  })

  it('should render with tab panels', async () => {
    const Test = () => {
      const tabStore = useTabStore({
        defaultSelectedId: 'tab1',
      })

      return (
        <Window>
          <Window.Header>
            <Window.Header.Tabs store={tabStore}>
              <Window.Header.Tab icon="folder" id="tab1" store={tabStore}>
                1st tab
              </Window.Header.Tab>
              <Window.Header.Tab icon="folder" id="tab2" store={tabStore}>
                2nd tab
              </Window.Header.Tab>
            </Window.Header.Tabs>
          </Window.Header>
          <Window.TabPanel store={tabStore} tabId="tab1">
            <Window.Body>First tab content</Window.Body>
          </Window.TabPanel>
          <Window.TabPanel store={tabStore} tabId="tab2">
            <Window.Body>Second tab content</Window.Body>
          </Window.TabPanel>
        </Window>
      )
    }

    const { user } = render(<Test />)

    expect(screen.getByText('First tab content')).toBeVisible()
    expect(screen.getByText('Second tab content')).not.toBeVisible()

    await user.click(screen.getByText('2nd tab'))

    const firstPanel = screen.getByText('First tab content').closest('[role="tabpanel"]')
    const secondPanel = screen.getByText('Second tab content').closest('[role="tabpanel"]')

    expect(secondPanel).toHaveAttribute('data-open', 'true')
    expect(firstPanel).not.toHaveAttribute('data-open')
  })

  it('should render with BoxText', () => {
    render(
      <Window>
        <Window.BoxText>Styled text content</Window.BoxText>
      </Window>
    )

    expect(screen.getByText('Styled text content')).toBeInTheDocument()
  })

  it('should render with Media', () => {
    render(
      <Window>
        <Window.Media>
          <img alt="Test image" src="/test.jpg" />
        </Window.Media>
      </Window>
    )

    expect(screen.getByAltText('Test image')).toBeInTheDocument()
  })

  it('should render with different body sizes', () => {
    const { rerender } = render(
      <Window>
        <Window.Body data-testid="body" size="sm">
          Content
        </Window.Body>
      </Window>
    )

    expect(screen.getByTestId('body').className).toMatch(/size-sm/)

    rerender(
      <Window>
        <Window.Body data-testid="body" size="lg">
          Content
        </Window.Body>
      </Window>
    )

    expect(screen.getByTestId('body').className).toMatch(/size-lg/)
  })
})
