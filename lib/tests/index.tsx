import type { RenderOptions } from '@testing-library/react'
import { render as rtlRender } from '@testing-library/react'
import type { UserEvent } from '@testing-library/user-event'
import userEvent from '@testing-library/user-event'
import type { ComponentProps, PropsWithChildren } from 'react'
import React, { forwardRef } from 'react'
import { BrowserRouter } from 'react-router-dom'

import { createTheme } from '@old/theme'
import { WuiProvider } from '@old/WuiProvider'

type ProviderProps = {
  children?: React.ReactNode
}

const Provider: React.FC<ProviderProps> = ({ children }) => {
  const theme = createTheme()

  return (
    <WuiProvider hasGlobalStyle theme={theme}>
      <BrowserRouter>{children}</BrowserRouter>
    </WuiProvider>
  )
}

type RenderResult = ReturnType<typeof rtlRender> & { user: UserEvent }

const customRender = (ui: JSX.Element, options?: RenderOptions): RenderResult => {
  const renderResult = rtlRender(ui, { wrapper: Provider, ...options })

  return {
    user: userEvent.setup(),
    ...renderResult,
  }
}

const PolymorphicComponent = forwardRef<HTMLDivElement, PropsWithChildren>((props, ref) => {
  return <div ref={ref} {...props} data-polymorphism="true" />
})

/**
 * Test that a component supports the `as` prop for polymorphism
 * @param Component The component to test
 * @param options Additional options
 */
export function expectAsSupport<C extends React.ElementType>(
  Component: C,
  options: { props?: ComponentProps<C> } = {}
) {
  const { props = {} } = options

  it('should support polymorphism', () => {
    const { getByTestId } = customRender(
      // @ts-expect-error: We intentionally test polymorphism even if 'as' is not in props
      <Component as={PolymorphicComponent} data-testid="polymorphism" {...props} />
    )
    const element = getByTestId('polymorphism')

    expect(element).toBeInTheDocument()
    expect(element).toHaveAttribute('data-polymorphism', 'true')
  })
}

// override render method
export { customRender as render }
