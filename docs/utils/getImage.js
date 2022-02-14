import getConfig from 'next/config'

export const getImage = path => {
  const { publicRuntimeConfig } = getConfig()

  return publicRuntimeConfig.basePath ? `${publicRuntimeConfig.basePath}${path}` : path
}
