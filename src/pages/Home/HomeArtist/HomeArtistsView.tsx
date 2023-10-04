import { HomeArtistsViewProps } from "./HomeArtistsTypes";

const HomeArtistView = ({ artists }: HomeArtistsViewProps) => (
    <div className="grid grid-cols-none gap-y-4 md:grid-cols-2 md:gap-x-12">
        {artists.map((artist, index) => (
            <div className="flex items-center gap-4" key={artist.id}>
                <p className="font-medium text-white">#{index + 1}</p>
                <img src={artist.images[0].url} alt="Album Images" className="w-16 rounded-md" />
                <div className="block">
                    <h1 className="font-medium text-white text-sm">{artist.name}</h1>
                </div>
            </div>
        ))}
    </div>
);

export default HomeArtistView;