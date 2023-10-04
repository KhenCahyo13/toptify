import { useEffect, useState } from "react";
import HomeView from "./HomeView";
import { getHashParams, setTokenInLocalStorage } from "../../helper/helper";

const client_id = import.meta.env.VITE_CLIENT_ID;
const redirect_uri = import.meta.env.VITE_REDIRECT_URI;
const state_key = import.meta.env.VITE_STATE_KEY;
const response_type = import.meta.env.VITE_RESPONSE_TYPE;

const Home = () => {
    const [token, setToken] = useState<string>('');

    const handleUserLogin = () => {
        const scope = 'user-read-private user-read-email user-top-read';

        let spotify_url = 'https://accounts.spotify.com/authorize';
            spotify_url += '?response_type=' + encodeURIComponent(response_type);
            spotify_url += '&client_id=' + encodeURIComponent(client_id);
            spotify_url += '&scope=' + encodeURIComponent(scope);
            spotify_url += '&redirect_uri=' + encodeURIComponent(redirect_uri);
            spotify_url += '&state=' + encodeURIComponent(state_key)
    
        window.location.href = spotify_url;
    };

    useEffect(() => {
        const params = getHashParams();
        const paramsToken = params.access_token;
        const localStorageToken = localStorage.getItem('spotify_token');

        if (paramsToken) {
            setTokenInLocalStorage(paramsToken);
            setToken(paramsToken);
        } else if (localStorageToken) {
            setToken(localStorageToken)
        }
    }, []);

    return <HomeView
        handleUserLogin={handleUserLogin}
        token={token}
    />
};

export default Home;