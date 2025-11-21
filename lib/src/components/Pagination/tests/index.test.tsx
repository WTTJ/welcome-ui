import { renderHook, screen } from '@testing-library/react'

import { render } from '@tests'

import { Pagination } from '../'
import { usePages } from '../utils'

describe('<Pagination>', () => {
  it('should render correctly', async () => {
    const onChange = vi.fn()
    const getHref = vi.fn()

    const { user } = render(
      <Pagination
        aria-label="pagination"
        dataTestId="pagination"
        getHref={getHref}
        onChange={onChange}
        page={1}
        pageCount={10}
      />
    )

    const prevButton = screen.getByTestId('pagination-arrow-prev')
    const nextButton = screen.getByTestId('pagination-arrow-next')
    const currentPage = screen.getByText('1')
    const nextPage = screen.getByText('2')

    expect(prevButton).toHaveAttribute('disabled')
    expect(nextButton).not.toHaveAttribute('disabled')
    expect(currentPage).toHaveAttribute('aria-current', 'true')
    expect(nextPage).toHaveAttribute('aria-current', 'false')

    /** Click on next button */
    await user.click(nextButton)

    expect(onChange).toHaveBeenCalledWith(2)

    /** Click on a page 3 button */
    await user.click(screen.getByText('3'))

    expect(onChange).toHaveBeenCalledWith(3)
  })

  it('should render correctly with prev Button', async () => {
    const onChange = vi.fn()
    const getHref = vi.fn()

    const { user } = render(
      <Pagination
        aria-label="pagination"
        dataTestId="pagination"
        getHref={getHref}
        onChange={onChange}
        page={10}
        pageCount={10}
      />
    )

    const prevButton = screen.getByTestId('pagination-arrow-prev')
    const nextButton = screen.getByTestId('pagination-arrow-next')
    const currentPage = screen.getByText('10')
    const prevPage = screen.getByText('9')

    expect(prevButton).not.toHaveAttribute('disabled')
    expect(nextButton).toHaveAttribute('disabled')
    expect(currentPage).toHaveAttribute('aria-current', 'true')
    expect(prevPage).toHaveAttribute('aria-current', 'false')

    /** Click on prev button */
    await user.click(prevButton)

    expect(onChange).toHaveBeenCalledWith(9)

    /** Click on a page 3 button */
    await user.click(screen.getByText('10'))

    expect(onChange).toHaveBeenCalledWith(10)
  })

  it('should render correctly without href url', async () => {
    const onChange = vi.fn()

    const { user } = render(
      <Pagination
        aria-label="pagination"
        dataTestId="pagination"
        onChange={onChange}
        page={10}
        pageCount={10}
      />
    )

    const prevButton = screen.getByTestId('pagination-arrow-prev')
    const nextButton = screen.getByTestId('pagination-arrow-next')
    const currentPage = screen.getByText('10')
    const prevPage = screen.getByText('9')

    expect(prevButton).not.toHaveAttribute('disabled')
    expect(nextButton).toHaveAttribute('disabled')
    expect(currentPage).toHaveAttribute('aria-current', 'true')
    expect(prevPage).toHaveAttribute('aria-current', 'false')

    /** Click on prev button */
    await user.click(prevButton)

    expect(onChange).toHaveBeenCalledWith(9)

    /** Click on a page 3 button */
    await user.click(screen.getByText('10'))

    expect(onChange).toHaveBeenCalledWith(10)
  })

  it('should render with custom navigation texts', async () => {
    const onChange = vi.fn()
    const navigationTexts = {
      firstPage: 'First',
      lastPage: 'Last',
      nextPage: 'Next',
      previousPage: 'Previous',
    }

    render(
      <Pagination
        dataTestId="pagination"
        navigationTexts={navigationTexts}
        onChange={onChange}
        page={5}
        pageCount={10}
        showEdgeControls
      />
    )

    const firstButton = screen.getByTestId('pagination-arrow-first')
    const lastButton = screen.getByTestId('pagination-arrow-last')
    const prevButton = screen.getByTestId('pagination-arrow-prev')
    const nextButton = screen.getByTestId('pagination-arrow-next')

    expect(firstButton).toHaveTextContent('First')
    expect(lastButton).toHaveTextContent('Last')
    expect(prevButton).toHaveTextContent('Previous')
    expect(nextButton).toHaveTextContent('Next')
    expect(firstButton).toHaveAttribute('aria-label', 'First')
    expect(lastButton).toHaveAttribute('aria-label', 'Last')
    expect(prevButton).toHaveAttribute('aria-label', 'Previous')
    expect(nextButton).toHaveAttribute('aria-label', 'Next')
  })

  it('should navigate to first and last pages', async () => {
    const onChange = vi.fn()

    const { user } = render(
      <Pagination
        dataTestId="pagination"
        onChange={onChange}
        page={5}
        pageCount={10}
        showEdgeControls
      />
    )

    const firstButton = screen.getByTestId('pagination-arrow-first')
    const lastButton = screen.getByTestId('pagination-arrow-last')

    expect(firstButton).not.toHaveAttribute('disabled')
    expect(lastButton).not.toHaveAttribute('disabled')

    /** Click on first button */
    await user.click(firstButton)
    expect(onChange).toHaveBeenCalledWith(1)

    /** Click on last button */
    await user.click(lastButton)
    expect(onChange).toHaveBeenCalledWith(10)
  })

  describe('usePages', () => {
    it('should return correct values', () => {
      const { result } = renderHook(() => usePages({ page: 1, pageCount: 10, rangeDisplay: 5 }))

      expect(result.current).toStrictEqual([1, 2, 3, 4, 5, '-', 10])
    })

    it('should return correct values in middle', () => {
      const { result } = renderHook(() => usePages({ page: 5, pageCount: 10, rangeDisplay: 5 }))

      expect(result.current).toStrictEqual([1, '-', 4, 5, 6, '-', 10])
    })

    it('should return correct values with small pagination', () => {
      const { result } = renderHook(() => usePages({ page: 1, pageCount: 5, rangeDisplay: 5 }))

      expect(result.current).toStrictEqual([1, 2, 3, 4, 5])
    })
  })
})
