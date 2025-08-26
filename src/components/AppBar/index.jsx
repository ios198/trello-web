import React from 'react'
import Box from '@mui/material/Box'

function AppBar() {
  return (
    <>
      <Box
        sx={{
          backgroundColor: 'primary.light',
          width: '100%',
          height: (theme) => theme.trello.appBarHeight,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        App Bar
      </Box>
    </>
  )
}

export default AppBar
