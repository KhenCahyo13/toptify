import { HomeOptionsProps } from "./HomeOptionsTypes";
import HomeOptionsView from "./HomeOptionsView"

const HomeOptions = ({ type, handleChangeType, range, handleChangeRange, limits, handleChangeLimits }: HomeOptionsProps) => {
    return <HomeOptionsView
        type={type}
        handleChangeType={handleChangeType}
        range={range}
        handleChangeRange={handleChangeRange}
        limits={limits}
        handleChangeLimits={handleChangeLimits}
    />
};

export default HomeOptions;