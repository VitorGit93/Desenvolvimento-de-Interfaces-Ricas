
import { Box, CssBaseline, Typography } from '@mui/material'
import { Theme } from './theme/ThemeProvider'
import { BaseLayout } from './layout/BaseLayout'
import {UserCard} from "./components/UserCard";
import { SearchBar } from './components/SearchBar';


function App() {


  return (
    <>
      <Theme>
        <CssBaseline />

        <BaseLayout appBarTitle={'Buscador de Perfis'}>

          <Box sx={{
            width: "100%",
            backgroundColor: "orange",
            display: 'flex',
            justifyContent: 'center',
            padding: '10px 0 5px 0',
            marginBottom: '10px',
          }}>
            <SearchBar />
          </Box>

        <UserCard></UserCard>

        </BaseLayout>

   

      </Theme>
    </>
  )
}

export default App
