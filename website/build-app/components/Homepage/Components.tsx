'use client'
import NextLink from 'next/link'

import { Alert } from '@/components/Alert'
import { Avatar } from '@/components/Avatar'
import { Button } from '@/components/Button'
import { Field } from '@/components/Field'
import { Icon } from '@/components/Icon'
import { InputText } from '@/components/InputText'
import { Stepper } from '@/components/Stepper'
import { Tag } from '@/components/Tag'
import { Window } from '@/components/Window'

type ComponentProps = {
  children: React.ReactElement
  link: string
  title: string
}

const components: ComponentProps[] = [
  {
    children: (
      <div className="flex gap-md">
        <Tag>Default</Tag>
        <Tag variant="green">Success</Tag>
        <Tag variant="violet">Violet</Tag>
      </div>
    ),
    link: 'components/tag',
    title: 'Tag',
  },
  {
    children: (
      <Field hint="A hint" label="Label">
        <InputText icon={<Icon name="user-circle" />} placeholder="Placeholder" />
      </Field>
    ),
    link: 'components/field',
    title: 'Field',
  },
  {
    children: (
      <>
        <Icon name="basketball" size="lg" />
        <Icon name="basketball" size="xl" />
        <Icon name="basketball" size="xxl" />
      </>
    ),
    link: 'components/icons',
    title: 'Icons',
  },
  {
    children: (
      <div className="flex gap-md">
        <Avatar
          name="Welcome UI"
          src="https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
        />
        <Avatar name="Welcome UI" />
        <Avatar />
      </div>
    ),
    link: 'components/avatar',
    title: 'Avatar',
  },
  {
    children: (
      <Alert>
        <Alert.Title>Info variant</Alert.Title>
        <span>Nunc laoreet egestas nulla, et dapibus sem malesuada in</span>
      </Alert>
    ),
    link: 'components/alert',
    title: 'Alert',
  },
  {
    children: (
      <Stepper>
        <Stepper.Item isCompleted>Step 1</Stepper.Item>
        <Stepper.Separator />
        <Stepper.Item isOpen>Step 2</Stepper.Item>
        <Stepper.Separator />
        <Stepper.Item>Step 3</Stepper.Item>
      </Stepper>
    ),
    link: 'components/stepper',
    title: 'Stepper',
  },
]

const Component = ({ children, link, title }: ComponentProps) => {
  return (
    <Window as={NextLink} href={link}>
      <Window.Header>
        <Window.Header.Title title={title} />
      </Window.Header>
      <Window.Body className="flex h-220 items-center justify-center w-full py-md px-xl">
        {children}
      </Window.Body>
    </Window>
  )
}

export const Components = () => {
  return (
    <div>
      <div className="gap-lg grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        {components.map(component => (
          <Component key={component.title} {...component} />
        ))}
      </div>
      <Button as={NextLink} className="w-fit mt-xl" href="/components">
        <span>Explore components</span>
      </Button>
    </div>
  )
}
