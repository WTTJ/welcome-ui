import React from 'react'
import { styled } from '@welcome-ui/panda/jsx'
import { TextPanda } from '@welcome-ui/text'

import { AvatarPanda } from '../src'

const Wrapper = ({ children }) => (
  <styled.div alignItems="center" display="flex" flexWrap="wrap" gap="md">
    {children}
  </styled.div>
)

export const Avatar = () => {
  return (
    <div>
      <styled.div my="xxl">
        <TextPanda mb="md" variant="h3">
          With image
        </TextPanda>
        <Wrapper>
          <AvatarPanda
            name="Welcome jungle"
            size="sm"
            src="https://avatars3.githubusercontent.com/u/13100706?s=200&v=4"
          />
          <AvatarPanda
            name="Welcome jungle"
            src="https://avatars3.githubusercontent.com/u/13100706?s=200&v=4"
          />
          <AvatarPanda
            name="Welcome jungle"
            size="lg"
            src="https://avatars3.githubusercontent.com/u/13100706?s=200&v=4"
          />
          <AvatarPanda
            name="Welcome jungle"
            size="xl"
            src="https://avatars3.githubusercontent.com/u/13100706?s=200&v=4"
          />
          <AvatarPanda
            name="Welcome jungle"
            size="xxl"
            src="https://avatars3.githubusercontent.com/u/13100706?s=200&v=4"
          />
          <AvatarPanda
            color="warning-500"
            fontSize={20}
            h={130}
            name="Custom"
            src="https://avatars3.githubusercontent.com/u/13100706?s=200&v=4"
            w={130}
          />
        </Wrapper>
      </styled.div>
      <styled.div my="xxl">
        <TextPanda mb="md" variant="h3">
          Without image
        </TextPanda>
        <Wrapper>
          <AvatarPanda name="Welcome jungle" size="sm" />
          <AvatarPanda name="Welcome jungle" />
          <AvatarPanda name="Welcome jungle" size="lg" />
          <AvatarPanda name="Welcome jungle" size="xl" />
          <AvatarPanda name="Welcome jungle" size="xxl" />
          <AvatarPanda color="warning-500" fontSize="20px" h="130px" name="Custom" w="130px" />
        </Wrapper>
      </styled.div>
    </div>
  )
}
