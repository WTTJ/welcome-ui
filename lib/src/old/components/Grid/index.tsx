import { Box } from '@old/Box'
import type { CreateWuiProps, WuiProps } from '@old/System'
import { forwardRef } from '@old/System'

import { Item } from './Item'

export interface GridOptions {
  /** same as gridArea */
  area?: WuiProps['gridArea']
  /** same as gridAutoColumns */
  autoColumns?: WuiProps['gridAutoColumns']
  /** same as gridAutoFlow */
  autoFlow?: WuiProps['gridAutoFlow']
  /** same as gridAutoRows */
  autoRows?: WuiProps['gridAutoRows']
  /** same as gridColumn */
  column?: WuiProps['gridColumn']
  /** same as columnGap */
  columnGap?: WuiProps['columnGap']
  /** same as gridGap */
  gap?: WuiProps['gap']
  /** same as gridRow */
  row?: WuiProps['gridRow']
  /** same as gridRowGap */
  rowGap?: WuiProps['rowGap']
  /** same as gridTemplateAreas */
  templateAreas?: WuiProps['gridTemplateAreas']
  /** same as gridTemplateColumns */
  templateColumns?: WuiProps['gridTemplateColumns']
  /** same as gridTemplateRows */
  templateRows?: WuiProps['gridTemplateRows']
}

export type GridProps = CreateWuiProps<'div', GridOptions>

const GridComponent = forwardRef<'div', GridProps>(
  (
    {
      area,
      autoColumns,
      autoFlow,
      autoRows,
      column,
      columnGap,
      dataTestId,
      gap,
      row,
      rowGap,
      templateAreas,
      templateColumns,
      templateRows,
      ...rest
    },
    ref
  ) => {
    return (
      <Box
        columnGap={columnGap}
        data-testid={dataTestId}
        display="grid"
        gap={gap}
        gridArea={area}
        gridAutoColumns={autoColumns}
        gridAutoFlow={autoFlow}
        gridAutoRows={autoRows}
        gridColumn={column}
        gridRow={row}
        gridTemplateAreas={templateAreas}
        gridTemplateColumns={templateColumns}
        gridTemplateRows={templateRows}
        ref={ref}
        rowGap={rowGap}
        {...rest}
      />
    )
  }
)

export const Grid = Object.assign(GridComponent, { Item })
