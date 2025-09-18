import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const PiechartIcon = (props: IconProps) => {
  return <Icon alt="Piechart" content={content} {...props} />
}
