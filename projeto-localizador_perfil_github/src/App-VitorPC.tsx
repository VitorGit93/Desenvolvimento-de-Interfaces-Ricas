
import { CssBaseline, Typography } from '@mui/material'
import { Theme } from './theme/ThemeProvider'
import { BaseLayout } from './layout/BaseLayout'
import {UserCard} from "./components/UserCard";


function App() {


  return (
    <>
      <Theme>
        <CssBaseline />

        <BaseLayout appBarTitle={'Buscador de Perfis'}>

        <UserCard></UserCard>





        </BaseLayout>

   

      </Theme>
    </>
  )
}

export default App
