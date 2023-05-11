import { Button, Card, CardActions, CardContent, CardHeader, useTheme } from "@mui/material";

type TarefaProps = {
    titulo: "Aula de React";
    subtitulo: string;
    descricao: string;
    data: string;
}


export function Tarefa ( {titulo, subtitulo, descricao, data}: TarefaProps ) {

    const theme = useTheme();

    return (
        <>
            {/* Card (filha de Stack) que representa uma tarefa */}
            <Card
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: theme.spacing(2),
                    width: '100%',
                    justifyContent: 'space-evenly',
                    border: '1px solid #3d4b6c',
                    backgroundColor: '#20252b'
                }}
            >
                <CardHeader
                    sx={{
                        border: '1px solid #3d4b6c',
                        backgroundColor: '#20252b'
                    }}
                    title = {titulo}
                    subheader = {subtitulo}
                />
                <CardContent>
                    <p className = 'descricao-da-tarefa'>
                        {descricao}
                    </p>
                </CardContent>

                <CardActions>
                    <Button variant='outlined' >Concluir</Button>
                </CardActions>
            </Card> 


        </>
    )
}