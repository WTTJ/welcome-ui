import React from 'react'
import { styled } from '@welcome-ui/panda/jsx'
import { EarthIcon } from '@welcome-ui/icons'

import { ButtonPanda, Button as ButtonXstyled } from '../src'

export const Button = () => {
  return (
    <styled.div display="flex" gap="xs">
      <styled.div flex="1">
        <h1>xstyled</h1>
        <styled.div display="flex">
          <ButtonXstyled>Default</ButtonXstyled>
        </styled.div>
        <h3>Variants</h3>
        <styled.div display="flex" flexWrap="wrap" gap="sm">
          <ButtonXstyled variant="primary">Primary</ButtonXstyled>
          <ButtonXstyled variant="secondary">Secondary</ButtonXstyled>
          <ButtonXstyled variant="tertiary">Tertiary</ButtonXstyled>
          <ButtonXstyled variant="ghost">Ghost</ButtonXstyled>
          <ButtonXstyled variant="disabled">Disabled</ButtonXstyled>
        </styled.div>
        <h3>States</h3>
        <styled.div display="flex" flexWrap="wrap" gap="sm">
          <ButtonXstyled variant="primary-danger">Primary Danger</ButtonXstyled>
          <ButtonXstyled variant="primary-info">Primary Info</ButtonXstyled>
          <ButtonXstyled variant="primary-success">Primary Success</ButtonXstyled>
          <ButtonXstyled variant="primary-warning">Primary Warning</ButtonXstyled>
          <ButtonXstyled variant="secondary-danger">Secondary Danger</ButtonXstyled>
          <ButtonXstyled variant="secondary-info">Secondary Info</ButtonXstyled>
          <ButtonXstyled variant="secondary-success">Secondary Success</ButtonXstyled>
          <ButtonXstyled variant="secondary-warning">Secondary Warning</ButtonXstyled>
        </styled.div>
        <h3>Sizes</h3>
        <styled.div display="flex" flexWrap="wrap" gap="sm">
          <ButtonXstyled size="xxs">xxs</ButtonXstyled>
          <ButtonXstyled size="xs">xs</ButtonXstyled>
          <ButtonXstyled size="sm">sm</ButtonXstyled>
          <ButtonXstyled size="md">md</ButtonXstyled>
          <ButtonXstyled size="lg">lg</ButtonXstyled>
        </styled.div>
        <h3>Shapes</h3>
        <styled.div display="flex" flexWrap="wrap" gap="sm">
          <ButtonXstyled shape="circle">circle</ButtonXstyled>
          <ButtonXstyled shape="square">square</ButtonXstyled>
        </styled.div>
        <h3>Width</h3>
        <styled.div display="flex" flexWrap="wrap" gap="sm">
          <ButtonXstyled w="50%">50%</ButtonXstyled>
          <ButtonXstyled w="100%">100%</ButtonXstyled>
        </styled.div>
        <h3>Icons</h3>
        <styled.div display="flex" flexWrap="wrap" gap="sm">
          <ButtonXstyled>
            <EarthIcon />
            <span>Button</span>
          </ButtonXstyled>
          <ButtonXstyled variant="secondary">
            <EarthIcon />
            <span>Button</span>
          </ButtonXstyled>
          <ButtonXstyled variant="tertiary">
            <EarthIcon />
            <span>Button</span>
          </ButtonXstyled>
          <ButtonXstyled disabled>
            <EarthIcon />
            <span>Button</span>
          </ButtonXstyled>
        </styled.div>
      </styled.div>

      <styled.div flex="1">
        <h1>panda</h1>
        <styled.div display="flex">
          <ButtonPanda>Default</ButtonPanda>
        </styled.div>
        <h3>Variants</h3>
        <styled.div display="flex" flexWrap="wrap" gap="sm">
          <ButtonPanda variant="primary">Primary</ButtonPanda>
          <ButtonPanda variant="secondary">Secondary</ButtonPanda>
          <ButtonPanda variant="tertiary">Tertiary</ButtonPanda>
          <ButtonPanda variant="ghost">Ghost</ButtonPanda>
          <ButtonPanda disabled>Disabled</ButtonPanda>
        </styled.div>
        <h3>States</h3>
        <styled.div display="flex" flexWrap="wrap" gap="sm">
          <ButtonPanda variant="primary-danger">Primary Danger</ButtonPanda>
          <ButtonPanda variant="primary-info">Primary Info</ButtonPanda>
          <ButtonPanda variant="primary-success">Primary Success</ButtonPanda>
          <ButtonPanda variant="primary-warning">Primary Warning</ButtonPanda>
          <ButtonPanda variant="secondary-danger">Secondary Danger</ButtonPanda>
          <ButtonPanda variant="secondary-info">Secondary Info</ButtonPanda>
          <ButtonPanda variant="secondary-success">Secondary Success</ButtonPanda>
          <ButtonPanda variant="secondary-warning">Secondary Warning</ButtonPanda>
        </styled.div>
        <h3>Sizes</h3>
        <styled.div display="flex" flexWrap="wrap" gap="sm">
          <ButtonPanda size="xxs">xxs</ButtonPanda>
          <ButtonPanda size="xs">xs</ButtonPanda>
          <ButtonPanda size="sm">sm</ButtonPanda>
          <ButtonPanda size="md">md</ButtonPanda>
          <ButtonPanda size="lg">lg</ButtonPanda>
        </styled.div>
        <h3>Shapes</h3>
        <styled.div display="flex" flexWrap="wrap" gap="sm">
          <ButtonPanda shape="circle">circle</ButtonPanda>
          <ButtonPanda shape="square" size="md">
            square
          </ButtonPanda>
        </styled.div>
        <h3>Width</h3>
        <styled.div display="flex" flexWrap="wrap" gap="sm">
          <ButtonPanda w="50%">50%</ButtonPanda>
          <ButtonPanda w="100%">100%</ButtonPanda>
        </styled.div>
        <h3>Icons (not ready)</h3>
        <styled.div display="flex" flexWrap="wrap" gap="sm">
          <ButtonPanda>
            <EarthIcon />
            <span>Button</span>
          </ButtonPanda>
          <ButtonPanda variant="secondary">
            <EarthIcon />
            <span>Button</span>
          </ButtonPanda>
          <ButtonPanda variant="tertiary">
            <EarthIcon />
            <span>Button</span>
          </ButtonPanda>
          <ButtonPanda disabled>
            <EarthIcon />
            <span>Button</span>
          </ButtonPanda>
        </styled.div>
      </styled.div>
    </styled.div>
  )
}
