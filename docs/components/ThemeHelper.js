import { Box } from '@welcome-ui/box'
import { Modal, useModalState } from '@welcome-ui/modal'
import { useThemeContext } from '../context/theme'

import { Tab, useTabState } from '@welcome-ui/tabs'
import { Text } from '@welcome-ui/text'
import { useEffect, useState } from 'react'

import { ThemeConfiguration } from './ThemeConfiguration'

const KEY_CODE_HELP = 'KeyI'

export function ThemeHelper() {
  const modal = useModalState()
  const currentTheme = useThemeContext()
  const [hasBeenHydrated, setHasBeenHydrated] = useState(false)
  const tabState = useTabState({ orientation: 'vertical' })

  const categories = ['space', 'screens', 'fontSizes', 'fontWeights']
  const [defaultTab] = categories
  const title = `${currentTheme.at(0).toUpperCase()}${currentTheme.slice(1)} theme configuration`

  // Workaround for hydration warning UI for Reakit dialog (fix in ariakit 2.0)
  useEffect(() => {
    setHasBeenHydrated(true)

    const onKeyboardEvent = event => {
      if (event.metaKey && event.code === KEY_CODE_HELP) modal.show()
    }

    window.addEventListener('keydown', onKeyboardEvent)

    return () => window.removeEventListener('keydown', onKeyboardEvent)
  }, [])

  useEffect(() => {
    tabState.select(defaultTab)
  }, [currentTheme])

  return (
    <>
      {hasBeenHydrated && (
        <Modal {...modal} ariaLabel="theme configuration" title={title}>
          <Modal.Content>
            <Box display="flex">
              <Tab.List w={200} mr="lg" aria-label="Tabs" {...tabState}>
                {categories.map(category => (
                  <Tab key={category} {...tabState} id={category}>
                    {category}
                  </Tab>
                ))}
              </Tab.List>

              {categories.map(category => (
                <Tab.Panel key={category} {...tabState} tabId={category}>
                  <Box
                    display="grid"
                    gridTemplateColumns="1fr 1fr"
                    rowGap={8}
                    columnGap={16}
                    mb="md"
                  >
                    <Text variant="h5" mb="md" mt="0">
                      Key
                    </Text>
                    <Text variant="h5" mb="md" mt="0">
                      Value
                    </Text>

                    <ThemeConfiguration category={category} />
                  </Box>
                </Tab.Panel>
              ))}
            </Box>
          </Modal.Content>
        </Modal>
      )}
    </>
  )
}
