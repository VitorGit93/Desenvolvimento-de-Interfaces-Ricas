import { AppBar, Toolbar, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { CheckFat } from '@phosphor-icons/react';

export function HeaderCabecalho() {
    const theme = useTheme();

    return (
        <AppBar position="static">
            <Toolbar
                sx={{
                    paddingTop: theme.spacing(2),
                    paddingBottom: theme.spacing(2),
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    '@media all': {
                        minHeight: 200,
                    }
                }}
            >
                <Typography variant="h5" component="h1"
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: theme.spacing(2),
                        color: theme.palette.primary.light,
                    }}
                >
                    <CheckFat size={32} weight='fill' />Lista de Tarefas
                </Typography>
            </Toolbar>
        </AppBar>
    );
}
