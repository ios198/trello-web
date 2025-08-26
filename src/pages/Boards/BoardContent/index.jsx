import React from 'react'
import Box from '@mui/material/Box'
function BoardContent() {
  return (
    <>
      <Box
        sx={{
          backgroundColor: 'secondary.light',
          width: '100%',
          height: (theme) =>
            `calc(100vh - ${theme.trello.appBarHeight} - ${theme.trello.boardBarHeight})`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        Board Content
      </Box>
    </>
  )
}

export default BoardContent
