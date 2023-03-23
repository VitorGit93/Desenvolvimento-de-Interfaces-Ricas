import axios from 'axios';

const api = axios.create({
    baseURL: 'http://randomuser.me/api',
    timeout: 10000
});

async function getContacts() {
    const contacts = await api.get('');
}