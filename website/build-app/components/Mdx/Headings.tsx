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
      className={`
        'border-b border-b-neutral-30 flex items-center mt-3xl pb-sm scroll-mt-[170px]
        ${className}`}
      id={id}
      variant="h3"
    >
      <a className="text-inherit hover:underline" href={`#${id}`}>
        {children}
      </a>
    </Text>
  )
}

export const H3 = ({ children, className }: HeadingsProps) => {
  const id = `${kebabCase(children?.toString())}`

  return (
    <Text as="h3" className={`mb-lg mt-xxl scroll-mt-[170px] ${className}`} id={id} variant="h4">
      <a className="text-inherit hover:underline" href={`#${id}`}>
        {children}
      </a>
    </Text>
  )
}

export const H4 = ({ children, className }: HeadingsProps) => {
  return (
    <Text
      as="h4"
      className={`mb-md mt-xl ${className}`}
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
      className={`mb-sm mt-lg ${className}`}
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
      className={`mb-sm mt-lg ${className}`}
      id={`${kebabCase(children?.toString())}`}
      variant="h6"
    >
      {children}
    </Text>
  )
}
