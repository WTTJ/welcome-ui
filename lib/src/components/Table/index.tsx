import { forwardRef } from 'react'

import { classNames } from '@/utils'

import tableStyles from './table.module.scss'
import type { TableProps, TableTrProps } from './types'

export { tableStyles as tableClasses }

const cx = classNames(tableStyles)

export const TableComponent = forwardRef<HTMLDivElement, TableProps>(
  ({ children, className, withColumnDivider = false, ...rest }, ref) => {
    return (
      <div className={cx('root', className)} ref={ref} {...rest}>
        <div className={cx('content', withColumnDivider && 'withColumnDivider')}>
          <table>{children}</table>
        </div>
      </div>
    )
  }
)

TableComponent.displayName = 'Table'

const Tbody = (props: React.HTMLAttributes<HTMLTableSectionElement>) => {
  return <tbody {...props} />
}

Tbody.displayName = 'Table.Tbody'

const Th = (props: React.ThHTMLAttributes<HTMLTableCellElement>) => {
  return <th {...props} />
}

Th.displayName = 'Table.Th'

const Thead = (props: React.HTMLAttributes<HTMLTableSectionElement>) => {
  return <thead {...props} />
}

Thead.displayName = 'Table.Thead'

const Td = (props: React.TdHTMLAttributes<HTMLTableCellElement>) => {
  return <td {...props} />
}

Td.displayName = 'Table.Td'

const Tr = ({ className, onClick, ...rest }: TableTrProps) => {
  return <tr className={className} data-clickable={!!onClick} onClick={onClick} {...rest} />
}

Tr.displayName = 'Table.Tr'

// Nested exports
export const Table = Object.assign(TableComponent, {
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
})
