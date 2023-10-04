import { HomeTrackViewProps } from "./HomeTracksTypes";

const HomeTrackView = ({ tracks }: HomeTrackViewProps) => (
    <div className="grid grid-cols-none gap-y-4 md:grid-cols-2 md:gap-x-12">
        {tracks.map((track, index) => (
            <div className="flex items-center gap-4" key={track.id}>
                <p className="font-medium text-white">#{index + 1}</p>
                <img src={track.album.images[0].url} alt="Album Images" className="w-16 rounded-md" />
                <div className="block">
                    <h1 className="font-medium text-white text-sm">{track.name}</h1>
                    <p className="text-white text-sm mt-1">{track.artists[0].name}</p>
                </div>
            </div>
        ))}
    </div>
);

export default HomeTrackView;