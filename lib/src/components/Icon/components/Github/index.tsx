import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const GithubIcon = (props: IconProps) => {
  return <Icon alt="Github" content={content} {...props} />
}
