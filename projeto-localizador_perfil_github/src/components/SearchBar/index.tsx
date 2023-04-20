import TextField from '@mui/material/TextField';

export function SearchBar() {
    return (
        <TextField
            label="Buscar perfis"
            variant="outlined"

            InputProps={{

                /*
                    Adicionando um ícone de busca à esquerda do campo de texto utilizando o componente InputAdornment
                    para alterar as cores e o estilo do campo de texto utilizando as propriedades sx do MUI.
                */

                sx: {
                    backgroundColor: 'white',
                    borderRadius: '10px',
                    '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'teal',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'green',
                    },
                },
            }}
        />
    );
}
