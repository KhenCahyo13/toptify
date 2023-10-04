import { User } from "../../../types/userTypes";

export type HomeTopProps = {
    token: string;
}

export type HomeTopViewProps = {
    type: string;
    handleChangeType: (type: string) => void;
    range: string;
    handleChangeRange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    limits: string;
    handleChangeLimits: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    token: string;
    user: User;
    handleLogout: () => void;
    resultsRef: React.RefObject<HTMLDivElement>;
    downloadImage: () => void;
}