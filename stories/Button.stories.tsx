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

export const PrimaryVariants: Story = {
  name: 'Variants/Primary',
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
        Primary Button hover
      </Button>
      <Button id="active" variant="primary">
        Primary Button active
      </Button>
    </div>
  ),
}

export const SecondaryVariants: Story = {
  name: 'Variants/Secondary',
  parameters: {
    pseudo: { active: '#active', focus: '#active' },
  },
  render: () => (
    <div id="buttonRoot">
      <Button className="mr-3" variant="secondary">
        Secondary Button
      </Button>
      <Button
        // This is a workaround because the hover peudo state is not compatible with Tailwind 4
        // https://github.com/storybookjs/storybook-addon-pseudo-states/issues/140
        className="mr-3 bg-(--backgroundColorHover)! border-(--borderColorHover)!"
        style={
          {
            '--backgroundColorHover': 'var(--color-neutral-70)',
            '--borderColorHover': 'var(--color-neutral-70)',
          } as CSSProperties
        }
        variant="secondary"
      >
        Secondary Button hover
      </Button>
      <Button id="active" variant="secondary">
        Secondary Button active
      </Button>
    </div>
  ),
}

export const TertiaryVariants: Story = {
  name: 'Variants/Tertiary',
  parameters: {
    pseudo: { active: '#active', focus: '#active' },
  },
  render: () => (
    <div id="buttonRoot">
      <Button className="mr-3" variant="tertiary">
        Tertiary Button
      </Button>
      <Button
        // This is a workaround because the hover peudo state is not compatible with Tailwind 4
        // https://github.com/storybookjs/storybook-addon-pseudo-states/issues/140
        className="mr-3 bg-(--backgroundColorHover)! border-(--borderColorHover)!"
        style={
          {
            '--backgroundColorHover':
              'color-mix(in oklab, var(--color-neutral-90) 10%, transparent)',
            '--borderColorHover': 'var(--color-neutral-90)',
          } as CSSProperties
        }
        variant="tertiary"
      >
        Tertiary Button hover
      </Button>
      <Button id="active" variant="tertiary">
        Tertiary Button active
      </Button>
    </div>
  ),
}

export const GhostVariants: Story = {
  name: 'Variants/Ghost',
  parameters: {
    pseudo: { active: '#active', focus: '#active' },
  },
  render: () => (
    <div id="buttonRoot">
      <Button className="mr-3" variant="ghost">
        Ghost Button
      </Button>
      <Button
        // This is a workaround because the hover peudo state is not compatible with Tailwind 4
        // https://github.com/storybookjs/storybook-addon-pseudo-states/issues/140
        className="mr-3 bg-(--backgroundColorHover)! border-(--borderColorHover)!"
        style={
          {
            '--backgroundColorHover':
              'color-mix(in oklab, var(--color-neutral-90) 10%, transparent)',
            '--borderColorHover': 'color-mix(in oklab, var(--color-blue-10) 40%, transparent)',
          } as CSSProperties
        }
        variant="ghost"
      >
        Ghost Button hover
      </Button>
      <Button id="active" variant="ghost">
        Ghost Button active
      </Button>
    </div>
  ),
}

export const DangerButtons: Story = {
  name: 'Variants/Danger',
  render: () => (
    <div id="buttonRoot">
      <Button className="mr-3" variant="primary-danger">
        Primary
      </Button>
      <Button className="mr-3" variant="tertiary-danger">
        Tertiary
      </Button>
      <Button variant="ghost-danger">Ghost</Button>
    </div>
  ),
}

export const AIButtons: Story = {
  name: 'Variants/AI',
  render: () => (
    <div id="buttonRoot">
      <Button className="mr-3" variant="primary-ai">
        Primary
      </Button>
      <Button className="mr-3" variant="tertiary-ai">
        Tertiary
      </Button>
      <Button variant="ghost-ai">Ghost</Button>
    </div>
  ),
}

export const ButtonsSizes: Story = {
  name: 'Sizes',
  render: () => (
    <div id="buttonRoot">
      <Button className="mr-3" size="xs">
        ExtraSmall
      </Button>
      <Button className="mr-3" size="sm">
        Small
      </Button>
      <Button className="mr-3" size="md">
        Medium
      </Button>
      <Button className="mr-3" size="lg">
        Large
      </Button>
    </div>
  ),
}
