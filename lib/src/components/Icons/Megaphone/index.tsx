import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const MegaphoneIcon: React.FC<IconProps> = props => {
  return <Icon alt="Megaphone" content={content} {...props} />
}
