import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const PdfIcon: React.FC<IconProps> = props => {
  return <Icon alt="Pdf" content={content} {...props} />
}
