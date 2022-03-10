import React from 'react'
import { Box } from '@welcome-ui/box'
import { CreateWuiProps, forwardRef } from '@welcome-ui/system'
import { SystemProps } from '@xstyled/system'

export interface ItemOptions {
  /** same as gridArea */
  area?: SystemProps['gridArea']
  /** same as gridColumn */
  column?: SystemProps['gridColumn']
  /** same as gridRow */
  row?: SystemProps['row']
}

export type ItemProps = CreateWuiProps<'div', ItemOptions>

/**
 * @name Grid.Item
 */
export const Item = forwardRef<'div', ItemProps>(
  ({ area, column, dataTestId, row, ...rest }, ref) => {
    return (
      <Box
        data-testid={dataTestId}
        gridArea={area}
        gridColumn={column}
        ref={ref}
        row={row}
        {...rest}
      />
    )
  }
)
