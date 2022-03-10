import React from 'react'
import { Box } from '@welcome-ui/box'
import { CreateWuiProps, forwardRef } from '@welcome-ui/system'
import { SystemProps } from '@xstyled/system'

export interface FlexOptions {
  /** same as alignItems */
  align?: SystemProps['alignItems']
  /** same as justifyContent */
  justify?: SystemProps['justifyContent']
  /** same as flexWrap */
  wrap?: SystemProps['flexWrap']
  /** same as flexDirection */
  direction?: SystemProps['flexDirection']
  /** same as flexBasis */
  basis?: SystemProps['flexBasis']
  /** same as flexGrow */
  grow?: SystemProps['flexGrow']
  /** same as flexShrink */
  shrink?: SystemProps['flexShrink']
}

export type FlexProps = CreateWuiProps<'div', FlexOptions>

export const Flex = forwardRef<'div', FlexProps>(
  ({ align, basis, dataTestId, direction, grow, justify, shrink, wrap, ...rest }, ref) => {
    return (
      <Box
        alignItems={align}
        data-testid={dataTestId}
        display="flex"
        flexBasis={basis}
        flexDirection={direction}
        flexGrow={grow}
        flexShrink={shrink}
        flexWrap={wrap}
        justifyContent={justify}
        ref={ref}
        {...rest}
      />
    )
  }
)

Flex.displayName = 'Flex'
