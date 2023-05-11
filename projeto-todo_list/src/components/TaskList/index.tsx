import { Badge, Divider, Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

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
                            paddingRight: '-5px',
                        }}
                    >
                        <span><h3>Concluídas</h3></span>
                        <Badge color="secondary" badgeContent={0} showZero></Badge>
                    </Typography>

                </Grid>
                
                <Divider/>



                {/* Terefa criada */}
                <Grid item
                    xl={12}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: theme.spacing(2),
                        justifyContent: 'space-between',
                        border: '1px solid #3d4b6c',
                        backgroundColor: '#85283b'
                    }}
                >
                    <Typography variant='caption'
                        sx={{
                            display: 'flex',
                            justifyContent: 'justify',
                            alignItems: 'center',
                            gap: theme.spacing(2)
                        }}
                    >
                        <span>Lavar a louça</span>
                    </Typography>
                </Grid>

                {/* Terefa criada */}
                <Grid item
                    xl={12}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: theme.spacing(2),
                        justifyContent: 'space-between',
                        border: '1px solid #3d4b6c',
                        backgroundColor: '#85283b'
                    }}
                >
                    <Typography variant='caption'
                        sx={{
                            display: 'flex',
                            justifyContent: 'justify',
                            alignItems: 'center',
                            gap: theme.spacing(2)
                        }}
                    >
                        <span>Fazer nuggets de frango na Airfryer</span>
                    </Typography>
                </Grid>

            </Grid>
            <Divider />
        </>
    );
}

export default TaskList;
