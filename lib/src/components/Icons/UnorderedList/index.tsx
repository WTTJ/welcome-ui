import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const UnorderedListIcon: React.FC<IconProps> = props => {
  return <Icon alt="UnorderedList" content={content} {...props} />
}
