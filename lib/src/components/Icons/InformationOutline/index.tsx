import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const InformationOutlineIcon: React.FC<IconProps> = props => {
  return <Icon alt="InformationOutline" content={content} {...props} />
}
