import React, { Children, isValidElement } from 'react'

import { Box } from '@/Box'
import { CreateWuiProps, forwardRef } from '@/System'

export interface StackOptions {
  direction?: 'column' | 'row'
  spacing?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
}

export type StackProps = CreateWuiProps<'div', StackOptions>

export const Stack = forwardRef<'div', StackProps>(
  ({ as = 'div', children, dataTestId, direction = 'column', spacing = 'md', ...rest }, ref) => {
    const validChildrenArray = Children.toArray(children).filter(isValidElement)

    return (
      <Box
        as={as}
        data-testid={dataTestId}
        display="flex"
        flexDirection={direction}
        gap={spacing}
        ref={ref}
        {...rest}
      >
        {validChildrenArray.map((child, i) => {
          const childAs: React.ElementType = as === 'ol' || as === 'ul' ? 'li' : 'div'

          const childProps = {
            as: childAs,
            key: `stack-item-${i}`,
          }

          return <Box {...childProps}>{child}</Box>
        })}
      </Box>
    )
  }
)

Stack.displayName = 'Stack'
