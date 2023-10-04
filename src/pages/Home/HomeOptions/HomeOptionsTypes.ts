export type HomeOptionsProps = {
    type: string;
    handleChangeType: (type: string) => void;
    range: string;
    handleChangeRange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    limits: string;
    handleChangeLimits: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

export type HomeOptionsViewProps = {
    type: string;
    handleChangeType: (type: string) => void;
    range: string;
    handleChangeRange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    limits: string;
    handleChangeLimits: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};