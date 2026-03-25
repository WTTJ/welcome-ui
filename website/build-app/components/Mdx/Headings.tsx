import { kebabCase } from 'lodash'

import { Text } from '@/components/Text'

type HeadingsProps = {
  children: React.ReactNode
  className?: string
}

export const H2 = ({ children, className }: HeadingsProps) => {
  const id = `${kebabCase(children?.toString())}`

  return (
    <Text
      as="h2"
      className={`nine:border-b nine:border-b-neutral-30 nine:flex nine:items-center nine:mt-3xl nine:pb-sm nine:scroll-mt-[170px] ${className}`}
      id={id}
      variant="h3"
    >
      <a className="nine:text-inherit nine:hover:underline" href={`#${id}`}>
        {children}
      </a>
    </Text>
  )
}

export const H3 = ({ children, className }: HeadingsProps) => {
  const id = `${kebabCase(children?.toString())}`

  return (
    <Text
      as="h3"
      className={`nine:mb-lg nine:mt-xxl scroll-mt-[170px] ${className}`}
      id={id}
      variant="h4"
    >
      <a className="nine:text-inherit nine:hover:underline" href={`#${id}`}>
        {children}
      </a>
    </Text>
  )
}

export const H4 = ({ children, className }: HeadingsProps) => {
  return (
    <Text
      as="h4"
      className={`nine:mb-md nine:mt-xl ${className}`}
      id={`${kebabCase(children?.toString())}`}
      variant="h5"
    >
      {children}
    </Text>
  )
}

export const H5 = ({ children, className }: HeadingsProps) => {
  return (
    <Text
      as="h5"
      className={`nine:mb-sm nine:mt-lg ${className}`}
      id={`${kebabCase(children?.toString())}`}
      variant="h6"
    >
      {children}
    </Text>
  )
}

export const H6 = ({ children, className }: HeadingsProps) => {
  return (
    <Text
      className={`nine:mb-sm nine:mt-lg ${className}`}
      id={`${kebabCase(children?.toString())}`}
      variant="h6"
    >
      {children}
    </Text>
  )
}
