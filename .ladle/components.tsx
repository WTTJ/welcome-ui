import React from 'react'
import type { GlobalProvider } from '@ladle/react'
import { styled } from '@welcome-ui/panda/jsx'

import './style.css'
import '@welcome-ui/core/dist/index.css'

export const Provider: GlobalProvider = ({ children, globalState, storyMeta }) => <>{children}</>
