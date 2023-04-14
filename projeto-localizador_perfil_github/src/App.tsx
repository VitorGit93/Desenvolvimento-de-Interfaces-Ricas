
import { CssBaseline, Typography } from '@mui/material'
import { Theme } from './theme/ThemeProvider'
import { BaseLayout } from './layout/BaseLayout'


function App() {


  return (
    <>
      <Theme>
        <CssBaseline />

        <BaseLayout appBarTitle={'Buscador de Perfis'}>
        </BaseLayout>

   

      </Theme>
    </>
  )
}

export default App
