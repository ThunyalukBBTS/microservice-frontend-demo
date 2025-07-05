import axios from 'axios';
// Utility to get all users from backend
export async function getAllUsers() {
    const baseUrl = process.env.REACT_APP_BACKEND_HOST;
    const port = process.env.REACT_APP_BACKEND_PORT;
    const url = `http://${baseUrl}:${port}/users`;
    try {
        const res = await axios.get(url);
        return res.data;
    } catch (error) {
    }
}
