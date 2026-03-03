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

export type ImageStampProps = ComponentPropsWithRef<'div'> &
  HTMLAttributes<HTMLDivElement> &
  ImageStampOptions

interface IconStampOptions extends StampOptions {
  name: IconName
  variant?: IconStampVariant
}

interface ImageStampOptions extends StampOptions {
  src: string
}

interface StampOptions {
  size?: 'lg' | 'md' | 'sm'
}
