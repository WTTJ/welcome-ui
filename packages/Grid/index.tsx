import React from 'react'
import { Box } from '@welcome-ui/box'
import { CreateWuiProps, forwardRef } from '@welcome-ui/system'
import { SystemProps } from '@xstyled/system'

import { Item } from './Item'

export interface GridOptions {
  /** same as gridArea */
  area?: SystemProps['gridArea']
  /** same as gridAutoColumns */
  autoColumns?: SystemProps['gridAutoColumns']
  /** same as gridAutoFlow */
  autoFlow?: SystemProps['gridAutoFlow']
  /** same as gridAutoRows */
  autoRows?: SystemProps['gridAutoRows']
  /** same as gridColumn */
  column?: SystemProps['gridColumn']
  /** same as columnGap */
  columnGap?: SystemProps['columnGap']
  /** same as gridGap */
  gap?: SystemProps['gap']
  /** same as gridRow */
  row?: SystemProps['row']
  /** same as gridRowGap */
  rowGap?: SystemProps['rowGap']
  /** same as gridTemplateAreas */
  templateAreas?: SystemProps['gridTemplateAreas']
  /** same as gridTemplateColumns */
  templateColumns?: SystemProps['gridTemplateColumns']
  /** same as gridTemplateRows */
  templateRows?: SystemProps['gridTemplateRows']
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
