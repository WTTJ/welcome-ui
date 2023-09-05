import React from 'react'
import { styled } from '@welcome-ui/panda/jsx'
import { TextPanda } from '@welcome-ui/text'

import { ShapePanda } from '../src'

const Wrapper = ({ children }) => (
  <styled.div alignItems="center" display="flex" gap="md">
    {children}
  </styled.div>
)

export const Shape = () => {
  return (
    <div>
      <styled.div my="xxl">
        <TextPanda mb="md" variant="h3">
          Usage
        </TextPanda>
        <Wrapper>
          <ShapePanda h="150px" w="150px">
            <img src="https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80" />
          </ShapePanda>
        </Wrapper>
      </styled.div>
      <styled.div my="xxl">
        <TextPanda mb="md" variant="h3">
          Radius
        </TextPanda>
        <Wrapper>
          <ShapePanda borderRadius="lg" h="150px" w="150px">
            <img src="https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80" />
          </ShapePanda>
        </Wrapper>
      </styled.div>
      <styled.div my="xxl">
        <TextPanda mb="md" variant="h3">
          Shape
        </TextPanda>
        <Wrapper>
          <ShapePanda h="150px" shape="circle" w="150px">
            <img src="https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80" />
          </ShapePanda>
          <ShapePanda h="150px" shape="square" w="150px">
            <img src="https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80" />
          </ShapePanda>
          <ShapePanda h="50px" shape="circle" w="1px">
            <img src="https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80" />
          </ShapePanda>
        </Wrapper>
      </styled.div>
    </div>
  )
}
