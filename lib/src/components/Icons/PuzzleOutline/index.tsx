import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const PuzzleOutlineIcon: React.FC<IconProps> = props => {
  return <Icon alt="PuzzleOutline" content={content} {...props} />
}
