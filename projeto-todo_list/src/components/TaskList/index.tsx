import { Badge, Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

function TaskList() {
    const theme = useTheme();

    return (
        <Grid container spacing={theme.spacing(1)} sx={{ marginTop: '25px' }}>
            <Grid item>
                <Typography variant='caption'
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: theme.spacing(2),
                        paddingLeft: '5px'
                    }}
                >
                    <span>Tarefas Criadas</span>
                    <Badge color="primary" badgeContent={0} showZero></Badge>
                </Typography>
            </Grid>
        </Grid>
    );
}

export default TaskList;
