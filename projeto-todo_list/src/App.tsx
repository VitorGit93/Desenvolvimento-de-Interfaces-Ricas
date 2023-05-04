import { AppBar, Button, Container, CssBaseline, Grid, TextField, ThemeProvider, Toolbar, Typography } from '@mui/material'
import { darkTheme } from './Themes'
import { useTheme } from '@mui/material/styles'


function App() {
  const theme = useTheme()
  return (
    <>
      <ThemeProvider theme={darkTheme}>

        <CssBaseline />
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

        <main>
          <Container>
            <Grid container spacing={0.5}>

              <Grid item xs={10} sm={12}>
                <TextField name="task" fullWidth />

              </Grid>
              <Grid item xl={2} sm={12}>
                <Button variant="contained" fullWidth>Criar</Button>

              </Grid>

            </Grid>
          </Container>
        </main>

      </ThemeProvider>
    </>
  )
}

export default App
