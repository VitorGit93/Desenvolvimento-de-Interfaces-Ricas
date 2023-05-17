import TaskList from '../TaskList';
import { Button, Grid, TextField, colors } from '@mui/material';
import { PlusCircle } from '@phosphor-icons/react';
import React, { useState } from 'react';

export function TaskInput() {

    const [tarefa, setTarefa] = useState('');

    const handleCreateTask = () => {
        // Verifica se o campo está vazio
        if (tarefa.trim() === '') { return; }

        // Cria um objeto  de tarefa com os dados digitados
        const newTask = {
            titulo: tarefa,
            descricao: '',
            data: ''
        }

        // Aqui se pode chamar a função de criação da tarefa da API
        // Passando o objeto newTask como parâmetro
        // Por exemplo: createTask(newTask);

        // Limpa o campo de texto
        setTarefa('');
    };

    return (
        <Grid container spacing={0.5}>
            <Grid item xl={10} sm={12}>
                <TextField
                    name="tarefa"
                    value={tarefa}
                    placeholder='Adcione uma nova tarefa'
                    variant='outlined'
                    fullWidth sx={{ backgroundColor: colors.grey[800] }}
                    onChange={(e) => setTarefa(e.target.value)}
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

