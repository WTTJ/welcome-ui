# @welcome-ui/icons

The [Icons](https://welcome-ui.com/components/icons) component from [@welcome-ui](https://welcome-ui.com).

![npm bundle size](https://img.shields.io/bundlephobia/minzip/@welcome-ui/icons) [![License](https://img.shields.io/npm/l/welcome-ui.svg)](https://github.com/WTTJ/welcome-ui/blob/master/LICENSE) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-mediumspringgreen.svg)](ttps://github.com/WTTJ/welcome-ui/blob/master/CONTRIBUTING.mdx)

## Installation

    yarn add @welcome-ui/icons

## Import

    import { ActionIcon } from '@welcome-ui/icons.actions'
    import * as Icons from '@welcome-ui/icons'

## Documentation

See the [documentation](https://welcome-ui.com/components/icons) or [package source](https://github.com/WTTJ/welcome-ui/tree/master/icons) for more details.

## How to add icons in welcome-ui (from abstract)

1.  Download the svg from abstract

2.  Use [svgomg](https://jakearchibald.github.io/svgomg/) to upload the svg you just downloaded

3.  Deactivate the options `Round/rewrite paths` and `Round/rewrite tansforms`

4.  Download the optimized svg and save it in the `icons/_assets/` folder using snake_case (repeat steps 1. 2. 3. and 4. for each icon you want to add)

5.  Make sure that the `fill` attribute of your svg is set to `currentColor` (for monochrome icons)

6.  Run `yarn pre-build`

7.  Run `yarn build:icons`

8.  Run `yarn build`

9.  Run `yarn`

10. Add your new icon(s) in the doc for `Icons` and `IconsFont` respectively in `docs/pages/components/icons.mdx` and `docs/pages/components/icons-font.mdx`

11. Start/Restart your front server

12. Go fetch a 🍺, you're done!
