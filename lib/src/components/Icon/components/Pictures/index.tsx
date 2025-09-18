import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const PicturesIcon = (props: IconProps) => {
  return <Icon alt="Pictures" content={content} {...props} />
}
