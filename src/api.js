import axios from 'axios';

export async function getAllUsers() {
    const baseUrl = process.env.REACT_APP_BACKEND_HOST;
    const port = process.env.REACT_APP_BACKEND_PORT;
    const url = `http://${baseUrl}:${port}/users`;

    try {
        const res = await axios.get(url, { timeout: 3000 });
        return res.data ?? [];
    } catch (err) {
        if (err.code === 'ERR_NETWORK') {
            console.error('[API] Backend unreachable:', err.message);
        } else {
            console.error('[API] Unexpected error:', err);
        }
        return [];
    }
}
