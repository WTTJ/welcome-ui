import React from 'react'
import { styled } from '@welcome-ui/panda/jsx'

import { TextPanda, Text as TextXstyled } from '../src'

export const Text = () => {
  return (
    <styled.div display="flex">
      <styled.div flex="1">
        <h1>xstyled</h1>
        <styled.div display="flex" gap="sm" my="lg">
          <TextXstyled>Default</TextXstyled>
        </styled.div>
        <h3>Variants</h3>
        <styled.div>
          <TextXstyled m="0" variant="h0">
            Heading (h0)
          </TextXstyled>
          <TextXstyled m="0" variant="h1">
            Heading (h1)
          </TextXstyled>
          <TextXstyled m="0" variant="h2">
            Heading (h2)
          </TextXstyled>
          <TextXstyled m="0" variant="h3">
            Heading (h3)
          </TextXstyled>
          <TextXstyled m="0" variant="h4">
            Heading (h4)
          </TextXstyled>
          <TextXstyled m="0" variant="h5">
            Heading (h5)
          </TextXstyled>
          <TextXstyled m="0" variant="h6">
            Heading (h6)
          </TextXstyled>
          <TextXstyled m="0" variant="lg">
            Text (lg)
          </TextXstyled>
          <TextXstyled m="0" variant="md">
            Text (md)
          </TextXstyled>
          <TextXstyled backgroundColor="tomato" m="0" variant="sm">
            Text (sm)
          </TextXstyled>
          <TextXstyled m="0" variant="xs">
            Text (xs)
          </TextXstyled>
          <TextXstyled m="0" variant="subtitle-md">
            Subtitle (md)
          </TextXstyled>
          <TextXstyled backgroundColor="olive" m="0" variant="subtitle-sm">
            Subtitle (sm)
          </TextXstyled>
        </styled.div>
        <h3>Truncation</h3>
        <styled.div>
          <TextXstyled lines={1} my="md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis viverra lectus, vel
            tristique turpis. Vivamus magna nulla, elementum in feugiat feugiat, egestas eget nibh.
            Ut ac justo vitae dolor iaculis gravida. In eu nisl lorem. Cras eu mauris et tortor
            suscipit accumsan. Duis ullamcorper nisl a justo ultricies, eu consequat risus
            imperdiet. Phasellus at metus cursus, fringilla tortor eu, scelerisque quam. Donec
            efficitur porta elit ac malesuada.
          </TextXstyled>
          <TextXstyled lines={3} my="md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis viverra lectus, vel
            tristique turpis. Vivamus magna nulla, elementum in feugiat feugiat, egestas eget nibh.
            Ut ac justo vitae dolor iaculis gravida. In eu nisl lorem. Cras eu mauris et tortor
            suscipit accumsan. Duis ullamcorper nisl a justo ultricies, eu consequat risus
            imperdiet. Phasellus at metus cursus, fringilla tortor eu, scelerisque quam. Donec
            efficitur porta elit ac malesuada.
          </TextXstyled>
          <TextXstyled lines={Infinity} my="md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis viverra lectus, vel
            tristique turpis. Vivamus magna nulla, elementum in feugiat feugiat, egestas eget nibh.
            Ut ac justo vitae dolor iaculis gravida. In eu nisl lorem. Cras eu mauris et tortor
            suscipit accumsan. Duis ullamcorper nisl a justo ultricies, eu consequat risus
            imperdiet. Phasellus at metus cursus, fringilla tortor eu, scelerisque quam. Donec
            efficitur porta elit ac malesuada.
          </TextXstyled>
          <TextXstyled lines={3} my="md">
            Lorem ipsum dolor sit amet
          </TextXstyled>
        </styled.div>
      </styled.div>
      <styled.div flex="1">
        <h1>panda</h1>
        <styled.div display="flex" gap="sm" my="lg">
          <TextPanda>Default</TextPanda>
        </styled.div>
        <h3>Variants</h3>
        <styled.div>
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
            Text (lg)
          </TextPanda>
          <TextPanda m="0" variant="md">
            Text (md)
          </TextPanda>
          <TextPanda backgroundColor="tomato" m="0" variant="sm">
            Text (sm)
          </TextPanda>
          <TextPanda m="0" variant="xs">
            Text (xs)
          </TextPanda>
          <TextPanda m="0" variant="subtitle-md">
            Subtitle (md)
          </TextPanda>
          <TextPanda backgroundColor="olive" m="0" variant="subtitle-sm">
            Subtitle (sm)
          </TextPanda>
        </styled.div>
        <h3>Truncation</h3>
        <styled.div>
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
        </styled.div>
      </styled.div>
    </styled.div>
  )
}
