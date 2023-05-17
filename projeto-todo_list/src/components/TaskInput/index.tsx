import { Button, Grid, TextField, colors } from '@mui/material';
import { PlusCircle } from '@phosphor-icons/react';
import { useState } from 'react';
import { createTask } from '../../service/api';

export function TaskInput() {

    const [task, setTasks] = useState('');

    const handleCreateTask = () => {
        // Verifica se o campo está vazio
        if (task.trim() === '') { return; }

        // Cria um objeto  de task com os dados digitados
        const novaTask  = {
            id: 1,
            titulo: task,
            descricao: '',
            data: '',
        }

        // Aqui se pode chamar a função de criação da task da API
        // Passando o objeto newTask como parâmetro
        // Por exemplo: createTask(newTask);

        createTask(novaTask);

        // Limpa o campo de texto
        setTasks('');
    };

    return (
        <Grid container spacing={0.5}>
            <Grid item xl={10} sm={12}>
                <TextField
                    name="task"
                    value={task}
                    placeholder='Adcione uma nova task'
                    variant='outlined'
                    fullWidth sx={{ backgroundColor: colors.grey[800] }}
                    onChange={(e) => setTasks(e.target.value)}
                />
            </Grid>
            <Grid item xl={2} sm={12}>
                <Button
                    variant="contained"
                    fullWidth sx={{ height: '100%' }}>
                    <span> Criar </span> <PlusCircle size={32} />
                </Button>
            </Grid>
        </Grid>
    );
}

