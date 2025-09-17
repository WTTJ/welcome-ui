import React from 'react'

import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const ExternalLinkIcon: React.FC<IconProps> = props => {
  return <Icon alt="ExternalLink" content={content} {...props} />
}
