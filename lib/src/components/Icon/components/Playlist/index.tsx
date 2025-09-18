import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const PlaylistIcon = (props: IconProps) => {
  return <Icon alt="Playlist" content={content} {...props} />
}
