import { Track } from "../../../types/itemsTypes"

export type HomeTrackProps = {
    type: string;
    range: string;
    limits: string;
    token: string;
};

export type HomeTrackViewProps = {
    tracks: Track[]
}