import { Box } from '@old/Box'
import type { CreateWuiProps, WuiProps } from '@old/System'
import { forwardRef } from '@old/System'

export interface FlexOptions {
  /** same as alignItems */
  align?: WuiProps['alignItems']
  /** same as flexBasis */
  basis?: WuiProps['flexBasis']
  /** same as flexDirection */
  direction?: WuiProps['flexDirection']
  /** same as flexGrow */
  grow?: WuiProps['flexGrow']
  /** same as justifyContent */
  justify?: WuiProps['justifyContent']
  /** same as flexShrink */
  shrink?: WuiProps['flexShrink']
  /** same as flexWrap */
  wrap?: WuiProps['flexWrap']
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
