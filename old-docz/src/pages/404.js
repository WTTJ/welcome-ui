import React from 'react'
import { Link } from 'docz'
import { ThemeProvider } from '@xstyled/styled-components'
import Helmet from 'react-helmet'

import { Button } from '../../../packages/Button/index'
import { GlobalStyle } from '../../../packages/Core/utils/base'
import { createTheme } from '../../../packages/Core/theme/core'
import { Text } from '../../../packages/Text/index'
import { Box } from '../../../packages/Box/index'

function NotFoundPage() {
  return (
    <ThemeProvider theme={createTheme()}>
      <GlobalStyle />
      <Helmet>
        <title>404 | Welcome UI</title>
      </Helmet>
      <Box
        left="50%"
        margin={0}
        position="absolute"
        style={{ transform: 'translate(-50%, -50%)' }}
        textAlign="center"
        top="50%"
      >
        <Text fontWeigth="bold" variant="h1">
          Oops 🙈
        </Text>
        <p>You just hit a route that doesn‘t exist... 👀</p>
        <Button as={Link} mt="xxl" to="/">
          Back to home
        </Button>
      </Box>
    </ThemeProvider>
  )
}

export default NotFoundPage
