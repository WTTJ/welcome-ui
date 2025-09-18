import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const ItalicIcon = (props: IconProps) => {
  return <Icon alt="Italic" content={content} {...props} />
}
