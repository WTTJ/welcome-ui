import { useTheme } from 'styled-components'

//TODO Migrate shape, but to what?
import type { ShapeProps } from '@old/Shape'
import { Shape } from '@old/Shape'

export const Cover: React.FC<ShapeProps> = props => {
  const { modals } = useTheme()

  return (
    <div>
      <Shape {...modals.cover} {...props} />
    </div>
  )
}
