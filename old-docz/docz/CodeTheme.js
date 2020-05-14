import themeDark from 'prism-react-renderer/themes/vsDark'
import themeLight from 'prism-react-renderer/themes/github'

export function getTheme() {
  const themeWUI = typeof window !== 'undefined' && localStorage.getItem('themeWUI')
  return themeWUI === 'dark' ? themeDark : themeLight
}
