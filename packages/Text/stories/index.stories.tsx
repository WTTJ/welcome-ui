import React from 'react'
import { styled } from '@welcome-ui/panda/jsx'

import { TextPanda } from '../src'

const Wrapper = ({ children }) => <styled.div>{children}</styled.div>

export const Text = () => {
  return (
    <div>
      <styled.div my="xxl">
        <TextPanda mb="md" variant="h3">
          Typography
        </TextPanda>
        <Wrapper>
          <TextPanda m="0" variant="h0">
            Heading (h0)
          </TextPanda>
          <TextPanda m="0" variant="h1">
            Heading (h1)
          </TextPanda>
          <TextPanda m="0" variant="h2">
            Heading (h2)
          </TextPanda>
          <TextPanda m="0" variant="h3">
            Heading (h3)
          </TextPanda>
          <TextPanda m="0" variant="h4">
            Heading (h4)
          </TextPanda>
          <TextPanda m="0" variant="h5">
            Heading (h5)
          </TextPanda>
          <TextPanda m="0" variant="h6">
            Heading (h6)
          </TextPanda>
          <TextPanda m="0" variant="lg">
            TextPanda (lg)
          </TextPanda>
          <TextPanda m="0" variant="md">
            TextPanda (md)
          </TextPanda>
          <TextPanda m="0" variant="sm">
            TextPanda (sm)
          </TextPanda>
          <TextPanda m="0" variant="xs">
            TextPanda (xs)
          </TextPanda>
          <TextPanda m="0" variant="subtitle-md">
            Subtitle (md)
          </TextPanda>
          <TextPanda m="0" variant="subtitle-sm">
            Subtitle (sm)
          </TextPanda>
        </Wrapper>
      </styled.div>
      <styled.div my="xxl">
        <TextPanda mb="md" variant="h3">
          Bring your own tag (textStyle)
        </TextPanda>
        <Wrapper>
          <TextPanda mb="xl" mt="0" textStyle="h3" variant="md">
            p tag styled as an H3
          </TextPanda>
          <TextPanda textStyle="sm" variant="h1">
            H1 tag styled as a sm
          </TextPanda>
        </Wrapper>
      </styled.div>
      <styled.div my="xxl">
        <TextPanda mb="md" variant="h3">
          Truncation
        </TextPanda>
        <Wrapper>
          <TextPanda lines={1} my="md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis viverra lectus, vel
            tristique turpis. Vivamus magna nulla, elementum in feugiat feugiat, egestas eget nibh.
            Ut ac justo vitae dolor iaculis gravida. In eu nisl lorem. Cras eu mauris et tortor
            suscipit accumsan. Duis ullamcorper nisl a justo ultricies, eu consequat risus
            imperdiet. Phasellus at metus cursus, fringilla tortor eu, scelerisque quam. Donec
            efficitur porta elit ac malesuada.
          </TextPanda>
          <TextPanda lines={3} my="md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis viverra lectus, vel
            tristique turpis. Vivamus magna nulla, elementum in feugiat feugiat, egestas eget nibh.
            Ut ac justo vitae dolor iaculis gravida. In eu nisl lorem. Cras eu mauris et tortor
            suscipit accumsan. Duis ullamcorper nisl a justo ultricies, eu consequat risus
            imperdiet. Phasellus at metus cursus, fringilla tortor eu, scelerisque quam. Donec
            efficitur porta elit ac malesuada.
          </TextPanda>
          <TextPanda lines={Infinity} my="md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis viverra lectus, vel
            tristique turpis. Vivamus magna nulla, elementum in feugiat feugiat, egestas eget nibh.
            Ut ac justo vitae dolor iaculis gravida. In eu nisl lorem. Cras eu mauris et tortor
            suscipit accumsan. Duis ullamcorper nisl a justo ultricies, eu consequat risus
            imperdiet. Phasellus at metus cursus, fringilla tortor eu, scelerisque quam. Donec
            efficitur porta elit ac malesuada.
          </TextPanda>
          <TextPanda lines={3} my="md">
            Lorem ipsum dolor sit amet
          </TextPanda>
        </Wrapper>
      </styled.div>
    </div>
  )
}
