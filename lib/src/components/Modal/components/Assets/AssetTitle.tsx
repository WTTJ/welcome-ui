import { Text, type TextProps } from '@/components/Text'

export const AssetTitle = ({ children, ...rest }: TextProps) => {
  return (
    <Text as="p" className="m-0" lines={2} variant="h4" {...rest}>
      {children}
    </Text>
  )
}
