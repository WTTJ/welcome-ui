import { Box } from '@welcome-ui/box'
import { Text } from '@welcome-ui/text'
import { Fragment } from 'react'
import { useThemeConfigurationContext } from '../../context/themeConfiguration'

const FontWeightsContent = category => DisplayCategoryContent(category)

const FontSizesContent = category => DisplayCategoryContent(category, { shouldConvertToPx: true })

const SpacesContent = category => DisplayCategoryContent(category, { shouldConvertToPx: true })

const ScreensContent = category => DisplayCategoryContent(category, { unit: 'px' })

const ColorsContent = category => DisplayCategoryContent(category, { shouldShowColor: true })

const DisplayCategoryContent = ({ category }, config = { shouldConvertToPx: false, unit: '', shouldShowColor: false }) => {
  const themeConfiguration = useThemeConfigurationContext()

  return (
    <>
      {Object.entries(themeConfiguration[category]).map(([key, value], index) => (
        <Fragment key={`${key}_${index}`}>
          <Text variant="body2" color="secondary-red" fontWeight="bold" my="xs">
            {key}
          </Text>
          <Box display="flex" gap="md" mt="xs" my="xs">
          {config.shouldShowColor && (
              <Box
                w={30}
                h={10}
                mt="xs"
                backgroundColor={key}
                border={key.startsWith('light-') ? "1px solid" : 'none'}
                borderColor="dark-200"
              />
            )}
            <Text variant="body2" m="0">
              {value}
              {config.unit}
            </Text>
            {config.shouldConvertToPx && (
              <Text variant="body2" color="primary-50" fontWeight="bold" m="0">
                /* {themeConfiguration.toPx(value.replace('rem', ''))} */
              </Text>
            )}
          </Box>
        </Fragment>
      ))}
    </>
  )
}

const categoriesComponents = {
  colors: ColorsContent,
  fontSizes: FontSizesContent,
  fontWeights: FontWeightsContent,
  screens: ScreensContent,
  space: SpacesContent,
}

export function ThemeConfiguration({ category }) {
  const Component = categoriesComponents[category]

  return <Component category={category} />
}
