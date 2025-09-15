import type { PolymorphicProps } from '../../theme/types'
import type { Button } from '../Button'
import type { ButtonProps } from '../Button/types'

export type ButtonGroupProps<T extends React.ElementType = 'div'> = PolymorphicProps<T> &
  React.HTMLAttributes<HTMLDivElement> & {
    children: ChildrenProps
    className?: string
    disabled?: boolean
    size?: ButtonProps<'button'>['size']
    variant?: ButtonProps<'button'>['variant']
  }

export type ChildrenProps = ChildType | ChildType[]
type ChildType = boolean | null | React.ReactElement<typeof Button> | undefined
