
import { CssBaseline, Typography } from '@mui/material'
import { Theme } from './theme/ThemeProvider'
import { BaseLayout } from './layout/BaseLayout'
import { FooterLayout } from './layout/FooterLayout'


function App() {


  return (
    <>
      <Theme>
        <CssBaseline />

        <BaseLayout appBarTitle={'Buscador de Perfis'}>
        </BaseLayout>

        <FooterLayout>
          <Typography variant="body2">© My App 2022</Typography>
        </FooterLayout>

      </Theme>
    </>
  )
}

export default App
