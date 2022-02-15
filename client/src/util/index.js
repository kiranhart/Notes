export const setHeaders = () => {
    const headers = {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    };

    return headers;
};

export const API_URL = 'https://notes-app-server.vercel.app';
