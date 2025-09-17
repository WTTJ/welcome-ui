import React from 'react'

import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const LinkedinIcon: React.FC<IconProps> = props => {
  return <Icon alt="Linkedin" content={content} {...props} />
}
