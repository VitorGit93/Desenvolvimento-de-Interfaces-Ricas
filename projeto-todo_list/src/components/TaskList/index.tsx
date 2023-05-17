import { useTheme } from '@mui/material/styles';
import { Tarefa } from '../Tarefa';
import { Badge, Divider, Grid, Stack, Typography } from '@mui/material';




function TaskList() {

    const theme = useTheme();

    return (
        <>
            <Grid container
                spacing={theme.spacing(1)}
                sx={{
                    display: 'grid',
                    marginTop: '25px',
                    border: '1px solid #3d4b5c',
                    borderRadius: '4px',
                    padding: '10px',
                    gap: theme.spacing(1),
                    backgroundColor: '#20252b'
                }}
            >
                {/* Grid item que representa o "Header da lista" */}
                <Grid item
                    xl={12}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: theme.spacing(2),
                        justifyContent: 'space-between',
                        border: '1px solid #3d4b6c',
                        backgroundColor: '#20253b'
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

                {/* Aqui irá a lista das tarefas lançadas */}
                <Grid item
                    xl={12}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        padding: '5px',
                        gap: theme.spacing(2),
                        justifyContent: 'space-between',
                        border: '1px solid #3d4b6c',
                        backgroundColor: '#85283b',
                        
                    }}
                >
                    {/* Pilha (filha de Grid item) onde ficarão as tarefas */}
                    <Stack spacing={2}
                        sx={{
                            display: 'grid',
                            alignItems: 'center',
                            width: '100%'
                        }}
                    >
                      {}
                    </Stack> {/* Fim da pilha de tarefas */}
                </Grid> {/* Fim do Grid item que representa a lista de tarefas */}

                {/* ======================================================================================================= */}

            </Grid> {/* Fim do Grid container que representa a lista de tarefas */}
            <Divider /> {/* Divisor de conteúdo */}
        </>
    );
}

export default TaskList;
