import React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

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


                startAdornment: (
                    <InputAdornment position="start">
                        <SearchIcon />
                    </InputAdornment>
                ),
                sx: {
                    backgroundColor: 'white',
                    borderRadius: '10px',
                    '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'lightgray',
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'teal',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'blue',
                    },
                },
            }}
        />
    );
}
