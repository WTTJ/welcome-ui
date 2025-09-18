import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const HeadingIcon = (props: IconProps) => {
  return <Icon alt="Heading" content={content} {...props} />
}
