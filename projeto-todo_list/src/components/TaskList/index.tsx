import { useTheme } from '@mui/material/styles';
import { Tarefa } from '../Tarefa';
import { Badge, Divider, Grid, Stack, Typography } from '@mui/material';
import { typeTarefa } from '../../types/typeTarefa';

type TaskListProps = {
    tasks: typeTarefa[],
};

function TaskList({tasks}: TaskListProps) {

    const theme = useTheme();

    return (
        <>
            <Grid container
                spacing={theme.spacing(1)}
                sx={{
                    display: 'grid',
                    marginTop: '10px',
                    borderRadius: '5px',
                    padding: '2px',
                    gap: theme.spacing(0),
                    backgroundColor: '#20252b',
                }}
            >
                {/* Grid item que representa o "Header da lista" */}
                <Grid item
                    xl={12}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}
                >
                    <Typography variant='caption'
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: theme.spacing(2),
                            paddingLeft: '5px',
                        }}
                    >
                        <span><h3>Tarefas criadas</h3></span>
                        <Badge color="primary" badgeContent={0} showZero></Badge>
                    </Typography>

                    <Typography variant='caption'
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: theme.spacing(2),
                            paddingRight: '20px',
                        }}
                    >
                        <span><h3>Concluídas</h3></span>
                        <Badge color="secondary" badgeContent={0} showZero></Badge>
                    </Typography>
                </Grid> {/* Fim do Grid item que representa o "Header da lista" */}

                <Divider />

                {/* ======================================================================================================= */}

                {/* Aqui irá a lista das tasks lançadas */}
                <Grid item
                    xl={12}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        borderRadius: '5px',
                        backgroundColor: '#20252b',
                    }}
                >
                    {/* Pilha (filha de Grid item) onde ficarão as tasks */}

                    <Stack spacing={2}
                        sx={{
                            display: 'grid',
                            alignItems: 'center',
                            width: '100%'
                        }}
                    >
                        {/* Aqui irá a lista das tasks lançadas */}
                        {tasks?.map((task: typeTarefa) => (
                            <Tarefa taskData={task} />
                        ))}

                    </Stack>

                    {/* Fim da pilha de tasks */}
                </Grid> {/* Fim do Grid item que representa a lista de tasks */}

                {/* ======================================================================================================= */}

            </Grid> {/* Fim do Grid container que representa a lista de tasks */}
            <Divider /> {/* Divisor de conteúdo */}
        </>
    );
}

export default TaskList;
