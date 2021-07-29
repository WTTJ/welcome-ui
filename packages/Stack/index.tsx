import React, { Children, forwardRef, isValidElement } from 'react'
import { Box } from '@welcome-ui/box'
import { WuiProps } from '@welcome-ui/system'

export interface StackOptions {
  direction?: 'column' | 'row'
  spacing?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
}

export type StackProps = StackOptions & React.HTMLAttributes<HTMLDivElement> & WuiProps

export const Stack = forwardRef<HTMLDivElement, StackProps>(
  ({ as = 'div', children, dataTestId, direction = 'column', spacing = 'md', ...rest }, ref) => {
    const validChildrenArray = Children.toArray(children).filter(isValidElement)

    const marginType = direction === 'column' ? 'mb' : 'mr'

    return (
      <Box
        as={as}
        data-testid={dataTestId}
        display="flex"
        flexDirection={direction}
        ref={ref}
        {...rest}
      >
        {validChildrenArray.map((child, i) => {
          const isLastChild = validChildrenArray.length === i + 1
          const childAs: React.ElementType = as === 'ol' || as === 'ul' ? 'li' : 'div'

          const childProps = {
            as: childAs,
            key: `stack-item-${i}`,
            [marginType]: isLastChild ? null : spacing
          }

          // eslint-disable-next-line react/jsx-key
          return <Box {...childProps}>{child}</Box>
        })}
      </Box>
    )
  }
)

Stack.displayName = 'Stack'
