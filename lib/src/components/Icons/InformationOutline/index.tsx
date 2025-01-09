import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const InformationOutlineIcon: React.FC<IconProps> = props => {
  return <Icon alt="InformationOutline" content={content} {...props} />
}
