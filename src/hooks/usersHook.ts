import axios from "axios"
import { useQuery } from "react-query";

const fetchUser = async (token: string) => {
    return await axios.get('https://api.spotify.com/v1/me', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
};

export const useFetchUser = (token: string) => {
    return useQuery('user', () => fetchUser(token));
};