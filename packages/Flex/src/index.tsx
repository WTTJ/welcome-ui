import React from 'react'
import { Box, BoxPanda } from '@welcome-ui/box'
import { CreateWuiPandaProps, CreateWuiProps, forwardRef, WuiProps } from '@welcome-ui/system'
import { HTMLStyledProps } from '@welcome-ui/panda/jsx'

export interface FlexOptions {
  /** same as alignItems */
  align?: WuiProps['alignItems']
  /** same as justifyContent */
  justify?: WuiProps['justifyContent']
  /** same as flexWrap */
  wrap?: WuiProps['flexWrap']
  /** same as flexDirection */
  direction?: WuiProps['flexDirection']
  /** same as flexBasis */
  basis?: WuiProps['flexBasis']
  /** same as flexGrow */
  grow?: WuiProps['flexGrow']
  /** same as flexShrink */
  shrink?: WuiProps['flexShrink']
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

export type FlexPandaOptions = {
  /** same as alignItems */
  align?: HTMLStyledProps<'div'>['alignItems']
  /** same as justifyContent */
  justify?: HTMLStyledProps<'div'>['justifyContent']
  /** same as flexWrap */
  wrap?: HTMLStyledProps<'div'>['flexWrap']
  /** same as flexDirection */
  direction?: HTMLStyledProps<'div'>['flexDirection']
  /** same as flexBasis */
  basis?: HTMLStyledProps<'div'>['flexBasis']
  /** same as flexGrow */
  grow?: HTMLStyledProps<'div'>['flexGrow']
  /** same as flexShrink */
  shrink?: HTMLStyledProps<'div'>['flexShrink']
}
type FlexPandaProps = CreateWuiPandaProps<'div', FlexPandaOptions>

export const FlexPanda = React.forwardRef<HTMLDivElement, FlexPandaProps>(
  ({ align, basis, direction, grow, justify, shrink, wrap, ...rest }, ref) => {
    return (
      <BoxPanda
        alignItems={align}
        display="flex"
        flexBasis={basis}
        flexDirection={direction}
        flexGrow={grow}
        flexShrink={shrink}
        flexWrap={wrap}
        justifyContent={justify}
        {...rest}
        ref={ref}
      />
    )
  }
)
