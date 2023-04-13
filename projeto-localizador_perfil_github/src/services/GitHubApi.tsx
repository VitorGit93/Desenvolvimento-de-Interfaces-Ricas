// Aqui está a chamada da API do Github, quen retorna os dados do usuário

import axios from 'axios';

const BASE_URL = 'https://api.github.com';

export const getPerfil = async (username: any) => {
    const response = await axios.get(`${BASE_URL}/users/${username}`);
    return response.data;
};

// token Github API: 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