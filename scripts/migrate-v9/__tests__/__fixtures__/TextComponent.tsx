import { Text } from 'welcome-ui/Text'

const FormattedMessage = ({
  defaultMessage,
  id,
}: {
  defaultMessage: string
  id: string
}): React.ReactNode => <span id={id}>{defaultMessage}</span>

export const TextComponent = () => {
  return (
    <div>
      <Text as="h1" fontSize="h3" mt="md" variant="h4">
        This is a paragraph with custom styling.
      </Text>
      <Text as="span" color="dark-50" fontSize="sm" mt="auto" textAlign="center">
        <FormattedMessage defaultMessage="© 2024 Acme Corp. All rights reserved." id="8XKXo+" />
      </Text>
    </div>
  )
}
