import { FormattedMessage } from 'react-intl'
import { Text } from 'welcome-ui/Text'
import './styles.scss'
type Variant = 'primary' | 'secondary'
export const ComplexComponent = ({ variant = 'primary' }: { variant?: Variant }) => {
  return (
    <div
      className="wrapper"
      style={
        {
          '--wrapper-background-color':
            variant === 'primary' ? 'var(--primary-500)' : 'var(--secondary-500)',
          '--wrapper-position': variant === 'primary' ? 'var(--spacing-sm)' : 0,
        } as React.CSSProperties
      }
    >
      <Link className="card elevated">
        <Text
          className="title display-detail"
          as="h3"
          style={
            {
              '--title-margin-top': displayDetail ? 'var(--spacing-sm)' : 0,
            } as React.CSSProperties
          }
        >
          Complex component
        </Text>
      </Link>
      <Text className="mt-auto text-center text-dark-50 text-sm" as="span">
        <FormattedMessage defaultMessage="© 2024 Acme Corp. All rights reserved." id="8XKXo+" />
      </Text>
      <div isActive={true} className="trigger-button" as="buttonBox">
        Toggle
      </div>
    </div>
  )
}
