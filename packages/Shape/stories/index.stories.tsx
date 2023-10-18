import React from 'react'
import { styled } from '@welcome-ui/panda/jsx'

import { ShapePanda, Shape as ShapeXstyled } from '../src'

const img = (
  <img src="https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80" />
)

export const Shape = () => {
  return (
    <styled.div display="flex" gap="xs">
      <styled.div flex="1">
        <h1>xstyled</h1>
        <styled.div display="flex">
          <ShapeXstyled h="150px" w="150px">
            {img}
          </ShapeXstyled>
        </styled.div>
        <h3>Border radius</h3>
        <styled.div display="flex">
          <ShapeXstyled borderRadius="lg" h="150px" w="150px">
            {img}
          </ShapeXstyled>
        </styled.div>
        <h3>Shapes</h3>
        <styled.div display="flex">
          <ShapeXstyled h="150px" shape="square" w="150px">
            {img}
          </ShapeXstyled>
          <ShapeXstyled h="150px" shape="circle" w="150px">
            {img}
          </ShapeXstyled>
        </styled.div>
        <h3>Unequal sizes</h3>
        <styled.div display="flex">
          <ShapeXstyled h="1px" shape="square" w="100px">
            {img}
          </ShapeXstyled>
          <ShapeXstyled h="1px" shape="circle" w="100px">
            {img}
          </ShapeXstyled>
        </styled.div>
      </styled.div>
      <styled.div flex="1">
        <h1>panda</h1>
        <styled.div display="flex">
          <ShapePanda h="150px" w="150px">
            {img}
          </ShapePanda>
        </styled.div>
        <h3>Border radius</h3>
        <styled.div display="flex">
          <ShapePanda borderRadius="lg" h="150px" w="150px">
            {img}
          </ShapePanda>
        </styled.div>
        <h3>Shapes</h3>
        <styled.div display="flex">
          <ShapePanda h="150px" shape="square" w="150px">
            {img}
          </ShapePanda>
          <ShapePanda h="150px" shape="circle" w="150px">
            {img}
          </ShapePanda>
        </styled.div>
        <h3>Unequal sizes</h3>
        <styled.div display="flex">
          <ShapePanda h="1px" shape="square" w="100px">
            {img}
          </ShapePanda>
          <ShapePanda h="1px" shape="circle" w="100px">
            {img}
          </ShapePanda>
        </styled.div>
      </styled.div>
    </styled.div>
  )
}
