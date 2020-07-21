/* eslint-disable react/no-multi-comp */
import React from 'react'
import { Text } from '@welcome-ui/text'

export const H1 = props => <Text m="0" variant="h1" {...props} />
export const H2 = props => <Text as="h2" mb="3xl" mt={50} variant="h3" {...props} />
export const H3 = props => <Text as="h3" mb="lg" mt="xl" variant="h4" {...props} />
