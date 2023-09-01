import React from 'react'
import { styled } from '@welcome-ui/panda/jsx'
import { button } from '@welcome-ui/panda/recipes'
import { TextPanda } from '@welcome-ui/text'
import { EarthIconPanda, SunIconPanda } from '@welcome-ui/icons'

import { ButtonPanda } from '../src'

const Wrapper = ({ children }) => (
  <styled.div alignItems="center" display="flex" flexWrap="wrap" gap="md">
    {children}
  </styled.div>
)

const ButtonLink = styled('a', button)

export const Button = () => {
  return (
    <div>
      <styled.div my="xxl">
        <TextPanda mb="md" variant="h3">
          Variants
        </TextPanda>
        <Wrapper>
          <ButtonPanda variant="primary">Primary</ButtonPanda>
          <ButtonPanda variant="secondary">Secondary</ButtonPanda>
          <ButtonPanda variant="tertiary">Tertiary</ButtonPanda>
          <ButtonPanda variant="ghost">Ghost</ButtonPanda>
        </Wrapper>
      </styled.div>
      <styled.div my="xxl">
        <TextPanda mb="md" variant="h3">
          States
        </TextPanda>
        <Wrapper>
          <ButtonPanda variant="primary-success">Primary success</ButtonPanda>
          <ButtonPanda variant="primary-warning">Primary warning</ButtonPanda>
          <ButtonPanda variant="primary-danger">Primary danger</ButtonPanda>
          <ButtonPanda variant="primary-info">Primary info</ButtonPanda>
          <ButtonPanda variant="secondary-success">Secondary success</ButtonPanda>
          <ButtonPanda variant="secondary-warning">Secondary warning</ButtonPanda>
          <ButtonPanda variant="secondary-danger">Secondary danger</ButtonPanda>
          <ButtonPanda variant="secondary-info">Secondary info</ButtonPanda>
        </Wrapper>
      </styled.div>
      <styled.div my="xxl">
        <TextPanda mb="md" variant="h3">
          Format
        </TextPanda>
        <Wrapper>
          <ButtonPanda size="xxs">XX-small</ButtonPanda>
          <ButtonPanda size="xs">X-Small</ButtonPanda>
          <ButtonPanda size="sm">Small</ButtonPanda>
          <ButtonPanda size="md">Medium</ButtonPanda>
          <ButtonPanda size="lg">Large</ButtonPanda>
        </Wrapper>
      </styled.div>
      <styled.div my="xxl">
        <TextPanda mb="md" variant="h3">
          Disabled
        </TextPanda>
        <Wrapper>
          <ButtonPanda disabled>Disabled</ButtonPanda>
        </Wrapper>
      </styled.div>
      <styled.div my="xxl">
        <TextPanda mb="md" variant="h3">
          With icons
        </TextPanda>
        <Wrapper>
          <ButtonPanda>
            <EarthIconPanda />
            <span>Button</span>
          </ButtonPanda>
          <ButtonPanda variant="secondary">
            <EarthIconPanda />
            <span>Button</span>
          </ButtonPanda>
          <ButtonPanda variant="tertiary">
            <EarthIconPanda />
            <span>Button</span>
          </ButtonPanda>
          <ButtonPanda disabled>
            <EarthIconPanda />
            <span>Button</span>
          </ButtonPanda>
        </Wrapper>
      </styled.div>
      <styled.div my="xxl">
        <TextPanda mb="md" variant="h3">
          Shapes
        </TextPanda>
        <Wrapper>
          <ButtonPanda shape="square" size="xs">
            <EarthIconPanda />
          </ButtonPanda>
          <ButtonPanda shape="circle" size="xs">
            <EarthIconPanda />
          </ButtonPanda>
          <ButtonPanda shape="square" size="sm">
            <EarthIconPanda />
          </ButtonPanda>
          <ButtonPanda shape="circle" size="sm">
            <EarthIconPanda />
          </ButtonPanda>
          <ButtonPanda shape="square">
            <EarthIconPanda />
          </ButtonPanda>
          <ButtonPanda shape="circle">
            <EarthIconPanda />
          </ButtonPanda>
          <ButtonPanda shape="square" size="lg">
            <EarthIconPanda />
          </ButtonPanda>
          <ButtonPanda shape="circle" size="lg">
            <EarthIconPanda />
          </ButtonPanda>
        </Wrapper>
      </styled.div>
      <styled.div my="xxl">
        <TextPanda mb="md" variant="h3">
          Transform to a Link
        </TextPanda>
        <Wrapper>
          <ButtonLink
            href="https://www.welcometothejungle.com"
            rel="noopener nofollow"
            target="_blank"
          >
            <SunIconPanda />
            <span>Welcome</span>
          </ButtonLink>
        </Wrapper>
      </styled.div>
      <styled.div my="xxl">
        <TextPanda mb="md" variant="h3">
          Width
        </TextPanda>
        <Wrapper>
          <ButtonPanda w="100%">full width</ButtonPanda>
          <ButtonPanda w="50%">half width</ButtonPanda>
        </Wrapper>
      </styled.div>
      <styled.div my="xxl">
        <TextPanda mb="md" variant="h3">
          Radius
        </TextPanda>
        <Wrapper>
          <ButtonPanda>default</ButtonPanda>
          <ButtonPanda borderRadius="10px">10px</ButtonPanda>
        </Wrapper>
      </styled.div>
    </div>
  )
}
