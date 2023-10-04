import { useEffect } from "react";
import { useFetchTopTracks } from "../../../hooks/topItemsHook";
import { HomeTrackProps } from "./HomeTracksTypes";
import HomeTrackView from "./HomeTracksView";
import { useQueryClient } from "react-query";

const HomeTrack = ({ type, range, limits, token }: HomeTrackProps) => {
    const { data, isLoading, isError } = useFetchTopTracks(type, range, limits, token);

    const queryClient = useQueryClient();

    useEffect(() => {
        const queryKey = [type, range, limits];
        queryClient.invalidateQueries(queryKey);
    }, [type, range, limits, queryClient]);

    if (isLoading) return 'Loading...';
    if (isError) return 'Error...';

    return <HomeTrackView
        tracks={data?.data.items}
    />
};

export default HomeTrack;