/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs')
const path = require('path')

const { optimize } = require('svgo')

const { FLAG_ICONS, readIconsFromAssets } = require('./utils')

const svgoConfig = {
  full: true,
  multipass: true,
  plugins: [
    {
      name: 'preset-default',
    },
    {
      name: 'convertPathData',
      params: {
        noSpaceAfterFlags: false,
      },
    },
    {
      active: false,
      name: 'convertTransform',
    },
    {
      name: 'mergePaths',
      params: {
        noSpaceAfterFlags: false,
      },
    },
    {
      active: false,
      name: 'removeViewBox',
    },
  ],
}

const ROOT_PATH = path.join(__dirname, '..')
const ICONS_PATH = path.join(ROOT_PATH, 'icons', '_assets')

// Write icons
const optimizeIcons = files => {
  // eslint-disable-next-line no-console
  console.log('Started'.blue, 'Optimizing icons'.grey)

  files
    .filter(({ key }) => !FLAG_ICONS.includes(key))
    .forEach(({ content, key }) => {
      // eslint-disable-next-line no-console
      console.log('Optimizing'.yellow, key)
      const svgPath = `${ICONS_PATH}/${key}.svg`
      const optimizedString = optimize(content, {
        path: svgPath,
        ...svgoConfig,
      }).data
      fs.writeFileSync(svgPath, optimizedString)
    })

  // eslint-disable-next-line no-console
  console.log('Success'.green, 'Icons optimized')
  return files
}

readIconsFromAssets().then(optimizeIcons)
