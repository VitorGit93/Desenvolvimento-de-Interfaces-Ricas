import { Container, CssBaseline, ThemeProvider } from '@mui/material';
import { darkTheme } from './Themes';
import { HeaderCabecalho } from './components/HeaderCabecalho';
import { TaskInput } from './components/TaskInput';
import TaskList from './components/TaskList';

function App() {
    return (
        <ThemeProvider theme={darkTheme}>

            <CssBaseline />

            <HeaderCabecalho />

            <main>

                <Container
                 sx={{
                    position: 'relative',
                    top: '-27px',
<<<<<<< Updated upstream
                        //background: 'linear-gradient(to right, #005c97, #363795)'
                    
=======
                        background: 'linear-gradient(to right, #005c97, #363795)'
>>>>>>> Stashed changes
                }}>

                    <TaskInput />

                    <TaskList />

                </Container>

            </main>

        </ThemeProvider>
    );
}

export default App;
