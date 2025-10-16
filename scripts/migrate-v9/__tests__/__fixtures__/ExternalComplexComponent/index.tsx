import { FormattedMessage } from 'react-intl'
import { Text } from 'welcome-ui/Text'

import * as S from './styles'

type Variant = 'primary' | 'secondary'

export const Complex = ({ variant = 'primary' }: { variant?: Variant }) => {
  return (
    <S.Wrapper variant={variant}>
      <S.Card elevated>
        <S.Title displayDetail>Complex component</S.Title>
      </S.Card>
      <Text as="span" color="dark-50" fontSize="sm" mt="auto" textAlign="center">
        <FormattedMessage defaultMessage="© 2024 Acme Corp. All rights reserved." id="8XKXo+" />
      </Text>
      <S.TriggerButton isActive={true}>Toggle</S.TriggerButton>
    </S.Wrapper>
  )
}
