---
name: DummyComponent
---

import { PropsTable } from 'docz'
import { StyledPlayground as Playground } from '../../../docz.styled'
import { DummyComponent } from './index'

# DummyComponent

## Properties

<PropsTable of={DummyComponent} />

## Examples

### Sizes

<Playground>
  <DummyComponent>default</DummyComponent>
  <DummyComponent size="sm">Small</DummyComponent>
  <DummyComponent size="md">Medium</DummyComponent>
</Playground>
