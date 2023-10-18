import { definePreset } from '@pandacss/dev'

const palette = {
  // primary
  dandelion: '#FFF8D9',
  cinnamon: '#FFE166',
  yellow: '#FFCD00',
  gold: '#E5B800',
  corn: '#997B00',
  cornsilk: '#735C00',
  olive: '#4C3D00',

  // nudes
  isabelline: '#F6F3EF',
  pampas: '#EFEAE4',
  timberwolf: '#D6D2CC',
  naturalgray: '#8F8C88',
  ironside: '#6B6966',
  dune: '#474543',
}

/**
 * @experimental panda version
 */
export const welcomePreset = definePreset({
  theme: {
    extend: {
      tokens: {
        colors: {
          'primary-100': { value: palette.dandelion },
          'primary-200': { value: palette.cinnamon },
          'primary-500': { value: palette.yellow },
          'primary-600': { value: palette.gold },
          'primary-700': { value: palette.corn },
          'primary-800': { value: palette.cornsilk },
          'primary-900': { value: palette.olive },
          'nude-100': { value: palette.isabelline },
          'nude-200': { value: palette.pampas },
          'nude-400': { value: palette.timberwolf },
          'nude-600': { value: palette.naturalgray },
          'nude-700': { value: palette.ironside },
          'nude-900': { value: palette.dune },
          underline: { value: palette.yellow },
        },
        radii: {
          sm: { value: '0px' },
          md: { value: '0px' },
          lg: { value: '0px' },
        },
        shadows: {
          sm: { value: 'none' },
          md: { value: 'none' },
        },
      },
    },
  },
})
