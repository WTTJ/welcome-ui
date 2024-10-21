import { BoxProps } from '@welcome-ui/box'

import { Symbol, SymbolYellow } from './Symbol'
import { Solutions as SolutionsLogo, SolutionsSymbol } from './Solutions'
import { WelcomeUI as WelcomeUILogo } from './Wui'
import { Welcome as Logo } from './Welcome'

export type LogoProps = Pick<BoxProps, 'w' | 'h'>

export { Logo, Symbol, SymbolYellow, SolutionsLogo, SolutionsSymbol, WelcomeUILogo }
