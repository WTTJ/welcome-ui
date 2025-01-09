import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const LanguageIcon: React.FC<IconProps> = props => {
  return <Icon alt="Language" content={content} {...props} />
}
