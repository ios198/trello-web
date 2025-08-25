import { createTheme, extendTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'

// Create a theme instance.
const theme = extendTheme({
  trello: {
    appBarHeight: '48px',
    boardBarHeight: '58px',
  },
  colorSchemes: {
    light: {
      palette: {
        mode: 'light',
        primary: {
          main: '#37d7ecff',
        },
        secondary: {
          main: '#19857b',
        },
        error: {
          main: red.A400,
        },
        text: {
          primary: '#000',
          secondary: red[500],
        },
      },
    },
    dark: {
      palette: {
        mode: 'dark',
        primary: {
          main: '#37d7ecff',
        },
        secondary: {
          main: '#19857b',
        },
        error: {
          main: red.A400,
        },
        text: {
          primary: '#fff',
          secondary: red[500],
        },
      },
    },
  },
})

export default theme
