import { useRef, useState } from "react";
import HomeTopView from "./HomeTopView"
import { HomeTopProps } from "./HomeTopTypes";
import { useFetchUser } from "../../../hooks/usersHook";
import { toPng } from "html-to-image";

const HomeTop = ({ token }: HomeTopProps) => {
    const [type, setType] = useState<string>('tracks');
    const [range, setRange] = useState<string>('short_term');
    const [limits, setLimits] = useState<string>('10');
    const resultsRef = useRef<HTMLDivElement>(null);

    const handleChangeType = (type: string) => {
        setType(type);
    };

    const handleChangeRange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setRange(event.target.value);
    };

    const handleChangeLimits = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setLimits(event.target.value);
    };

    const handleLogout = () => {
        localStorage.removeItem('spotify_token');
        window.location.href = '/';
    }

    const downloadImage = () => {
        if (resultsRef.current) {
            toPng(resultsRef.current, {
            cacheBust: false,
            })
            .then((dataUrl) => {
                const link = document.createElement('a');
                link.download = 'toptify-lists.png';
                link.href = dataUrl;
                link.click();
            })
            .catch((error) => {
                console.log(error);
            });
        } else {
            console.error('resultsRef.current is null');
        }
    };

    const { data, isLoading, isError } = useFetchUser(token);

    if (isLoading) return 'Loading...';
    if (isError) return 'Error..';

    return <HomeTopView
        type={type}
        handleChangeType={handleChangeType}
        range={range}
        handleChangeRange={handleChangeRange}
        limits={limits}
        handleChangeLimits={handleChangeLimits}
        token={token}
        user={data?.data}
        handleLogout={handleLogout}
        resultsRef={resultsRef}
        downloadImage={downloadImage}
    />
};

export default HomeTop;