import { getNowDate } from "../../../helper/helper";
import HomeArtists from "../HomeArtist/HomeArtists";
import HomeOptions from "../HomeOptions/HomeOptions";
import HomeTrack from "../HomeTracks/HomeTracks";
import { HomeTopViewProps } from "./HomeTopTypes";

const HomeTopView = ({ type, handleChangeType, range, handleChangeRange, limits, handleChangeLimits, token, user, handleLogout, downloadImage, resultsRef }: HomeTopViewProps) => (
    <div>
        <HomeOptions
            type={type}
            handleChangeType={handleChangeType}
            range={range}
            handleChangeRange={handleChangeRange}
            limits={limits}
            handleChangeLimits={handleChangeLimits}
        />
        <div className="my-8">
            <div className="px-2 py-2 my-4 flex items-center justify-between md:px-8 md:py-4 lg:px-12">
                <button onClick={downloadImage} className="px-4 py-2 rounded-md text-sm bg-green-400 text-white">Download Image</button>
                <button onClick={handleLogout} className="px-4 py-2 rounded-md text-sm bg-red-600 text-white">Logout</button>
            </div>
            <div className="px-2 py-2 md:px-8 md:py-4 lg:px-12" ref={resultsRef}>
                <div className="px-6 py-4 rounded-md bg-green-400">
                    <div className="flex items-center justify-between">
                        <div className="block text-left">
                            <h1 className="font-medium text-white">{user.display_name}</h1>
                            <p className="text-sm text-white mt-1">{getNowDate()}</p>
                        </div>
                        <div className="block text-right">
                            <h1 className="font-medium text-white capitalize">Top {type}</h1>
                            <p className="text-sm text-white mt-1">Top {limits} | {range === 'short_term' ? 'Last Week' : range === 'medium_term' ? 'Last 6 Month' : range === 'long_term' ? 'Last Year' : ''}</p>
                        </div>
                    </div>
                    <hr className="mt-4 mb-6" />
                    {type === 'tracks' ? (
                        <HomeTrack 
                            type={type}
                            range={range}
                            limits={limits}
                            token={token}
                        />
                    ) : type === 'artists' ? (
                        <HomeArtists 
                            type={'type'}
                            range={range}
                            limits={limits}
                            token={token}
                        />
                    ) : ''}
                    <hr className="mt-8" />
                    <p className="text-sm text-white text-center my-4">Made with Toptify</p>
                </div>
            </div>
        </div>
    </div>
);

export default HomeTopView;