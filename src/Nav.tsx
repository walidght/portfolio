import menuIcon from './assets/icons/menu.svg';
import closeIcon from './assets/icons/close.svg';
import darkIcon from './assets/icons/dark.svg';
import lightIcon from './assets/icons/light.svg';
import Modal from '@mui/base/Modal';
import { useState } from 'react';
import useSwitchTheme from './hooks/useSwitchTheme';

const NavButtons = ({
    setOpenMobileModal,
}: {
    setOpenMobileModal: (value: boolean) => void;
}) => {
    const { switchTheme } = useSwitchTheme();

    const handleLinkClick = () => {
        return setOpenMobileModal(false);
    };

    return (
        <>
            <a
                href="#about"
                onClick={handleLinkClick}
                className="flex  items-center  justify-center hover:text-green-500"
            >
                About Me
            </a>
            <a
                href="#techs"
                onClick={handleLinkClick}
                className="flex  items-center  justify-center hover:text-green-500  "
            >
                My Toolkit
            </a>
            <a
                href="#blog"
                onClick={handleLinkClick}
                className="flex  items-center  justify-center hover:text-green-500"
            >
                My Blog
            </a>
            <a
                href="#projects"
                onClick={handleLinkClick}
                className="flex  items-center  justify-center hover:text-green-500"
            >
                My Projects
            </a>
            <button
                onClick={switchTheme}
                className="flex items-center gap-4  hover:text-green-500 dark:hidden md:ml-auto"
            >
                <img src={darkIcon} alt="" className=" w-8" />
                <span>Dark Mode</span>
            </button>
            <button
                onClick={switchTheme}
                className="hidden items-center gap-4  hover:text-green-500 dark:flex md:ml-auto"
            >
                <img src={lightIcon} alt="" className="w-8 invert" />
                <span>Light Mode</span>
            </button>
        </>
    );
};

const Nav = () => {
    const [openMobileModal, setOpenMobileModal] = useState(false);
    const [userCurrentScroll, setUserCurrentScroll] = useState(0);

    const handleMobileMenuButton = () => {
        if (!openMobileModal) {
            setUserCurrentScroll(
                document.documentElement.scrollTop || document.body.scrollTop
            );
        }
        if (openMobileModal) {
            document.documentElement.scrollTop = userCurrentScroll;
        }
        setOpenMobileModal((prev) => !prev);
    };

    return (
        <>
            <div className="fixed mt-0 w-full md:hidden">
                <button
                    className=" ml-auto mr-4 mt-4 block"
                    onClick={handleMobileMenuButton}
                >
                    {openMobileModal && (
                        <img
                            src={closeIcon}
                            alt=""
                            className="fill-black dark:invert"
                        />
                    )}
                    {!openMobileModal && (
                        <img
                            src={menuIcon}
                            alt=""
                            className="fill-black dark:invert"
                        />
                    )}
                </button>
                <Modal open={openMobileModal}>
                    <div className="flex h-screen w-full flex-col items-center justify-center gap-8 text-xl text-black dark:text-white ">
                        <NavButtons setOpenMobileModal={setOpenMobileModal} />
                    </div>
                </Modal>
            </div>
            <div className="intems-center fixed z-10 hidden  h-16 w-full gap-10 bg-gray-50 px-10 shadow-sm dark:bg-gray-900 dark:text-white md:flex">
                <NavButtons setOpenMobileModal={setOpenMobileModal} />
            </div>
        </>
    );
};

export default Nav;
