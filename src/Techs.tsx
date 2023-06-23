import techIcons from './data/techIcons';

const Techs = () => {
    return (
        <>
            <div
                className="mx-auto mt-4 w-10/12 max-w-6xl scroll-mt-20 rounded-lg bg-gray-50  p-8 dark:bg-gray-900 dark:text-white"
                id="techs"
            >
                <h1 className="text-lg font-semibold text-green-500">
                    My Toolkit
                </h1>
                <div className="grid grid-cols-2 md:grid-cols-5">
                    {Object.keys(techIcons).map((icon, index) => (
                        <div
                            className="mt-4 flex items-center gap-4 "
                            key={index}
                        >
                            <img
                                src={techIcons[icon]}
                                alt=""
                                className="w-8  dark:invert"
                            />
                            <p className="capitalize">{icon}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Techs;
