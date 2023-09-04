import React from 'react'
import { styled } from '@welcome-ui/panda/jsx'
import { TextPanda } from '@welcome-ui/text'

import { LinkPanda } from '../src'

const Wrapper = ({ children }) => <styled.div>{children}</styled.div>

export const Link = () => {
  return (
    <div>
      <styled.div my="xxl">
        <TextPanda mb="md" variant="h3">
          Variants
        </TextPanda>
        <Wrapper>
          <styled.div my="md">
            <LinkPanda href="#random-link-primary">primary link</LinkPanda>
          </styled.div>
          <styled.div my="md">
            <LinkPanda href="#random-link-secondary" variant="secondary">
              secondary linkPanda
            </LinkPanda>
          </styled.div>
          <styled.div my="md">
            <LinkPanda display="inline" href="#random-link-multiple-lines" variant="primary">
              Ipsum ipsam fugiat doloribus sit hic ducimus dolorem Aperiam unde adipisci deserunt
              corporis neque commodi. Quasi odit esse molestias reprehenderit incidunt Velit non
              expedita atque exercitationem enim! Quidem quasi nihil.
            </LinkPanda>
          </styled.div>
        </Wrapper>
        <TextPanda mb="md" variant="h3">
          External Link
        </TextPanda>
        <Wrapper>
          <LinkPanda href="#" isExternal target="_blank">
            External link
          </LinkPanda>
        </Wrapper>
      </styled.div>
    </div>
  )
}
