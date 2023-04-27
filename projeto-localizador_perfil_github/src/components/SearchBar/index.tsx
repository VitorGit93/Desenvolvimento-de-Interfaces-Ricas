import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { getPerfil } from '../../services/GitHubApi';

export function SearchBar() {
    const [username, setUsername] = useState('');

    const handleSearch = async () => {
        const profileData = await getPerfil(username);
        // Fazer algo com os dados do perfil...
    }

    return (
        <TextField
            label="Buscar perfis"
            variant="outlined"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            onKeyPress={(event) => {
                if (event.key === 'Enter') {
                    handleSearch();
                }
            }}
            InputProps={{
                sx: {
                    backgroundColor: 'white',
                    borderRadius: '10px',
                    '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'white',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'green',
                    },
                },
            }}
        />
    );
}