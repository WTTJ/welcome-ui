import { Alert } from '../../lib/src/old/components/Alert'
import { Box } from '../../lib/src/old/components/Box'
import { IconsFont } from '../../lib/src/old/components/IconsFont'
import { Link } from '../../lib/src/old/components/Link'
import { Text } from '../../lib/src/old/components/Text'

const FormattedMessage = ({
  defaultMessage,
  id,
}: {
  defaultMessage: string
  id: string
}): React.ReactNode => <span id={id}>{defaultMessage}</span>

const signinPath = '/signin'

const LAYOUT_WIDTH = {
  normal: 400,
  terms: 560,
}

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
        h="max-content"
        justifyContent="center"
        maxWidth={480}
        minH="100%"
        w="40%"
      >
        <Box pt="3xl">
          <Link to={signinPath}>
            <IconsFont.Add h={58} />
          </Link>
        </Box>
        <Box
          alignItems="center"
          display="flex"
          flexDirection="column"
          flexGrow="1"
          justifyContent="center"
          maxWidth={420}
          pb="xl"
          px={{
            lg: '3xl',
            md: 'xl',
          }}
          w="100%"
        >
          <Text as="h2" mb="xxl" mt="0" variant="h3">
            This is my content
          </Text>
        </Box>
      </Box>
      <Box display="flex" flex="1" flexDirection="column">
        <Box
          alignItems="center"
          display="grid"
          flexGrow="1"
          maxW={LAYOUT_WIDTH['normal']}
          mx="auto"
          px="lg"
          w="100%"
        >
          <FormattedMessage defaultMessage="Terms of use" id="EBDrtq" />
        </Box>
        <Box display={{ md: 'none' }} mt="xl">
          <FormattedMessage defaultMessage="Terms of use" id="EBDrtq" />
        </Box>
      </Box>
    </Box>
    <Alert className="mb-xl" isFullWidth variant="danger">
      <Alert.Title>
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
