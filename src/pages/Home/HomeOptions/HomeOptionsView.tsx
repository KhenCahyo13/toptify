import { HomeOptionsViewProps } from "./HomeOptionsTypes";

const HomeOptionsView = ({ type, handleChangeType, range, handleChangeRange, limits, handleChangeLimits }: HomeOptionsViewProps) => (
    <div>
        <div className="mt-12 text-center">
            <div className="flex items-center justify-center">
                <div>
                    <input onChange={() => handleChangeType('tracks')} type="radio" id="tracks" value={type} checked={type === 'tracks'} className="hidden peer" />
                    <label htmlFor="tracks" className="px-4 py-2 rounded-md rounded-e-none border border-e-0 border-green-400 text-sm text-slate-500 peer-checked:bg-green-400 peer-checked:text-white dark:text-white">Top Tracks</label>
                </div>
                <div>
                    <input onChange={() => handleChangeType('artists')} type="radio" id="artists" value={type} checked={type === 'artists'} className="hidden peer" />
                    <label htmlFor="artists" className="px-4 py-2 rounded-md rounded-s-none border border-green-400 text-sm text-slate-500 peer-checked:bg-green-400 peer-checked:text-white dark:text-white">Top Artists</label>
                </div>
            </div>
        </div>
        <div className="mt-6 text-center">
            <div className="flex items-center justify-center gap-4">
                <select onChange={handleChangeRange} value={range} name="range" id="range" className="px-4 py-2 rounded-md border border-green-400 text-sm text-slate-500 bg-transparent dark:text-white">
                    <option value="short_term">Last Month</option>
                    <option value="medium_term">Last 6 Month</option>
                    <option value="long_term">Last Year</option>
                </select>
                <select onChange={handleChangeLimits} value={limits} name="limits" id="limits" className="px-4 py-2 rounded-md border border-green-400 text-sm text-slate-500 bg-transparent dark:text-white">
                    <option value="10">Top 10</option>
                    <option value="20">Top 20</option>
                    <option value="50">Top 50</option>
                </select>
            </div>
        </div>
    </div>
);

export default HomeOptionsView;