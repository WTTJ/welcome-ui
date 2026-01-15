import type { ComponentPropsWithRef, HTMLAttributes } from 'react'

import type { IconName } from '@/components/Icon/types'

export type IconStampProps = ComponentPropsWithRef<'div'> &
  HTMLAttributes<HTMLDivElement> &
  IconStampOptions

export type IconStampVariant =
  | 'blue'
  | 'brand'
  | 'green'
  | 'orange'
  | 'red'
  | 'teal'
  | 'violet'
  | 'warm'

interface IconStampOptions {
  name: IconName
  size?: 'lg' | 'md' | 'sm'
  variant?: IconStampVariant
}
