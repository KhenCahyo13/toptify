import { Artist } from "../../../types/itemsTypes";

export type HomeArtistsProps = {
    type: string;
    range: string;
    limits: string;
    token: string;
};

export type HomeArtistsViewProps = {
    artists: Artist[];
};