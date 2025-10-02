/* eslint-disable no-console */
import { Button } from 'welcome-ui/Button'

const FormattedMessage = ({
  defaultMessage,
  id,
}: {
  defaultMessage: string
  id: string
}): React.ReactNode => <span id={id}>{defaultMessage}</span>

const SIGN_IN_PATH = '/signin'
const FALSE = false
const ON_CLICK = () => console.debug('submit')

export const ButtonComponent = () => {
  return (
    <form>
      <Button data-testid="my-draft-button" disabled={FALSE} onClick={ON_CLICK} size="sm">
        Published
      </Button>
      <Button as="a" dataTestId="my-button-1" disabled={false} mt="xxl" to={SIGN_IN_PATH} w="100%">
        <FormattedMessage defaultMessage="Back to Sign in" id="D7hbFB" />
      </Button>
      <Button dataTestId="my-button-2" onClick={() => console.debug('submit')} type="submit">
        <FormattedMessage defaultMessage="Back to Sign in" id="D7hbFB" />
      </Button>
    </form>
  )
}
