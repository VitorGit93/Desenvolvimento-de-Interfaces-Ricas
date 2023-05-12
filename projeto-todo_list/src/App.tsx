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
                    //background: 'linear-gradient(to right, #005c97, #363795)'
                    
                }}>

                    <TaskInput />

                    <TaskList />

                </Container>

            </main>

        </ThemeProvider>
    );
}

export default App;