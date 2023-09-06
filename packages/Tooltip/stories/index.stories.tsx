import React from 'react'
import { styled } from '@welcome-ui/panda/jsx'
import { TextPanda } from '@welcome-ui/text'
import { ButtonPanda } from '@welcome-ui/button'

import { TooltipPanda } from '../src'

const Wrapper = ({ children }) => (
  <styled.div alignItems="center" display="flex" flexWrap="wrap" gap="md">
    {children}
  </styled.div>
)

export const Tooltip = () => {
  return (
    <div>
      <styled.div my="xxl">
        <TextPanda mb="md" variant="h3">
          Usage
        </TextPanda>
        <Wrapper>
          <TooltipPanda content="Tooltip">
            <ButtonPanda>Show a beautiful tooltip 🔥</ButtonPanda>
          </TooltipPanda>
        </Wrapper>
      </styled.div>
      <styled.div my="xxl">
        <TextPanda mb="md" variant="h3">
          Fixed
        </TextPanda>
        <Wrapper>
          <TooltipPanda content="Tooltip" fixed>
            <ButtonPanda>Show a beautiful tooltip 🔥</ButtonPanda>
          </TooltipPanda>
        </Wrapper>
      </styled.div>
      <styled.div my="xxl">
        <TextPanda mb="md" variant="h3">
          Placement
        </TextPanda>
        <Wrapper>
          <TooltipPanda content="TooltipPanda" fixed placement="top-start">
            <ButtonPanda size="sm" w={120}>
              <span>top-start &#8598; </span>
            </ButtonPanda>
          </TooltipPanda>
          <TooltipPanda content="TooltipPanda" fixed placement="top">
            <ButtonPanda size="sm" w={120}>
              <span>top &#8593; </span>
            </ButtonPanda>
          </TooltipPanda>
          <TooltipPanda content="TooltipPanda" fixed placement="top-end">
            <ButtonPanda size="sm" w={120}>
              <span>top-end &#8599; </span>
            </ButtonPanda>
          </TooltipPanda>
          <TooltipPanda content="TooltipPanda" fixed placement="bottom-start">
            <ButtonPanda size="sm" w={120}>
              <span>bottom-start &#8601; </span>
            </ButtonPanda>
          </TooltipPanda>
          <TooltipPanda content="TooltipPanda" fixed placement="bottom">
            <ButtonPanda size="sm" w={120}>
              <span>bottom &#8595; </span>
            </ButtonPanda>
          </TooltipPanda>
          <TooltipPanda content="TooltipPanda" fixed placement="bottom-end">
            <ButtonPanda size="sm" w={120}>
              <span>bottom-end &#8600; </span>
            </ButtonPanda>
          </TooltipPanda>
          <TooltipPanda content="TooltipPanda" fixed placement="left-start">
            <ButtonPanda size="sm" w={120}>
              <span>left-start &#8598; </span>
            </ButtonPanda>
          </TooltipPanda>
          <TooltipPanda content="TooltipPanda" fixed placement="left">
            <ButtonPanda size="sm" w={120}>
              <span>left &#8592; </span>
            </ButtonPanda>
          </TooltipPanda>
          <TooltipPanda content="TooltipPanda" fixed placement="left-end">
            <ButtonPanda size="sm" w={120}>
              <span>left-end &#8601; </span>
            </ButtonPanda>
          </TooltipPanda>
          <TooltipPanda content="TooltipPanda" fixed placement="right-start">
            <ButtonPanda size="sm" w={120}>
              <span>right-start &#8599; </span>
            </ButtonPanda>
          </TooltipPanda>
          <TooltipPanda content="TooltipPanda" fixed placement="right">
            <ButtonPanda size="sm" w={120}>
              <span>right &#8594; </span>
            </ButtonPanda>
          </TooltipPanda>
          <TooltipPanda content="TooltipPanda" fixed placement="right-end">
            <ButtonPanda size="sm" w={120}>
              <span>right-end &#8600; </span>
            </ButtonPanda>
          </TooltipPanda>
        </Wrapper>
      </styled.div>
    </div>
  )
}
