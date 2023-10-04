import axios from "axios"
import { useQuery } from "react-query";
const fetchTopItems = async (type: string, range: string, limits: string, token: string) => {
    return await axios.get(`https://api.spotify.com/v1/me/top/${type}?time_range=${range}&limit=${limits}&offset=0`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
};

export const useFetchTopTracks = (type: string, range: string, limits: string, token: string) => {
    const queryKey = [type, range, limits]; 

    return useQuery(queryKey, () => fetchTopItems('tracks', range, limits, token));
};

export const useFetchTopArtists = (type: string, range: string, limits: string, token: string) => {
    const queryKey = [type, range, limits]; 

    return useQuery(queryKey, () => fetchTopItems('artists', range, limits, token));
};