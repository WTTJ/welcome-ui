import { Accordion, useAccordion } from '@/components/Accordion'
import { Avatar } from '@/components/Avatar'
import { Text } from '@/components/Text'
import { classNames } from '@/utils'

const cx = classNames()

const Example = () => {
  const accordion = useAccordion()

  return (
    <Accordion
      className={cx('mt-md')}
      store={accordion}
      title={
        <div className={cx('items-center', 'flex')}>
          <Avatar className={cx('mr-sm', 'flex')} name="accordion" />
          <Text as="h5" variant="heading-sm-strong">
            Accordion title
          </Text>
        </div>
      }
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat.
    </Accordion>
  )
}

export default Example
