import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const ZapierIcon: React.FC<IconProps> = props => {
  return <Icon alt="Zapier" content={content} {...props} />
}
