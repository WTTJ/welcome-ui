import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const ArrowLeftIcon = (props: IconProps) => {
  return <Icon alt="ArrowLeft" content={content} {...props} />
}
