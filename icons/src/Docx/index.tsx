import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const DocxIcon: React.FC<IconProps> = props => {
  return <Icon alt="Docx" content={content} {...props} />
}
