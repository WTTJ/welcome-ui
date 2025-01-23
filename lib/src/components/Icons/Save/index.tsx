import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const SaveIcon: React.FC<IconProps> = props => {
  return <Icon alt="Save" content={content} {...props} />
}
