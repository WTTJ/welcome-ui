import React from 'react'
import { styled } from '@welcome-ui/panda/jsx'
import { TextPanda } from '@welcome-ui/text'

import { BadgePanda } from '../src'

const Wrapper = ({ children }) => (
  <styled.div alignItems="center" display="flex" flexWrap="wrap" gap="md">
    {children}
  </styled.div>
)

export const Badge = () => {
  return (
    <div>
      <styled.div my="xxl">
        <TextPanda mb="md" variant="h3">
          Usage
        </TextPanda>
        <Wrapper>
          <BadgePanda>{1}</BadgePanda>
          <BadgePanda>New</BadgePanda>
          <BadgePanda shape="square" variant="primary">
            1
          </BadgePanda>
          <BadgePanda shape="square" variant="primary">
            New
          </BadgePanda>
        </Wrapper>
      </styled.div>
      <styled.div my="xxl">
        <TextPanda mb="md" variant="h3">
          Sizes
        </TextPanda>
        <Wrapper>
          <BadgePanda size="sm">sm</BadgePanda>
          <BadgePanda>md</BadgePanda>
        </Wrapper>
      </styled.div>
      <styled.div my="xxl">
        <TextPanda mb="md" variant="h3">
          Variants
        </TextPanda>
        <Wrapper>
          <BadgePanda>default</BadgePanda>
          <BadgePanda variant="primary">primary</BadgePanda>
        </Wrapper>
      </styled.div>
      <styled.div my="xxl">
        <TextPanda mb="md" variant="h3">
          Disabled
        </TextPanda>
        <Wrapper>
          <BadgePanda disabled>default</BadgePanda>
          <BadgePanda disabled variant="primary">
            primary
          </BadgePanda>
        </Wrapper>
      </styled.div>
      <styled.div my="xxl">
        <TextPanda mb="md" variant="h3">
          Shapes
        </TextPanda>
        <Wrapper>
          <BadgePanda>{1}</BadgePanda>
          <BadgePanda>{100}</BadgePanda>
          <BadgePanda shape="square">{1}</BadgePanda>
          <BadgePanda shape="square">{100}</BadgePanda>
        </Wrapper>
      </styled.div>
      <styled.div my="xxl">
        <TextPanda mb="md" variant="h3">
          WithNumberAbbreviation
        </TextPanda>
        <Wrapper>
          <BadgePanda withNumberAbbreviation>{100}</BadgePanda>
        </Wrapper>
      </styled.div>
    </div>
  )
}
