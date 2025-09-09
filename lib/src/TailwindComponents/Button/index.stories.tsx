import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'

import { Button as Button } from './index'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Button> = {
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  title: 'Button (Tailwind-compatible)',
}

export default meta

type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

const Wrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="flex flex-wrap gap-md" id="buttonRoot">
    {children}
  </div>
)

export const Primary: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
  },
}

export const PrimaryVariants: Story = {
  name: 'Variants/Primary (default)',
  parameters: {
    pseudo: { active: '#active', focus: '#active', hover: '#hover' },
  },
  render: () => (
    <Wrapper>
      <Button variant="primary">
        <i className="wui-icon-add wui-icon-font" data-wui-icon-font />
        Primary Button
        <i className="wui-icon-down wui-icon-font" data-wui-icon-font />
      </Button>
      <Button id="hover" variant="primary">
        Primary Button hover
      </Button>
      <Button id="active" variant="primary">
        Primary Button active
      </Button>
    </Wrapper>
  ),
}

export const SecondaryVariants: Story = {
  name: 'Variants/Secondary',
  parameters: {
    pseudo: { active: '#active', focus: '#active', hover: '#hover' },
  },
  render: () => (
    <Wrapper>
      <Button variant="secondary">Secondary Button</Button>
      <Button id="hover" variant="secondary">
        Secondary Button hover
      </Button>
      <Button id="active" variant="secondary">
        Secondary Button active
      </Button>
    </Wrapper>
  ),
}

export const TertiaryVariants: Story = {
  name: 'Variants/Tertiary',
  parameters: {
    pseudo: { active: '#active', focus: '#active', hover: '#hover' },
  },
  render: () => (
    <Wrapper>
      <Button variant="tertiary">Tertiary Button</Button>
      <Button id="hover" variant="tertiary">
        Tertiary Button hover
      </Button>
      <Button id="active" variant="tertiary">
        Tertiary Button active
      </Button>
    </Wrapper>
  ),
}

export const GhostVariants: Story = {
  name: 'Variants/Ghost',
  parameters: {
    pseudo: { active: '#active', focus: '#active', hover: '#hover' },
  },
  render: () => (
    <Wrapper>
      <Button variant="ghost">Ghost Button</Button>
      <Button id="hover" variant="ghost">
        Ghost Button hover
      </Button>
      <Button id="active" variant="ghost">
        Ghost Button active
      </Button>
    </Wrapper>
  ),
}

export const DangerButtons: Story = {
  name: 'Variants/Danger',
  render: () => (
    <Wrapper>
      <Button variant="primary-danger">Primary</Button>
      <Button variant="tertiary-danger">Tertiary</Button>
      <Button variant="ghost-danger">Ghost</Button>
    </Wrapper>
  ),
}

export const AIButtons: Story = {
  name: 'Variants/AI',
  render: () => (
    <Wrapper>
      <Button variant="primary-ai">Primary</Button>
      <Button variant="tertiary-ai">Tertiary</Button>
      <Button variant="ghost-ai">Ghost</Button>
    </Wrapper>
  ),
}

export const ButtonSizes: Story = {
  name: 'Sizes',
  render: () => (
    <Wrapper>
      <Button size="xs">ExtraSmall</Button>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </Wrapper>
  ),
}

export const CircularButtons: Story = {
  name: 'Shape circle',
  render: () => (
    <Wrapper>
      <Button shape="circle" size="xs">
        <i className="wui-icon-add wui-icon-font" data-wui-icon-font />
      </Button>
      <Button shape="circle" size="sm">
        <i className="wui-icon-add wui-icon-font" data-wui-icon-font />
      </Button>
      <Button shape="circle" size="md">
        <i className="wui-icon-add wui-icon-font" data-wui-icon-font />
      </Button>
      <Button shape="circle" size="lg">
        <i className="wui-icon-add wui-icon-font" data-wui-icon-font />
      </Button>
    </Wrapper>
  ),
}

export const SquareButtons: Story = {
  name: 'Shape square',
  render: () => (
    <Wrapper>
      <Button shape="square" size="xs">
        <i className="wui-icon-add wui-icon-font" data-wui-icon-font />
      </Button>
      <Button shape="square" size="sm">
        <i className="wui-icon-add wui-icon-font" data-wui-icon-font />
      </Button>
      <Button shape="square" size="md">
        <i className="wui-icon-add wui-icon-font" data-wui-icon-font />
      </Button>
      <Button shape="square" size="lg">
        <i className="wui-icon-add wui-icon-font" data-wui-icon-font />
      </Button>
    </Wrapper>
  ),
}

export const DisabledButton: Story = {
  name: 'Disabled',
  render: () => (
    <Wrapper>
      <Button disabled>Disabled</Button>
    </Wrapper>
  ),
}

export const ButtonWithTailwindOverrides: Story = {
  name: 'With Tailwind overrides',
  render: () => (
    <Wrapper>
      <Button className="bg-red-500 text-white px-5xl">Button with overrides</Button>
    </Wrapper>
  ),
}
