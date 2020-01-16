# Table | Welcome UI

Repaint html for `table` `tr` `td`... etc with a scrollable table 🎓

---

[![npm package](https://img.shields.io/npm/v/@welcome-ui/table/latest.svg)](https://www.npmjs.com/package/@welcome-ui/table) [![downloads npm](https://img.shields.io/npm/dw/@welcome-ui/table.svg)](https://www.npmjs.com/package/@welcome-ui/table) [![License](https://img.shields.io/npm/l/welcome-ui.svg)](https://github.com/WTTJ/welcome-ui/blob/master/LICENSE)

---

## Install

```bash
npm install @welcome-ui/table
```

or

```bash
yarn add @welcome-ui/table
```

## Use it

**Before to use, you need to [install core](http://welcome-ui.com/getting-started) 🚀**

Then

```js
import React from 'react'
import { Table } from '@welcome-ui/table'

export function YourComponent() {
  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Name</Table.Th>
          <Table.Th>Description</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        <Table.Tr>
          <Table.Td>Consectetur</Table.Td>
          <Table.Td>Lorem ipsum dolor sit amet</Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>Suspendisse</Table.Td>
          <Table.Td>Pellentesque a maximus magna</Table.Td>
        </Table.Tr>
      </Table.Tbody>
    </Table>
  )
}
```

😍 [Documentation and examples](http://welcome-ui.com/components/table) 😍

---

Welcome to the _Welcome UI library_ create by [Welcome to the jungle](https://www.welcometothejungle.co), a customizable design system with react • styled-components • styled-system and reakit.

Here you'll find all the core components you need to create a delightful webapp.

🌴 [Discover all the components](http://welcome-ui.com)
