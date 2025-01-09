import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const PicturesIcon: React.FC<IconProps> = props => {
  return <Icon alt="Pictures" content={content} {...props} />
}
