import profileImage from './assets/description/picture.png';
import emailIcon from './assets/description/email.svg';
import devIcon from './assets/description/dev.svg';
import githubIcon from './assets/description/github.svg';
import linkedinIcon from './assets/description/linkedin.svg';

const Header = () => {
    return (
        <div
            className="mx-auto w-10/12  max-w-6xl  scroll-mt-20 rounded-lg bg-gray-50 p-5 dark:bg-gray-900 dark:text-white md:flex"
            id="about"
        >
            <img
                src={profileImage}
                alt="Walid's profile picture"
                className=" aspect-square rounded-md  object-cover md:mx-0 md:h-52"
            />
            <div className="md:ml-8">
                <h1 className="mt-6 text-lg font-bold md:my-0">
                    Walid GHENAIET
                </h1>
                <h2 className="text-md text-green-500">
                    Full-Stack web developer
                </h2>
                <p className="text-sm">I love web :) </p>
            </div>

            <div className="mt-7 md:ml-auto md:mt-0">
                <a
                    href="/"
                    className="mt-2 flex flex-1 gap-4 hover:text-green-500  hover:underline md:gap-2 "
                >
                    <img
                        className="max-w-[1.3rem]  object-contain  dark:invert"
                        src={emailIcon}
                        alt=""
                    />
                    <p className="text-sm">ghenaietwalid@gmail.com</p>
                </a>
                <a
                    href="/"
                    className="mt-2 flex flex-1 gap-4 hover:text-green-500  hover:underline md:gap-2  "
                >
                    <img
                        className="max-w-[1.3rem]  object-contain dark:invert"
                        src={linkedinIcon}
                        alt=""
                    />
                    <p className="text-sm">Linkedin</p>
                </a>
                <a
                    href="/"
                    className="mt-2 flex flex-1 gap-4 hover:text-green-500  hover:underline md:gap-2  "
                >
                    <img
                        className="max-w-[1.3rem]  object-contain dark:invert"
                        src={githubIcon}
                        alt=""
                    />
                    <p className="text-sm">Github</p>
                </a>
                <a
                    href="/"
                    className="mt-2 flex flex-1 gap-4 hover:text-green-500  hover:underline md:gap-2  "
                >
                    <img
                        className="max-w-[1.3rem]  object-contain dark:invert"
                        src={devIcon}
                        alt=""
                    />
                    <p className="text-sm">Blog</p>
                </a>
            </div>
        </div>
    );
};

export default Header;
