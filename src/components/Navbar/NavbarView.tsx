import { BsFillMoonStarsFill, BsSunFill } from 'react-icons/bs';
import { FaBars, FaXmark } from 'react-icons/fa6';
import { NavbarViewProps } from './NavbarTypes';
import { NavLink } from 'react-router-dom';

const NavbarView = ({ openNav, handleChangeOpenNav, handleChangeTheme, theme }: NavbarViewProps) => (
    <nav className="px-8 py-4 md:px-16 lg:px-40">
        <div className="flex flex-wrap justify-between items-center">
            <h1 className="font-semibold text-lg dark:text-white">Top<span className="text-green-400">tify</span></h1>
            <div className="flex items-center gap-12">
                <button className="px-4 py-2 text-sm rounded-md border border-slate-900 dark:text-white dark:border-white" onClick={handleChangeTheme}>
                    {theme === 'dark' ? <BsSunFill /> : theme === 'light' ? <BsFillMoonStarsFill /> : <BsFillMoonStarsFill />}
                </button>
                <button className="text-green-400 text-lg md:hidden" onClick={handleChangeOpenNav}>{openNav === false ? < FaBars /> : <FaXmark />}</button>
            </div>
            <div className={`w-full my-4 px-4 py-4 border border-slate-900 rounded-md dark:border-white ${openNav === false ? 'hidden' : 'block'} md:block md:w-fit md:border-none`}>
                <div className="flex justify-center items-center gap-12">
                    <NavLink to={'/'} className={({ isActive, isPending }) => 
                        isPending ? "text-sm dark:text-white" : isActive ? "text-sm text-green-400 font-medium dark:text-white underline" : "text-sm dark:text-white"
                    }>Home</NavLink>
                    <NavLink to={'/about'} className={({ isActive, isPending }) => 
                        isPending ? "text-sm dark:text-white" : isActive ? "text-sm text-green-400 font-medium dark:text-white underline" : "text-sm dark:text-white"
                    }>About</NavLink>
                </div>
            </div>
        </div>
    </nav>
);

export default NavbarView;