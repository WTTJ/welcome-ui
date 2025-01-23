import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const ZapierIcon: React.FC<IconProps> = props => {
  return <Icon alt="Zapier" content={content} {...props} />
}
