import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const CheckIcon = (props: IconProps) => {
  return <Icon alt="Check" content={content} {...props} />
}
