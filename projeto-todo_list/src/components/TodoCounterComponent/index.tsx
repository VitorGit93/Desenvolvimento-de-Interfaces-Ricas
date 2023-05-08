import {Badge, Grid, Typography} from '@mui/material'
import {useTheme} from '@mui/material/styles'

export function TodoCounter() {
    const theme = useTheme()
    return (
        <>
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
        </>
    )
}

