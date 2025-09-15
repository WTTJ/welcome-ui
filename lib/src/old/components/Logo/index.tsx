import type { BoxProps } from '@old/Box'

import { SolutionsSymbol } from './Solutions'
import { Symbol } from './Symbol'
import { Welcome as Logo } from './Welcome'
import { WelcomeUI as WelcomeUILogo } from './Wui'

export type LogoProps = Pick<BoxProps, 'h' | 'w'>

export { Logo, SolutionsSymbol, Symbol, WelcomeUILogo }
