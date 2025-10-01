import { Box } from 'welcome-ui-old/Box'
import { Text } from 'welcome-ui-new/Text'

import * as S from './styles'

export const MixedComponent = () => {
  return (
    <div>
      {/* External styled component */}
      <S.TopNav>
        <S.MenuButton>Menu</S.MenuButton>
      </S.TopNav>

      {/* Inline styled component */}
      <Box backgroundColor="primary-500" display="flex" mt="lg">
        <Text color="dark-90" fontSize="sm">
          Mixed component with both S.* and Box components
        </Text>
      </Box>
    </div>
  )
}
