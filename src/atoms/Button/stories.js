import React from 'react'
import { storiesOf } from '@storybook/react'

import { Button } from './index'

storiesOf('Button', module)
  .add('default', () => <Button>Hello Button</Button>)
  .add('with sizes', () => (
    <>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
      <Button size="full">Full</Button>
    </>
  ))
  .add('with modes', () => (
    <>
      <Button mode="light">Light</Button>
      <Button mode="dark">Dark</Button>
      <Button mode="linkedin">LinkedIn</Button>
      <Button mode="neutral">Neutral</Button>
      <Button mode="danger">Danger</Button>
      <Button mode="primary">Primary</Button>
    </>
  ))
  .add('with rounded corners', () => <Button borderRounded>Don't panic Janice</Button>)
  .add('with circle', () => <Button rounded>😹</Button>)
