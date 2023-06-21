import { Box, BoxPanda } from '@welcome-ui/box'

// todo autocomplete BoxPanda

export const App = () => {
  return (
    <div>
      <Box
        alignItems="center"
        backgroundColor="primary-500"
        color="dark-900"
        display="flex"
        h="50px"
        justifyContent="center"
        mt="3xl"
      >
        Box
      </Box>
      <BoxPanda
        alignItems="center"
        backgroundColor="primary-500"
        color="dark-900"
        display="flex"
        h="50px"
        justifyContent="center"
        mt="3xl" // todo fixme
      >
        BoxPanda
      </BoxPanda>
    </div>
  )
}
