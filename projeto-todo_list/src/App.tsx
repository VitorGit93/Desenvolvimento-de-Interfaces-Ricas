import { Container, CssBaseline, ThemeProvider } from '@mui/material';
import { darkTheme } from './Themes';
import { HeaderCabecalho } from './components/HeaderCabecalho';
import { TaskInput } from './components/TaskInput';
import TaskList from './components/TaskList';
import { useEffect, useState } from 'react';
import { getAll } from './service/api';
import { typeTarefa } from './types/typeTarefa';


function App() {

    const [tasks, setTasks] = useState<typeTarefa[]>([]);

    

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const tarefaDados = await getAll();
                setTasks(tarefaDados);
            } catch (error) {
                console.error('Erro ao buscar as tarefas: ', error);
            }
        
        }
        fetchTasks();
    }, []);

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

                    <TaskList
                        tasks={tasks}
                    />                    

                </Container>

            </main>

        </ThemeProvider>
    );
}

export default App;