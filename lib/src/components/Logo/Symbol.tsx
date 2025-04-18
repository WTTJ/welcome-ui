import { useTheme } from '@xstyled/styled-components'
import { forwardRef } from 'react'

import * as S from './styles'

import type { LogoProps } from '.'

export const Symbol = forwardRef<SVGSVGElement, LogoProps>((props, ref) => {
  const theme = useTheme()

  return (
    <S.Svg role="img" {...props} ref={ref} viewBox="0 0 100 100">
      <title>Welcome to the jungle symbol</title>
      <path
        d="M50 0C22.44 0 0 22.44 0 50s22.44 50 50 50 50-22.44 50-50S77.56 0 50 0Zm0 4.28c3.88 0 7.6.48 11.2 1.4C59.8 17.6 55.96 31 50 31c-5.96-.04-9.8-13.4-11.2-25.32 3.6-.92 7.32-1.4 11.2-1.4ZM30.12 8.8c2.8 11.48 11.48 25 19.84 25.04C58.32 33.84 67 20.28 69.8 8.8c2.28 1.12 4.44 2.4 6.52 3.84-4.4 10.36-14.16 25.04-26.36 25.4-12.24-.32-21.96-15-26.36-25.4 2.08-1.44 4.28-2.72 6.52-3.84ZM16.44 18.96C22.56 28.08 35.8 40.88 50 40.88c14.2 0 27.4-12.8 33.56-21.92 1.68 1.8 3.2 3.76 4.56 5.8C81.64 33.12 68.04 45.08 50 45.08s-31.64-12-38.12-20.32c1.36-2.04 2.92-4 4.56-5.8ZM50 95.72c-3.88 0-7.6-.48-11.2-1.4C40.2 82.4 44.04 69 50 69c5.96.04 9.8 13.4 11.2 25.32-3.6.92-7.32 1.4-11.2 1.4Zm19.88-4.52c-2.8-11.48-11.48-25-19.84-25.04-8.36 0-17.04 13.56-19.84 25.04-2.28-1.12-4.44-2.4-6.48-3.84 4.4-10.36 14.12-25.04 26.36-25.4 12.24.32 21.96 15 26.36 25.4a57.248 57.248 0 0 1-6.56 3.84Zm13.68-10.16C77.44 71.92 64.2 59.12 50 59.12c-14.2 0-27.44 12.8-33.56 21.92-1.68-1.8-3.2-3.76-4.56-5.8C18.36 66.88 31.96 54.92 50 54.92s31.64 12 38.12 20.32c-1.36 2.04-2.88 4-4.56 5.8ZM50 52.12c-16.52 0-32.36 5.68-42.68 14.28A45.587 45.587 0 0 1 4.28 50c0-5.8 1.08-11.32 3.04-16.4C17.64 42.2 33.48 47.88 50 47.88S82.32 42.2 92.68 33.6A45.587 45.587 0 0 1 95.72 50c0 5.8-1.08 11.32-3.04 16.4C82.32 57.8 66.52 52.12 50 52.12Z"
        fill={theme.colors['neutral-90']}
      />
    </S.Svg>
  )
})
