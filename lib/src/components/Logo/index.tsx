import { Symbol } from './Symbol'
import { SolutionsSymbol } from './Solutions'
import { WelcomeUI as WelcomeUILogo } from './Wui'
import { Welcome as Logo } from './Welcome'

import { BoxProps } from '@/Box'

export type LogoProps = Pick<BoxProps, 'w' | 'h'>

export { Logo, Symbol, SolutionsSymbol, WelcomeUILogo }
