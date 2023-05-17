import { Box, Button, Card, CardActions, CardContent, CardHeader, Checkbox, Typography, useTheme } from "@mui/material";
import { Pencil, Trash } from "@phosphor-icons/react";


type TarefaProps = {
    titulo: "Aula de React";
    descricao: string;
    dataCriacao: string;    
    done: boolean;
}


export function Tarefa({ titulo, descricao, dataCriacao, done }: TarefaProps) {

    const theme = useTheme();
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    return (
        <>
            {/* Card (filha de Stack) que representa uma tarefa */}
            <Card
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: theme.spacing(),
                    justifyContent: 'space-between',
                    border: '1px solid #3d4b6c',
                    backgroundColor: '#20252b',
                    width: '100%'
                }}
            >

                <CardContent
                    sx={{
                        display: 'flex',
                        alignItems: 'space-between',
                        gap: theme.spacing(1),
                        border: '1px solid #3d4b6c',
                        backgroundColor: '#20252b'
                    }}
                >

                    <CardHeader
                        sx={{
                            border: '1px solid #3d4b6c',
                            backgroundColor: '#20252b'
                        }}
                        title={<Typography variant='h6'
                            sx={{ fontFamily: 'Consolas, monospace', color: '#f55fff' }}
                                >{titulo}</Typography>
                        }
                    />

                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '1px solid #3d4b6c',
                        backgroundColor: '#20252b'
                    }}>
                        <p>{descricao}</p>
                    </Box>

                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '1px solid #3d4b6c',
                        backgroundColor: '#20252b'
                    }}>
                        {dataCriacao}
                    </Box>


                </CardContent>

                <CardActions
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >

                    <Checkbox {...label} defaultChecked />

                    <Button variant='contained' color="info"
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Pencil size={20} weight="bold" />
                    </Button>

                    <Button variant='contained' color="error"
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Trash size={20} weight="bold" />
                    </Button>

                </CardActions>
            </Card>


        </>
    )
}