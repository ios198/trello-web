import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import theme from './theme'
function App() {
  return (
    <>
      <Container
        disableGutters
        maxWidth={false}
        sx={{ backgroundColor: 'primary.main', height: '100vh' }}
      >
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
          Mode Select
        </Box>
        <Box
          sx={{
            backgroundColor: 'primary.dark',
            width: '100%',
            height: (theme) => theme.trello.boardBarHeight,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          Board Bar
        </Box>
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
        <Box></Box>
      </Container>
    </>
  )
}

export default App
