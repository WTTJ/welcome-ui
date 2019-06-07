import React, { useState } from 'react'

export const useGrowl = () => {
  const [content, setContent] = useState([])

  const addGrowl = notification => {
    const item = React.cloneElement(notification, { id: `growl-${content.length}` })
    setContent([...content, item])
  }

  const removeGrowl = ref => {
    setContent(prevState => {
      const index = prevState.findIndex(item => item.props.id === ref)
      return [...prevState.slice(0, index), ...prevState.slice(index + 1)]
    })
  }

  return { addGrowl, removeGrowl, content }
}
