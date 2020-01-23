# Modal | Welcome UI

Modal from [Reakit](https://reakit.io/docs/dialog/) with a really nice theme 👀

---

[![npm package](https://img.shields.io/npm/v/@welcome-ui/modal/latest.svg)](https://www.npmjs.com/package/@welcome-ui/modal) [![downloads npm](https://img.shields.io/npm/dw/@welcome-ui/modal.svg)](https://www.npmjs.com/package/@welcome-ui/modal) [![License](https://img.shields.io/npm/l/welcome-ui.svg)](https://github.com/WTTJ/welcome-ui/blob/master/LICENSE)

---

## Install

```bash
npm install @welcome-ui/modal
```

or

```bash
yarn add @welcome-ui/modal
```

## Use it

**Before to use, you need to [install core](http://welcome-ui.com/getting-started) 🚀**

Then

```js
import React from 'react'
import { Modal, useModalState } from '@welcome-ui/modal'

export function YourComponent() {
  const modal = useModalState()

  return (
    <>
      <Button as={Modal.Trigger} {...modal}>
        Open modal
      </Button>
      <Modal {...modal} ariaLabel="example">
        <Modal.Cover height={200}>
          <img src="https://m.media-amazon.com/images/M/MV5BMzE0NzgyODIxN15BMl5BanBnXkFtZTgwNDU0NjU5NzE@._V1_SX1777_CR0,0,1777,994_AL_.jpg" />
        </Modal.Cover>
        <Modal.Content>
          Praesent sit amet quam ac velit faucibus dapibus. Quisque sapien ligula, rutrum quis
          aliquam nec, convallis sit amet erat. Mauris auctor blandit porta. In imperdiet rutrum
          nunc. Integer suscipit sodales ex, ut lobortis orci rutrum id. Vestibulum scelerisque,
          felis ut sollicitudin elementum, dolor nibh faucibus orci, eu aliquet felis diam sed eros.
          Donec eget sapien lacinia, viverra felis in, placerat urna. Vestibulum sed viverra orci.
          Donec id tellus eget dui porta lobortis ac eu metus. Praesent id ultricies odio. In hac
          habitasse platea dictumst. Sed lorem lacus, hendrerit non sodales id, consectetur quis
          magna. Nullam non lacinia risus, ut varius est. Nam nec pulvinar tellus, eu ultrices elit.
          Cras tincidunt et purus eu condimentum. Nunc vitae consequat nibh.
        </Modal.Content>
        <Modal.Footer>
          <Box width={1} display="flex" justifyContent="space-between">
            <Button variant="secondary">Lorem dolir</Button>
            <Button onClick={() => modal.hide()}>Close</Button>
          </Box>
        </Modal.Footer>
      </Modal>
    </>
  )
}
```

😍 [Documentation and examples](http://welcome-ui.com/components/modal) 😍

---

Welcome to the _Welcome UI library_ created by [Welcome to the jungle](https://www.welcometothejungle.com), a customizable design system with react • styled-components • styled-system and reakit.

Here you'll find all the core components you need to create a delightful webapp.

🌴 [Discover all the components](http://welcome-ui.com)
