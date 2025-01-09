import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const FiltersIcon: React.FC<IconProps> = props => {
  return <Icon alt="Filters" content={content} {...props} />
}
