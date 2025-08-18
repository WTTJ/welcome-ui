import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'

import { Button } from '../lib/src/TailwindComponents/Button'
import buttonStyles from '../lib/src/TailwindComponents/Button/theme.module.css'

const meta = {
  args: {
    children: 'Default Button',
    disabled: false,
    onClick: fn(),
    shape: 'default',
    size: 'md',
    variant: 'primary',
  },
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Tailwind Button',
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: 'Button',
}

export const PrimaryVariants: Story = {
  name: 'Variants/Primary (default)',
  parameters: {
    pseudo: { active: '#active', focus: '#active', hover: '#hover' },
  },
  render: () => (
    <div className="flex flex-wrap gap-md" id="buttonRoot">
      <Button variant="primary">Primary Button</Button>
      <Button
        // This is a workaround because the hover peudo state is not compatible with Tailwind 4
        // https://github.com/storybookjs/storybook-addon-pseudo-states/issues/140
        className={`${buttonStyles['pseudo-hover']} `}
        id="hover"
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
    pseudo: { active: '#active', focus: '#active', hover: '#hover' },
  },
  render: () => (
    <div className="flex flex-wrap gap-md" id="buttonRoot">
      <Button variant="secondary">Secondary Button</Button>
      <Button
        // This is a workaround because the hover peudo state is not compatible with Tailwind 4
        // https://github.com/storybookjs/storybook-addon-pseudo-states/issues/140
        className={`${buttonStyles['pseudo-hover']} `}
        id="hover"
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
    <div className="flex flex-wrap gap-md" id="buttonRoot">
      <Button variant="tertiary">Tertiary Button</Button>
      <Button
        // This is a workaround because the hover peudo state is not compatible with Tailwind 4
        // https://github.com/storybookjs/storybook-addon-pseudo-states/issues/140
        className={`${buttonStyles['pseudo-hover']} `}
        id="hover"
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
    <div className="flex flex-wrap gap-md" id="buttonRoot">
      <Button variant="ghost">Ghost Button</Button>
      <Button
        // This is a workaround because the hover peudo state is not compatible with Tailwind 4
        // https://github.com/storybookjs/storybook-addon-pseudo-states/issues/140
        className={`${buttonStyles['pseudo-hover']} `}
        id="hover"
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
    <div className="flex flex-wrap gap-md" id="buttonRoot">
      <Button variant="primary-danger">Primary</Button>
      <Button variant="tertiary-danger">Tertiary</Button>
      <Button variant="ghost-danger">Ghost</Button>
    </div>
  ),
}

export const AIButtons: Story = {
  name: 'Variants/AI',
  render: () => (
    <div className="flex flex-wrap gap-md" id="buttonRoot">
      <Button variant="primary-ai">Primary</Button>
      <Button variant="tertiary-ai">Tertiary</Button>
      <Button variant="ghost-ai">Ghost</Button>
    </div>
  ),
}

export const ButtonSizes: Story = {
  name: 'Sizes',
  render: () => (
    <div className="flex flex-wrap gap-md" id="buttonRoot">
      <Button size="xs">ExtraSmall</Button>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
}

export const circularButtons: Story = {
  name: 'Shape circle',
  render: () => (
    <div className="flex flex-wrap gap-md" id="buttonRoot">
      <Button shape="circle" size="xs">
        xs
      </Button>
      <Button shape="circle" size="sm">
        sm
      </Button>
      <Button shape="circle" size="md">
        md
      </Button>
      <Button shape="circle" size="lg">
        lg
      </Button>
    </div>
  ),
}

export const squareButtons: Story = {
  name: 'Shape square',
  render: () => (
    <div className="flex flex-wrap gap-md" id="buttonRoot">
      <Button shape="square" size="xs">
        xs
      </Button>
      <Button shape="square" size="sm">
        sm
      </Button>
      <Button shape="square" size="md">
        md
      </Button>
      <Button shape="square" size="lg">
        lg
      </Button>
    </div>
  ),
}

export const DisabledButton: Story = {
  name: 'Disabled',
  render: () => (
    <div className="flex flex-wrap gap-md" id="buttonRoot">
      <Button disabled>Disabled</Button>
    </div>
  ),
}
