import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const PdfIcon: React.FC<IconProps> = props => {
  return <Icon alt="Pdf" content={content} {...props} />
}
