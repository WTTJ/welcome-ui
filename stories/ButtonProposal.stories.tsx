import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'

import { ButtonProposal } from '../lib/src/TailwindComponents/ButtonProposal'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  component: ButtonProposal,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  title: 'Tailwind Button Proposal',
} satisfies Meta<typeof ButtonProposal>

export default meta

type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Primary: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
  },
}

export const PrimaryButtons: Story = {
  parameters: {
    pseudo: { active: '#active', focus: '#active', hover: '#hover' },
  },
  render: () => (
    <div id="buttonRoot">
      <ButtonProposal className="mr-3" variant="primary">
        Primary Button
      </ButtonProposal>
      <ButtonProposal className="mr-3" id="hover" variant="primary">
        Primary Button hover FIXME
      </ButtonProposal>
      <ButtonProposal id="active" variant="primary">
        Primary Button active
      </ButtonProposal>
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
