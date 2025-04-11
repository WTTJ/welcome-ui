import React from 'react'

import type { IconProps } from '@/Icon'
import { Icon } from '@/Icon'

import content from './content.json'

export const PdfIcon: React.FC<IconProps> = props => {
  return <Icon alt="Pdf" content={content} {...props} />
}
