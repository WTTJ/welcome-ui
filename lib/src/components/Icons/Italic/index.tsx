import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const ItalicIcon: React.FC<IconProps> = props => {
  return <Icon alt="Italic" content={content} {...props} />
}
