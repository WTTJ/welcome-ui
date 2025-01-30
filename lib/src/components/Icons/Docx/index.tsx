import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const DocxIcon: React.FC<IconProps> = props => {
  return <Icon alt="Docx" content={content} {...props} />
}
