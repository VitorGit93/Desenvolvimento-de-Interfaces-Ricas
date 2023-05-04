import { AppBar, CssBaseline, ThemeProvider, Toolbar, Typography } from '@mui/material'
import { darkTheme } from './Themes'
import { useTheme } from '@mui/material/styles'


function App() {
const theme = useTheme()
  return (
    <>
      <ThemeProvider theme={darkTheme}>

        <CssBaseline/>
        <AppBar position="static">
          <Toolbar
            sx={{
              paddingTop: theme.spacing(2),
              paddingBottom: theme.spacing(2),
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              '@media all': {
                minHeight: 200,
              }
            }}
          >
            <Typography variant="h5" component="h1">todo</Typography>
          </Toolbar>
        </AppBar>

      </ThemeProvider>
    </>
  )
}

export default App
