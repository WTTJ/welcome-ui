import React from 'react'
import { styled } from '@welcome-ui/panda/jsx'

import { BadgePanda, Badge as BadgeXstyled } from '../src'

export const Badge = () => {
  return (
    <styled.div display="flex" gap="xs">
      <styled.div flex="1">
        <h1>xstyled</h1>
        <styled.div display="flex" gap="sm" my="lg">
          <BadgeXstyled>1</BadgeXstyled>
          <BadgeXstyled>Default</BadgeXstyled>
        </styled.div>
        <h3>Variants</h3>
        <styled.div display="flex" flexWrap="wrap" gap="sm" my="lg">
          <BadgeXstyled variant="default">1</BadgeXstyled>
          <BadgeXstyled variant="default">Primary</BadgeXstyled>
          <BadgeXstyled variant="primary">1</BadgeXstyled>
          <BadgeXstyled variant="primary">Primary</BadgeXstyled>
        </styled.div>
        <h3>Sizes</h3>
        <styled.div display="flex" flexWrap="wrap" gap="sm" my="lg">
          <BadgeXstyled size="sm">1</BadgeXstyled>
          <BadgeXstyled size="sm">sm</BadgeXstyled>
          <BadgeXstyled size="md">1</BadgeXstyled>
          <BadgeXstyled size="md">md</BadgeXstyled>
        </styled.div>
        <h3>Disabled</h3>
        <styled.div display="flex" flexWrap="wrap" gap="sm" my="lg">
          <BadgeXstyled disabled>default</BadgeXstyled>
          <BadgeXstyled disabled variant="primary">
            default
          </BadgeXstyled>
        </styled.div>
        <h3>Shapes</h3>
        <styled.div display="flex" flexWrap="wrap" gap="sm" my="lg">
          <BadgeXstyled shape="circle">1</BadgeXstyled>
          <BadgeXstyled shape="circle">100</BadgeXstyled>
          <BadgeXstyled shape="square">1</BadgeXstyled>
          <BadgeXstyled shape="square">100</BadgeXstyled>
        </styled.div>
        <h3>withNumberAbbreviation</h3>
        <styled.div display="flex" flexWrap="wrap" gap="sm" my="lg">
          <BadgeXstyled withNumberAbbreviation>{100}</BadgeXstyled>
        </styled.div>
      </styled.div>
      <styled.div flex="1">
        <h1>panda</h1>
        <styled.div display="flex" gap="sm" my="lg">
          <BadgePanda>1</BadgePanda>
          <BadgePanda>Default</BadgePanda>
        </styled.div>
        <h3>Variants</h3>
        <styled.div display="flex" flexWrap="wrap" gap="sm" my="lg">
          <BadgePanda variant="default">1</BadgePanda>
          <BadgePanda variant="default">Primary</BadgePanda>
          <BadgePanda variant="primary">1</BadgePanda>
          <BadgePanda variant="primary">Primary</BadgePanda>
        </styled.div>
        <h3>Sizes</h3>
        <styled.div display="flex" flexWrap="wrap" gap="sm" my="lg">
          <BadgePanda size="sm">1</BadgePanda>
          <BadgePanda size="sm">sm</BadgePanda>
          <BadgePanda size="md">1</BadgePanda>
          <BadgePanda size="md">md</BadgePanda>
        </styled.div>
        <h3>Disabled</h3>
        <styled.div display="flex" flexWrap="wrap" gap="sm" my="lg">
          <BadgePanda disabled>default</BadgePanda>
          <BadgePanda disabled variant="primary">
            default
          </BadgePanda>
        </styled.div>
        <h3>Shapes</h3>
        <styled.div display="flex" flexWrap="wrap" gap="sm" my="lg">
          <BadgePanda shape="circle">1</BadgePanda>
          <BadgePanda shape="circle">100</BadgePanda>
          <BadgePanda shape="square">1</BadgePanda>
          <BadgePanda shape="square">100</BadgePanda>
        </styled.div>
        <h3>withNumberAbbreviation</h3>
        <styled.div display="flex" flexWrap="wrap" gap="sm" my="lg">
          <BadgePanda withNumberAbbreviation>{100}</BadgePanda>
        </styled.div>
      </styled.div>
    </styled.div>
  )
}
