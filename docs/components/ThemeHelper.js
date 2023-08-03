import { Box } from '@welcome-ui/box'
import { Modal } from '@welcome-ui/modal'
import { Tab, useTab } from '@welcome-ui/tabs'
import { Text } from '@welcome-ui/text'
import { useEffect } from 'react'

import { useThemeContext } from '../context/theme'

import { ThemeConfiguration } from './ThemeConfiguration'

const KEY_CODE_HELP = 'KeyI'

export const ThemeHelper = ({ modalStore }) => {
  const currentTheme = useThemeContext()
  const tab = useTab({ orientation: 'vertical' })

  const categories = ['colors', 'space', 'screens', 'fontSizes', 'fontWeights']
  const [defaultTab] = categories
  const title = `${currentTheme.at(0).toUpperCase()}${currentTheme.slice(1)} Theme`

  useEffect(() => {
    const onKeyboardEvent = event => {
      if (event.metaKey && event.code === KEY_CODE_HELP) {
        modalStore.show()
      }
    }

    window.addEventListener('keydown', onKeyboardEvent)

    return () => window.removeEventListener('keydown', onKeyboardEvent)
  }, [])

  useEffect(() => {
    tab.select(defaultTab)
  }, [currentTheme])

  return (
    <>
      <Modal ariaLabel="theme configuration" store={modalStore} title={title}>
        <Modal.Content store={modalStore}>
          <Modal.Header subtitle="Documentation for the core theme entries" title={title} />
          <Modal.Body mt="xl">
            <Box display="flex">
              <Tab.List aria-label="Tabs" mr="lg" store={tab} w={200}>
                {categories.map(category => (
                  <Tab id={category} key={category} store={tab}>
                    {category}
                  </Tab>
                ))}
              </Tab.List>

              {categories.map(category => (
                <Tab.Panel key={category} store={tab} tabId={category}>
                  <Box
                    columnGap={16}
                    display="grid"
                    gridTemplateColumns="1fr 1fr"
                    mb="md"
                    rowGap={8}
                  >
                    <Text mb="md" mt="0" variant="h5">
                      Key
                    </Text>
                    <Text mb="md" mt="0" variant="h5">
                      Value
                    </Text>
                    <ThemeConfiguration category={category} />
                  </Box>
                </Tab.Panel>
              ))}
            </Box>
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </>
  )
}
