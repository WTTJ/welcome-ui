import React from 'react'
import { array, object, oneOf, string } from 'prop-types'
import { Tab as WUITab } from '@welcome-ui/tabs'

export const Tab = ({ children, tab }) => {
  return (
    <WUITab {...tab} id="basic">
      {children}
    </WUITab>
  )
}

Tab.displayName = 'Tab'

Tab.propTypes = {
  children: oneOf([array, object]),
  tab: string
}
