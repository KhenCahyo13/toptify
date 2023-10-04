import { useQueryClient } from "react-query";
import { useFetchTopArtists } from "../../../hooks/topItemsHook";
import { HomeArtistsProps } from "./HomeArtistsTypes";
import HomeArtistView from "./HomeArtistsView"
import { useEffect } from "react";

const HomeArtists = ({ type, range, limits, token }: HomeArtistsProps) => {
    const { data, isLoading, isError } = useFetchTopArtists(type, range, limits, token);

    const queryClient = useQueryClient();

    useEffect(() => {
        const queryKey = [type, range, limits];
        queryClient.invalidateQueries(queryKey);
    }, [type, range, limits, queryClient]);

    if (isLoading) return 'Loading...';
    if (isError) return 'Error...';

    return <HomeArtistView
        artists={data?.data.items}
    />
};

export default HomeArtists;