import { FormattedMessage } from 'react-intl'
import { Text } from 'welcome-ui/Text'

import * as S from './styles'

type Variant = 'primary' | 'secondary'

export const Complex = ({ variant = 'primary' }: { variant?: Variant }) => {
  return (
    <S.Wrapper variant={variant}>
      <S.Card elevated to="/fishcakes">
        <S.TitleWrapper isActive={false}>
          <S.Title color="neutral-10" displayDetail>
            Complex component
          </S.Title>
        </S.TitleWrapper>
      </S.Card>
      <Text as="span" color="dark-50" fontSize="sm" mt="auto" textAlign="center" variant="h5">
        <FormattedMessage defaultMessage="© 2024 Acme Corp. All rights reserved." id="8XKXo+" />
      </Text>
      <S.TriggerButton isActive={true}>Toggle</S.TriggerButton>
    </S.Wrapper>
  )
}
