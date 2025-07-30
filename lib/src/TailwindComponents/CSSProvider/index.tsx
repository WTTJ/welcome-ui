import type React from 'react'

import './styles.css'

export const TailwindProvider: React.FC<React.PropsWithChildren> = ({ children }) => children

TailwindProvider.displayName = 'TailwindProvider'
