import * as React from 'react'
import { Flex } from '@welcome-ui/flex'
import { Avatar } from '@welcome-ui/avatar'
import { Text } from '@welcome-ui/text'
import { Accordion, useAccordion } from '@welcome-ui/accordion'

const Example = () => {
  const accordion = useAccordion()

  return (
    <Accordion
      mt="md"
      store={accordion}
      title={
        <Flex alignItems="center" display="flex">
          <Avatar mr="sm" name="accordion" />
          <Text as="h3" fontWeight="bold" m="0">
            Accordion title
          </Text>
        </Flex>
      }
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat.
    </Accordion>
  )
}

export default Example
