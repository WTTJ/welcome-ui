import { Alert } from '../../../../lib/src/old/components/Alert'
import { AspectRatio } from '../../../../lib/src/old/components/AspectRatio'
import { Badge } from '../../../../lib/src/old/components/Badge'
import { Box } from '../../../../lib/src/old/components/Box'
import { Breadcrumb } from '../../../../lib/src/old/components/Breadcrumb'
import { Button } from '../../../../lib/src/old/components/Button'
import { ButtonGroup } from '../../../../lib/src/old/components/ButtonGroup'
import { CloseButton } from '../../../../lib/src/old/components/CloseButton'
import { Field } from '../../../../lib/src/old/components/Field'
import { Grid } from '../../../../lib/src/old/components/Grid'
import { MenuIcon } from '../../../../lib/src/old/components/Icon'
import { InputText } from '../../../../lib/src/old/components/InputText'
import { Label } from '../../../../lib/src/old/components/Label'
import { Link } from '../../../../lib/src/old/components/Link'
import { Stack } from '../../../../lib/src/old/components/Stack'
import { Text } from '../../../../lib/src/old/components/Text'
import { Textarea } from '../../../../lib/src/old/components/Textarea'
import { Toggle } from '../../../../lib/src/old/components/Toggle'

import * as S from './styles'

const FormattedMessage = ({
  defaultMessage,
  id,
}: {
  defaultMessage: string
  id: string
}): React.ReactNode => <span id={id}>{defaultMessage}</span>

const register = (name: string, options?: object) => {
  return { name, ...options }
}

const SIGN_IN_PATH = '/signin'
const FALSE = false
const TRUE = true
// eslint-disable-next-line no-console
const ON_CLICK = () => console.debug('submit')

export const MixedComponent = ({ children, ...rest }: { children: React.ReactNode }) => {
  return (
    <div>
      {/* External styled components - complex patterns */}
      <S.TopNav {...rest}>
        {TRUE ? (
          <S.TopNavMobileSection>
            <S.MenuButton onClick={ON_CLICK}>
              <MenuIcon />
            </S.MenuButton>
            <Text className="ml-sm text-h4" variant="h5">
              Title
            </Text>
          </S.TopNavMobileSection>
        ) : null}
        {children ? <S.TopNavList>{children}</S.TopNavList> : null}
      </S.TopNav>

      {/* External styled components - simple patterns */}
      <S.Wrapper variant="primary">
        <S.Card elevated>
          <Text>Simple styled component content</Text>
        </S.Card>
      </S.Wrapper>

      {/* Mixed inline styled components from Component1.tsx */}
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
        <Link as={Button} to={SIGN_IN_PATH}>
          <Text as="h1" fontSize="h3" mt="md" variant="h4">
            <FormattedMessage defaultMessage="Terms of use" id="EBDrtq" />
          </Text>
        </Link>
        <Text as="span" color="dark-50" fontSize="sm" mt="auto" textAlign="center">
          <FormattedMessage defaultMessage="© 2024 Acme Corp. All rights reserved." id="8XKXo+" />
        </Text>
      </Box>

      <Grid columns={2} gutter="sm"></Grid>
      <Stack flex={1} gap="xxl"></Stack>
      <Stack alignItems="center" direction="row" spacing="xxs"></Stack>

      <Alert
        actions={
          <>
            <Alert.Button mb="sm">
              <FormattedMessage defaultMessage="Please sign in with provider" id="5nmpcx" />
            </Alert.Button>
            <Alert.SecondaryButton mb="sm">
              <FormattedMessage defaultMessage="Please sign in with provider" id="5nmpcx" />
            </Alert.SecondaryButton>
          </>
        }
        isFullWidth
        mb="lg"
        variant="danger"
      >
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

      <AspectRatio flex="1" maxH={{ _: 160, md: 80 }} maxW={{ _: '100%', md: '128' }}>
        <Box
          alt="video_thumbnail"
          as="img"
          borderRadius="md"
          loading="lazy"
          src="https://via.placeholder.com/160"
        />
      </AspectRatio>

      <Badge ml="sm" size="sm" variant="primary">
        14
      </Badge>

      <Breadcrumb mb="lg" separator=">">
        <Breadcrumb.Item href="/" mb="xl">
          Introduction
        </Breadcrumb.Item>
        <Breadcrumb.Item mb="xl">Disabled</Breadcrumb.Item>
        <Breadcrumb.Item mb="xl">Breadcrumb</Breadcrumb.Item>
      </Breadcrumb>

      <ButtonGroup>
        <Button data-testid="my-draft-button" disabled={FALSE} onClick={ON_CLICK} size="sm">
          Published
        </Button>
      </ButtonGroup>

      <CloseButton backgroundColor="neutral-90" border="none" />

      <form>
        <Field error="my error message" label="Email" my="lg" required>
          <Label alignItems="center" mb="sm" required={FALSE}></Label>
          <InputText
            autoFocus
            dataTestId="wa-forgot-input-email"
            name="email"
            {...register('email', {
              pattern: 'This field has invalid format',
              required: 'This field is required',
              value: /fish/,
            })}
          />
        </Field>
        <Textarea mt="md" name="i18n_description_en" {...register('i18n_description_en')} />
        <Toggle
          checked={FALSE}
          display="inline-flex"
          // eslint-disable-next-line no-console
          onClick={() => console.debug()}
          {...register('email', {
            pattern: 'This field has invalid format',
            required: 'This field is required',
            value: /fish/,
          })}
        />
        <Button
          as="a"
          dataTestId="my-button-1"
          disabled={false}
          mt="xxl"
          to={SIGN_IN_PATH}
          w="100%"
        >
          <FormattedMessage defaultMessage="Back to Sign in" id="D7hbFB" />
        </Button>
        {/* eslint-disable-next-line no-console */}
        <Button dataTestId="my-button-2" onClick={() => console.debug('submit')} type="submit">
          <FormattedMessage defaultMessage="Back to Sign in" id="D7hbFB" />
        </Button>
      </form>
    </div>
  )
}
