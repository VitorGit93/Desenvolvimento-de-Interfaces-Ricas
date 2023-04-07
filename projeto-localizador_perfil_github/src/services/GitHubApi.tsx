import axios from 'axios';

const BASE_URL = 'https://api.github.com';

export const getPerfil = async (username: any) => {
    const response = await axios.get(`${BASE_URL}/users/${username}`);
    return response.data;
};
