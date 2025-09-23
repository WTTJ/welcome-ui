import { forwardRef } from 'react'

import { classNames } from '@/utils'

import tableStyles from './table.module.scss'
import type { TableProps, TableTrProps } from './types'

const cx = classNames(tableStyles)

export const TableComponent = forwardRef<HTMLDivElement, TableProps>(
  ({ children, className, indent, ...rest }, ref) => {
    return (
      <div className={cx('root', className)} ref={ref} {...rest}>
        <div className={cx('content', indent && 'indent')}>
          <table>{children}</table>
        </div>
      </div>
    )
  }
)

const Tbody = (props: React.HTMLAttributes<HTMLTableSectionElement>) => {
  return <tbody {...props} />
}

const Th = (props: React.ThHTMLAttributes<HTMLTableCellElement>) => {
  return <th {...props} />
}

const Thead = (props: React.HTMLAttributes<HTMLTableSectionElement>) => {
  return <thead {...props} />
}

const Td = (props: React.TdHTMLAttributes<HTMLTableCellElement>) => {
  return <td {...props} />
}

const Tr = ({ className, onClick, variant, ...rest }: TableTrProps) => {
  return (
    <tr
      className={cx(variant && `variant-${variant}`, !!onClick && `clickable`, className)}
      onClick={onClick}
      {...rest}
    />
  )
}

// Nested exports
export const Table = Object.assign(TableComponent, {
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
})
