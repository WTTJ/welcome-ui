import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const LanguageIcon: React.FC<IconProps> = props => {
  return <Icon alt="Language" content={content} {...props} />
}
