import React, { Children, forwardRef, isValidElement } from 'react'
import { node, oneOf, string } from 'prop-types'
import { Box } from '@welcome-ui/box'

export const Stack = forwardRef(
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

          const childProps = {
            as: as === 'ol' || as === 'ul' ? 'li' : 'div',
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

Stack.propTypes /* remove-proptypes */ = {
  as: string,
  children: node,
  direction: oneOf(['column', 'row']),
  spacing: oneOf(['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'])
}
