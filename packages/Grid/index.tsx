import React from 'react'
import { Box } from '@welcome-ui/box'
import { CreateWuiProps, forwardRef, WuiProps } from '@welcome-ui/system'

import { Item } from './Item'

export interface GridOptions {
  /** same as gridArea */
  area?: WuiProps['$gridArea']
  /** same as gridAutoColumns */
  autoColumns?: WuiProps['$gridAutoColumns']
  /** same as gridAutoFlow */
  autoFlow?: WuiProps['$gridAutoFlow']
  /** same as gridAutoRows */
  autoRows?: WuiProps['$gridAutoRows']
  /** same as gridColumn */
  column?: WuiProps['$gridColumn']
  /** same as columnGap */
  columnGap?: WuiProps['$gridColumnGap']
  /** same as gridGap */
  gap?: WuiProps['$gridGap']
  /** same as gridRow */
  row?: WuiProps['$gridRow']
  /** same as gridRowGap */
  rowGap?: WuiProps['$gridRowGap']
  /** same as gridTemplateAreas */
  templateAreas?: WuiProps['$gridTemplateAreas']
  /** same as gridTemplateColumns */
  templateColumns?: WuiProps['$gridTemplateColumns']
  /** same as gridTemplateRows */
  templateRows?: WuiProps['$gridTemplateRows']
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
        $display="grid"
        $gridArea={area}
        $gridAutoColumns={autoColumns}
        $gridAutoFlow={autoFlow}
        $gridAutoRows={autoRows}
        $gridColumn={column}
        $gridColumnGap={columnGap}
        $gridGap={gap}
        $gridRow={row}
        $gridRowGap={rowGap}
        $gridTemplateAreas={templateAreas}
        $gridTemplateColumns={templateColumns}
        $gridTemplateRows={templateRows}
        data-testid={dataTestId}
        ref={ref}
        {...rest}
      />
    )
  }
)

export const Grid = Object.assign(GridComponent, { Item })
