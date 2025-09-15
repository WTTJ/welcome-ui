import { Box } from '@old/Box'
import type { CreateWuiProps, WuiProps } from '@old/System'
import { forwardRef } from '@old/System'

export interface ItemOptions {
  /** same as gridArea */
  area?: WuiProps['gridArea']
  /** same as gridColumn */
  column?: WuiProps['gridColumn']
  /** same as gridRow */
  row?: WuiProps['row']
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
