import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import HomeTop from "./HomeTop/HomeTop";
import { HomeViewProps } from "./HomeTypes";
import { FaSpotify } from 'react-icons/fa6';

const HomeView = ({ handleUserLogin, token }: HomeViewProps) => (
    <div>
        <Navbar />
        <section className="px-8 py-4 my-4 md:px-16 lg:px-40">
            <h1 className="text-center font-semibold dark:text-white">Welcome to Top<span className="text-green-400">tify</span></h1>
            <p className="my-1 text-slate-500 text-sm text-center dark:text-white">Free top Spotify track generator</p>
            {token === null || token === undefined || token === '' ? (
                <div className="my-8 text-center">
                    <p className="text-sm text-slate-500 dark:text-white">You are not logged in yet. Please login to continue.</p>
                    <button onClick={handleUserLogin} className="px-6 py-2 mx-auto my-4 text-sm rounded-md bg-green-400 flex items-center text-white gap-2"><FaSpotify className="text-base" /> Login to Spotify</button>
                </div>
            ) : (
                <HomeTop token={token}/>
            )}
        </section>
        <Footer />
    </div>
);

export default HomeView;