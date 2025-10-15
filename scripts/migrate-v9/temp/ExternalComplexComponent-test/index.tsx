import { FormattedMessage } from 'react-intl'
import { Text } from 'welcome-ui/Text'
import './styles.scss'
type Variant = 'primary' | 'secondary'
export const ComplexComponent = ({ variant = 'primary' }: { variant?: Variant }) => {
  return (
    <div className="wrapper" style={wrapperStyle}>
      <Link className="card elevated">
        <Text className="title display-detail" as="h3">
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
