import type { Meta, StoryObj } from '@storybook/react-vite'
import type { CSSProperties } from 'react'
import { fn } from 'storybook/test'

import { Button } from '../lib/src/TailwindComponents/Button'

const meta = {
  args: { onClick: fn() },
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Tailwind Button',
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
  },
}

export const PrimaryButtons: Story = {
  parameters: {
    pseudo: { active: '#active', focus: '#active' },
  },
  render: () => (
    <div id="buttonRoot">
      <Button className="mr-3" variant="primary">
        Primary Button
      </Button>
      <Button
        // This is a workaround because the hover peudo state is not compatible with Tailwind 4
        // https://github.com/storybookjs/storybook-addon-pseudo-states/issues/140
        className="mr-3 bg-(--backgroundColorHover)! border-(--borderColorHover)!"
        style={
          {
            '--backgroundColorHover': 'var(--color-brand-30)',
            '--borderColorHover': 'var(--color-brand-30)',
          } as CSSProperties
        }
        variant="primary"
      >
        Primary Button hover FIXME
      </Button>
      <Button id="active" variant="primary">
        Primary Button active
      </Button>
    </div>
  ),
}

export const PrimaryDanger: Story = {
  args: {
    children: 'Button',
    variant: 'primary-danger',
  },
}

export const TertiaryDanger: Story = {
  args: {
    children: 'Button',
    variant: 'tertiary-danger',
  },
}

export const TertiaryAi: Story = {
  args: {
    children: 'Button',
    variant: 'tertiary-ai',
  },
}

export const Secondary: Story = {
  args: {
    children: 'Button',
    variant: 'secondary',
  },
}

export const Tertiary: Story = {
  args: {
    children: 'Button',
    variant: 'tertiary',
  },
}

export const Ghost: Story = {
  args: {
    children: 'Button',
    variant: 'ghost',
  },
}

export const GhostDanger: Story = {
  args: {
    children: 'Button',
    variant: 'ghost-danger',
  },
}

export const GhostAi: Story = {
  args: {
    children: 'Button',
    variant: 'ghost-ai',
  },
}

export const PrimaryAi: Story = {
  args: {
    children: 'Button',
    variant: 'primary-ai',
  },
}

export const Large: Story = {
  args: {
    children: 'Button',
    size: 'lg',
  },
}

export const Medium: Story = {
  args: {
    children: 'Button',
    size: 'md',
  },
}

export const Small: Story = {
  args: {
    children: 'Button',
    size: 'sm',
  },
}

export const ExtraSmall: Story = {
  args: {
    children: 'Button',
    size: 'xs',
  },
}
