import { Alert } from '../../../lib/src/old/components/Alert'
import { Box } from '../../../lib/src/old/components/Box'
import { Grid } from '../../../lib/src/old/components/Grid'
import { IconsFont } from '../../../lib/src/old/components/IconsFont'
import { Link } from '../../../lib/src/old/components/Link'
import { Stack } from '../../../lib/src/old/components/Stack'
import { Text } from '../../../lib/src/old/components/Text'

const FormattedMessage = ({
  defaultMessage,
  id,
}: {
  defaultMessage: string
  id: string
}): React.ReactNode => <span id={id}>{defaultMessage}</span>

const signinPath = '/signin'

// Usage examples
export const Example = () => (
  <>
    <Box display="flex" h="100%">
      <Box
        alignItems="center"
        as="aside"
        backgroundColor="beige-20"
        display={{ md: 'flex', xs: 'none' }}
        flexDirection="column"
        flexGrow="1"
        h="max-content"
        justifyContent="center"
        maxWidth={480}
        minH="100%"
        pb="xl"
        px={{
          lg: '3xl',
          md: 'xl',
        }}
        w="40%"
      >
        <Link to={signinPath}>
          <IconsFont.Add h={58} />
          <Text as="h1" mt="md" variant="h4">
            <FormattedMessage defaultMessage="Terms of use" id="EBDrtq" />
          </Text>
        </Link>
      </Box>
    </Box>
    <Grid columns={2} gutter="sm"></Grid>
    <Stack flex={1} gap="xxl"></Stack>
    <Stack alignItems="center" direction="row" spacing="xxs"></Stack>
    <Alert isFullWidth mx="auto" variant="danger">
      <Alert.Title mb="sm">
        <FormattedMessage defaultMessage="Please sign in with provider" id="5nmpcx" />
      </Alert.Title>
      <span>
        <FormattedMessage
          defaultMessage="Your organization enforces provider sign-in. Contact your administrator if you need help."
          id="TzKv+W"
        />
      </span>
    </Alert>
  </>
)
