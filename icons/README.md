## How to add icons in welcome-ui (from abstract)

 1. Download the svg from abstract

 2. Use [svgomg](https://jakearchibald.github.io/svgomg/) to upload the svg you just downloaded

 3. Deactivate the options `Round/rewrite paths` and `Round/rewrite tansforms`

 4. Download the optimized svg and save it in the `icons/_assets/` folder using snake_case (repeat steps 1. 2. 3. and 4. for each icon you want to add)

 5. Run `yarn pre-build`

 6. Run `yarn build:icons`

 7. Run `yarn build`

 8. Run `yarn`

 9. Add your new icon(s) in the doc for `icons` and `iconFont` respectively in `docs/pages/components/icon.mdx` and `docs/pages/components/icon-font.mdx`

 10. Start/Restart your front server

 11. Go fetch a beer, you're done!
