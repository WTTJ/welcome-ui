'use client'
import { Text } from '@/components/Text'
import { Window } from '@/components/Window'

export const Section = ({ children, className }: React.HTMLAttributes<HTMLElement>) => {
  return (
    <Window>
      <Window.Body className={`relative ${className || ''}`} size="lg">
        {children}
      </Window.Body>
    </Window>
  )
}

export const SectionTitle = ({
  children,
  className,
  ...rest
}: React.HTMLAttributes<HTMLElement>) => {
  return (
    <Text as="h2" className={`mb-xs ${className || ''}`} variant="display-sm" {...rest}>
      {children}
    </Text>
  )
}

export const SectionDescription = ({
  children,
  className,
  ...rest
}: React.HTMLAttributes<HTMLElement>) => {
  return (
    <Text
      className={`mb-3xl max-w-600 text-neutral-70 ${className || ''}`}
      variant="body-xl"
      {...rest}
    >
      {children}
    </Text>
  )
}
