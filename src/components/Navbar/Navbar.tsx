import { useEffect, useState } from "react";
import NavbarView from "./NavbarView";

const Navbar = () => {
    const [openNav, setOpenNav] = useState<boolean>(false);
    const [theme, setTheme] = useState<string>('');

    useEffect(() => {
        const localStorageTheme = localStorage.getItem('theme');
        const root = document.documentElement;

        if (localStorageTheme === 'light') {
            setTheme(localStorageTheme);
            root.classList.add('light');
            root.classList.remove('dark');
        } else if (localStorageTheme === 'dark') {
            setTheme(localStorageTheme);
            root.classList.add('dark');
            root.classList.remove('light');
        }
    }, []);

    const handleChangeOpenNav = () => {
        setOpenNav(!openNav);
    };

    const handleChangeTheme = () => {
        let newTheme;
        if (theme === 'light') {
            newTheme = 'dark';
        } else {
            newTheme = 'light';
        }
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.classList.toggle('dark');
        document.documentElement.classList.toggle('light');
    };    
    
    return <NavbarView
        openNav={openNav}
        handleChangeOpenNav={handleChangeOpenNav}
        handleChangeTheme={handleChangeTheme}
        theme={theme}
    />
};

export default Navbar;