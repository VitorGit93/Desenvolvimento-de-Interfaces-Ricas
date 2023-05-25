import { Button, Grid, TextField, colors } from '@mui/material';
import { PlusCircle } from '@phosphor-icons/react';
import { useState } from 'react';
import { save } from '../../service/api';
import { typeTarefa } from '../../types/typeTarefa';

type TaskInputProps = {
    // eslint-disable-next-line @typescript-eslint/ban-types
    setTask: Function;
};

export function TaskInput({ setTask }: TaskInputProps) {
    
    const [taskInput, setTaskInput] = useState('');

    const handleCreateTask = async () => {
        if (taskInput.trim() === '') {
            return;
        }

        const novaTaskInput = {
            id: Math.random() * 1000,
            titulo: taskInput,
            descricao: '',
            data: new Date().toISOString(),
            status: false,
        };

        const taskSaved: typeTarefa = await save(novaTaskInput);
        setTask((oldTasks: typeTarefa[]) => [...oldTasks, taskSaved]);

        setTaskInput('');
    };

    return (
        <Grid container spacing={0.5}>
            <Grid item xl={10} sm={12}>
                <TextField
                    name="task"
                    value={taskInput}
                    placeholder="Adcione uma nova tarefa"
                    variant="outlined"
                    fullWidth
                    sx={{ backgroundColor: colors.grey[800] }}
                    onChange={(e) => setTaskInput(e.target.value)}
                />
            </Grid>
            <Grid item xl={2} sm={12}>
                <Button
                    variant="contained"
                    onClick={handleCreateTask}
                    fullWidth
                    sx={{ height: '100%' }}
                >
                    <span> Criar </span> <PlusCircle size={32} />
                </Button>
            </Grid>
        </Grid>
    );
}
