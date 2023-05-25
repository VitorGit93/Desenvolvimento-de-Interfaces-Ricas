import { Box, Button, Card, CardActions, CardContent, CardHeader, Checkbox, Typography, useTheme } from "@mui/material";
import { Pencil, Trash } from "@phosphor-icons/react";
import { typeTarefa } from "../../types/typeTarefa";
import { useState } from "react";
import { green } from "@mui/material/colors";

type TarefaProps = {
    taskData: typeTarefa;
};

export function Tarefa({ taskData }: TarefaProps) {

    const theme = useTheme();
    const [checked, setChecked] = useState(taskData.status);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };

    const titleStyle = checked ? { textDecoration: 'line-through' } : {}; // Estilo de título riscado

    return (
        <>
            {/* Card (filha de Stack) que representa uma tarefa */}
            <Card
                sx={{
                    display: 'flex',
                    alignItems: 'center',
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
                        justifyContent: 'center',
                        gap: theme.spacing(1),
                        border: '1px solid #3d4b6c',
                        backgroundColor: '#22022b',
                    }}
                >
                    <Checkbox
                        checked={checked}
                        onChange={handleChange}
                        sx={{

                            color: checked ? green[500] : "#f55fff",
                            '&.Mui-checked': {
                                color: green[500],
                            }
                        }}
                    />


                    <CardHeader
                        sx={{
                            border: '1px solid #3d4b6c',
                            backgroundColor: '#20252b',
                            ...titleStyle // Aplica o estilo de título riscado condicionalmente
                        }}
                        title={
                            <Typography sx={{ fontFamily: 'Poppins,  sans-serif'}}>
                                {taskData.titulo}
                            </Typography>
                        }
                    />

                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            border: '1px solid #3d4b6c',
                            backgroundColor: '#20252b'
                        }}
                    >
                        <p>{taskData.descricao}</p>
                    </Box>

                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            border: '1px solid #3d4b6c',
                            backgroundColor: '#20252b'
                        }}
                    >
                        {taskData.dataCriada}
                    </Box>
                </CardContent>

                <CardActions
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <Button
                        variant='contained'
                        color="info"
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Pencil size={20} weight="bold" />
                    </Button>

                    <Button
                        variant='contained'
                        color="error"
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
