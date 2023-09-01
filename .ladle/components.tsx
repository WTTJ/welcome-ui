import React from 'react'
import type { GlobalProvider } from '@ladle/react'
import './style.css'
import { styled } from '@welcome-ui/panda/jsx'

export const Provider: GlobalProvider = ({ children, globalState, storyMeta }) => (
  <>
    <h1>Theme: {globalState.theme}</h1>
    <styled.h2 color="primary-500">Piech</styled.h2>
    {children}
  </>
)
