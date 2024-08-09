import React from 'react'

import { Box } from '@mui/system'

export const BaseLayoutPage = ({ children, toolbar }) => {
  return (
    <Box height="100%" display="flex" flexDirection="column">
      <Box display="flex" alignItems="center">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          width="100%"
        ></Box>
      </Box>

      {toolbar && <Box>{toolbar}</Box>}

      <Box display={'flex'} overflow="auto" flexDirection={'row'}>
        {children}
      </Box>
    </Box>
  )
}
