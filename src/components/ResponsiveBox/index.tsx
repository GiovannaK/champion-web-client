import React from 'react'
import { Box } from './styles'

type ResponsiveBoxProps = {
  children: React.ReactNode
}

export const ResponsiveBox = ({children}: ResponsiveBoxProps) => {
  return (
    <Box>
      {children}
    </Box>
  )
}
