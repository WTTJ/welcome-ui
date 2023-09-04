import React from 'react'
import { styled } from '@welcome-ui/panda/jsx'
import { TextPanda } from '@welcome-ui/text'
import { HeartIconPanda } from '@welcome-ui/icons'

import { AlertPanda } from '../src'

const Wrapper = ({ children }) => (
  <styled.div display="flex" flexDirection="column" gap="md">
    {children}
  </styled.div>
)

export const Alert = () => {
  return (
    <div>
      <styled.div my="xxl">
        <TextPanda mb="md" variant="h3">
          Variants
        </TextPanda>
        <Wrapper>
          <AlertPanda>
            <AlertPanda.Title>Default variant</AlertPanda.Title>
            <span>
              Nunc laoreet egestas nulla, et dapibus sem malesuada in. Suspendisse eleifend accumsan
              ultrices. Phasellus iaculis nisi sed dui ornare commodo. Nullam dapibus varius nibh a
              ornare.
            </span>
          </AlertPanda>
          <AlertPanda variant="error">
            <AlertPanda.Title>Error variant</AlertPanda.Title>
            <span>
              Nunc laoreet egestas nulla, et dapibus sem malesuada in. Suspendisse eleifend accumsan
              ultrices. Phasellus iaculis nisi sed dui ornare commodo. Nullam dapibus varius nibh a
              ornare.
            </span>
          </AlertPanda>
          <AlertPanda variant="warning">
            <AlertPanda.Title>Warning variant</AlertPanda.Title>
            <span>
              Nunc laoreet egestas nulla, et dapibus sem malesuada in. Suspendisse eleifend accumsan
              ultrices. Phasellus iaculis nisi sed dui ornare commodo. Nullam dapibus varius nibh a
              ornare.
            </span>
          </AlertPanda>
          <AlertPanda variant="success">
            <AlertPanda.Title>Success variant</AlertPanda.Title>
            <span>
              Nunc laoreet egestas nulla, et dapibus sem malesuada in. Suspendisse eleifend accumsan
              ultrices. Phasellus iaculis nisi sed dui ornare commodo. Nullam dapibus varius nibh a
              ornare.
            </span>
          </AlertPanda>
          <AlertPanda variant="info">
            <AlertPanda.Title>Info variant</AlertPanda.Title>
            <span>
              Nunc laoreet egestas nulla, et dapibus sem malesuada in. Suspendisse eleifend accumsan
              ultrices. Phasellus iaculis nisi sed dui ornare commodo. Nullam dapibus varius nibh a
              ornare.
            </span>
          </AlertPanda>
        </Wrapper>
      </styled.div>
      <styled.div my="xxl">
        <TextPanda mb="md" variant="h3">
          Sizes
        </TextPanda>
        <Wrapper>
          <AlertPanda>
            <AlertPanda.Title>Welcome to the jungle</AlertPanda.Title>
            <span>
              Nunc laoreet egestas nulla, et dapibus sem malesuada in. Suspendisse eleifend accumsan
              ultrices. Phasellus iaculis nisi sed dui ornare commodo. Nullam dapibus varius nibh a
              ornare.
            </span>
          </AlertPanda>
          <AlertPanda size="md">
            <AlertPanda.Title>Welcome to the jungle</AlertPanda.Title>
            <span>
              Nunc laoreet egestas nulla, et dapibus sem malesuada in. Suspendisse eleifend accumsan
              ultrices. Phasellus iaculis nisi sed dui ornare commodo. Nullam dapibus varius nibh a
              ornare.
            </span>
          </AlertPanda>
        </Wrapper>
      </styled.div>
      <styled.div my="xxl">
        <TextPanda mb="md" variant="h3">
          Alert.Title only
        </TextPanda>
        <Wrapper>
          <AlertPanda>
            <AlertPanda.Title>Welcome to the jungle</AlertPanda.Title>
          </AlertPanda>
          <AlertPanda icon={<HeartIconPanda />}>
            <AlertPanda.Title>Welcome to the jungle</AlertPanda.Title>
          </AlertPanda>
          <AlertPanda icon="😵">
            <AlertPanda.Title>Welcome to the jungle</AlertPanda.Title>
          </AlertPanda>
          <AlertPanda icon={null}>
            <AlertPanda.Title>Welcome to the jungle</AlertPanda.Title>
          </AlertPanda>
        </Wrapper>
      </styled.div>
      <styled.div my="xxl">
        <TextPanda mb="md" variant="h3">
          CTA
        </TextPanda>
        <Wrapper>
          <AlertPanda cta={<AlertPanda.Button variant="secondary">Button</AlertPanda.Button>}>
            <AlertPanda.Title>Welcome to the jungle</AlertPanda.Title>
            <span>
              Nunc laoreet egestas nulla, et dapibus sem malesuada in. Suspendisse eleifend accumsan
              ultrices. Phasellus iaculis nisi sed dui ornare commodo. Nullam dapibus varius nibh a
              ornare.
            </span>
          </AlertPanda>
          <AlertPanda cta={<AlertPanda.Button variant="secondary">Button</AlertPanda.Button>}>
            <AlertPanda.Title>Welcome to the jungle</AlertPanda.Title>
          </AlertPanda>
          <AlertPanda cta={<AlertPanda.Button variant="secondary">Button</AlertPanda.Button>}>
            <AlertPanda.Title>Welcome to the jungle</AlertPanda.Title>
          </AlertPanda>
        </Wrapper>
      </styled.div>
      <styled.div my="xxl">
        <TextPanda mb="md" variant="h3">
          Full Width
        </TextPanda>
        <Wrapper>
          <AlertPanda
            cta={<AlertPanda.Button variant="secondary">Button</AlertPanda.Button>}
            isFullWidth
          >
            <AlertPanda.Title>Welcome to the jungle</AlertPanda.Title>
          </AlertPanda>
        </Wrapper>
      </styled.div>
      <styled.div my="xxl">
        <TextPanda mb="md" variant="h3">
          Close Button
        </TextPanda>
        <Wrapper>
          <AlertPanda handleClose={() => alert('handleClose')}>
            <AlertPanda.Title>Welcome to the jungle</AlertPanda.Title>
            <span>
              Nunc laoreet egestas nulla, et dapibus sem malesuada in. Suspendisse eleifend accumsan
              ultrices. Phasellus iaculis nisi sed dui ornare commodo. Nullam dapibus varius nibh a
              ornare.
            </span>
          </AlertPanda>
        </Wrapper>
      </styled.div>
    </div>
  )
}
