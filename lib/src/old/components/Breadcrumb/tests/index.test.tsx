import { Breadcrumb } from '../'
import { render } from '../../../../../tests'

describe('<Breadcrumb>', () => {
  beforeEach(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-extra-semi
    ;(window as any).MutationObserver = function () {
      return {
        disconnect: () => {
          return {}
        },
        observe: () => {
          return {}
        },
        takeRecords: () => {
          return {}
        },
      }
    }
  })

  afterEach(() => {
    delete window.MutationObserver
  })

  it('should render correctly', () => {
    const { container } = render(
      <Breadcrumb>
        <Breadcrumb.Item href="/">welcome</Breadcrumb.Item>
        <Breadcrumb.Item href="/jungle">jungle</Breadcrumb.Item>
      </Breadcrumb>
    )

    expect(container).toHaveTextContent('welcome')
  })

  it('should render correctly with custom separator', () => {
    const { container } = render(
      <Breadcrumb separator="/">
        <Breadcrumb.Item>welcome</Breadcrumb.Item>
        <Breadcrumb.Item>jungle</Breadcrumb.Item>
      </Breadcrumb>
    )

    expect(container).toHaveTextContent('/')
  })

  it('should not render last item separator', () => {
    const testId = 'last-child'

    const { getByTestId } = render(
      <Breadcrumb separator="/">
        <Breadcrumb.Item>welcome</Breadcrumb.Item>
        <Breadcrumb.Item dataTestId={testId}>jungle</Breadcrumb.Item>
      </Breadcrumb>
    )

    const lastItem = getByTestId(testId)

    expect(lastItem).not.toHaveTextContent('/')
  })
})
