'use client'
import { CheckIcon } from '@welcome-ui/icons'
import { Text } from '@welcome-ui/text'
import { useCopyText } from '@welcome-ui/utils.copy'
import { kebabCase } from 'lodash'
import { usePathname } from 'next/navigation'

interface HeadingsProps {
  children: React.ReactNode
}

export const H2 = ({ children }: HeadingsProps) => {
  const pathname = usePathname()
  const id = `#${kebabCase(children?.toString())}`
  const copyPath = `https://www.welcome-ui.com${pathname}#${kebabCase(children?.toString())}`

  const [copy, copied] = useCopyText(copyPath, 2000)

  return (
    <Text
      alignItems="center"
      as="h2"
      borderBottom="1px solid"
      borderBottomColor="border"
      display="flex"
      id={id}
      mb="xl"
      mt="3xl"
      pb="sm"
      variant="h3"
    >
      {children}
      <Text
        as="span"
        color={{ _: 'dark-200', hover: 'primary-700' }}
        cursor="pointer"
        ml="xs"
        onClick={copy}
        transition="fast"
      >
        {copied ? <CheckIcon /> : '#'}
      </Text>
    </Text>
  )
}

export const H3 = ({ children }: HeadingsProps) => {
  return (
    <Text as="h3" id={`${kebabCase(children?.toString())}`} mb="lg" variant="h4">
      {children}
    </Text>
  )
}

export const H4 = ({ children }: HeadingsProps) => {
  return (
    <Text as="h4" id={`${kebabCase(children?.toString())}`} mb="md" variant="h5">
      {children}
    </Text>
  )
}
