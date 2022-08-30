import { Box } from '@welcome-ui/box'
import { Text } from '@welcome-ui/text'
import { Fragment } from 'react'
import { useThemeConfigurationContext } from '../../context/themeConfiguration'

const FontWeightsContent = category => DisplayCategoryContent(category)

const FontSizesContent = category => DisplayCategoryContent(category, { shouldConvertToPx: true })

const SpacesContent = category => DisplayCategoryContent(category, { shouldConvertToPx: true })

const ScreensContent = category => DisplayCategoryContent(category, { unit: 'px' })

const DisplayCategoryContent = ({ category }, config = { shouldConvertToPx: false, unit: '' }) => {
  const themeConfiguration = useThemeConfigurationContext()

  return (
    <>
      {Object.entries(themeConfiguration[category]).map(([key, value], index) => (
        <Fragment key={`${key}_${index}`}>
          <Text variant="body2" color="sub.3" fontWeight="bold" my="xs">
            {key}
          </Text>
          <Box display="flex" gap="md" mt="xs" my="xs">
            <Text variant="body2" m="0">
              {value}
              {config.unit}
            </Text>
            {config.shouldConvertToPx && (
              <Text variant="body2" color="primary.600" fontWeight="bold" m="0">
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
  fontSizes: FontSizesContent,
  fontWeights: FontWeightsContent,
  space: SpacesContent,
  screens: ScreensContent,
}

export function ThemeConfiguration({ category }) {
  const Component = categoriesComponents[category]

  return <Component category={category} />
}
