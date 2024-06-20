'use client'
import { CheckIcon } from '@welcome-ui/icons'
import { WuiProps } from '@welcome-ui/system'
import { Text } from '@welcome-ui/text'
import { useCopyText } from '@welcome-ui/utils.copy'
import { kebabCase } from 'lodash'
import { usePathname } from 'next/navigation'

type HeadingsProps = {
  children: React.ReactNode
  mt?: WuiProps['marginTop']
}

export const H2 = ({ children, mt = '3xl' }: HeadingsProps) => {
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
      mt={mt}
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

export const H3 = ({ children, mt = 'xxl' }: HeadingsProps) => {
  return (
    <Text as="h3" id={`${kebabCase(children?.toString())}`} mb="lg" mt={mt} variant="h4">
      {children}
    </Text>
  )
}

export const H4 = ({ children, mt = 'xl' }: HeadingsProps) => {
  return (
    <Text as="h4" id={`${kebabCase(children?.toString())}`} mb="md" mt={mt} variant="h5">
      {children}
    </Text>
  )
}
