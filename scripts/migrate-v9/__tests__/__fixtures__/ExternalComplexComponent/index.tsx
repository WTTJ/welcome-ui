import { useEffect, useState } from 'react'
import { FormattedMessage } from 'react-intl'
import { Text } from 'welcome-ui/Text'

import * as S from './styles'

type Variant = 'primary' | 'secondary'

export const Complex = ({ variant = 'primary' }: { variant?: Variant }) => {
  const [, setOpen] = useState<boolean>(false)

  const coco = true

  function handleClick() {
    // eslint-disable-next-line no-console
    console.log('Clicked!')
  }

  useEffect(() => {
    setOpen(coco)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <S.Wrapper data-testid="testid" variant={variant}>
      <S.Card elevated onClick={handleClick} to="/fishcakes">
        <S.TitleWrapper isActive={false}>
          <S.Title color="neutral-10" displayDetail>
            Complex component
          </S.Title>
        </S.TitleWrapper>
      </S.Card>
      <Text as="span" color="dark-50" fontSize="sm" mt="auto" textAlign="center" variant="h5">
        <FormattedMessage defaultMessage="© 2024 Acme Corp. All rights reserved." id="8XKXo+" />
      </Text>
      <S.TriggerButton isActive={true} isFixed>
        Toggle
      </S.TriggerButton>
    </S.Wrapper>
  )
}
