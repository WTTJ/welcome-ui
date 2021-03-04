const path = require('path')

const { extendDefaultPlugins, optimize } = require('svgo')

const { FLAG_ICONS, readIconsFromAssets } = require('./utils')

const svgoConfig = {
  multipass: true,
  full: true,
  plugins: extendDefaultPlugins([
    {
      name: 'convertPathData',
      params: {
        noSpaceAfterFlags: false
      }
    },
    {
      name: 'convertTransform',
      active: false
    },
    {
      name: 'mergePaths',
      params: {
        noSpaceAfterFlags: false
      }
    }
  ])
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
      optimize(content, {
        path: `${ICONS_PATH}/${key}.svg`,
        ...svgoConfig
      })
    })

  // eslint-disable-next-line no-console
  console.log('Success'.green, 'Icons optimized')
  return files
}

readIconsFromAssets().then(optimizeIcons)
