import { Badge, Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

function TaskList() {
    const theme = useTheme();

    return (
        <Grid container spacing={theme.spacing(1)}
            sx={{
                marginTop: '25px',
                border: '1px solid #3d4b5c',
                borderRadius: '4px',
                padding: '10px',
                backgroundColor: '#20252b',
            }}>
            <Grid item>
                <Typography variant='caption'
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: theme.spacing(2),
                        paddingLeft: '5px'
                    }}
                >
                    <span><h3>Tarefas criadas</h3></span>
                    <Badge color="primary" badgeContent={0} showZero></Badge>
                </Typography>
            </Grid>
        </Grid>
    );
}

export default TaskList;
