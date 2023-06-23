import projects from './data/projects';

const Projects = () => {
    return (
        <div
            className="scroll-mt-20  rounded-md dark:text-white md:w-4/6"
            id="projects"
        >
            <h1 className="ml-6 mt-6 text-xl font-bold">Projects</h1>

            {projects.map((project, index) => (
                <div
                    className="mx-auto mt-6 rounded-md bg-gray-50 p-6 dark:bg-gray-900 md:flex md:gap-6  "
                    key={index}
                >
                    <img
                        src={project.image}
                        alt=""
                        className="mb-4 max-h-40 w-full rounded-md bg-gray-200  object-cover md:mb-0 md:h-full md:max-h-full md:w-2/5"
                    />
                    <div className="md:w-3/5">
                        <div>
                            {project.tags.map((tag, index) => (
                                <span
                                    className="font-semibold text-green-500"
                                    key={index}
                                >{`#${tag}`}</span>
                            ))}
                        </div>
                        <h2 className="text-md font-bold">{project.title}</h2>
                        <p className="my-2 text-sm">{project.description}</p>
                        <div className="flex gap-4">
                            <a
                                href={project.demo}
                                className="mt-6 block w-full rounded-md bg-green-500 py-2 text-center  text-white"
                            >
                                demo
                            </a>
                            <a
                                href={project.repo}
                                className="mt-6 block w-full rounded-md border border-gray-600 py-2  text-center text-gray-600 dark:border-white dark:text-white"
                            >
                                code
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Projects;
