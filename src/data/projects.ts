interface Project {
    image: string;
    title: string;
    description: string;
    tags: string[];
    demo: string;
    repo: string;
}

const projects: Project[] = [
    {
        image: (await import('../assets/techs/express.svg')).default,
        title: 'IP address tracker',
        description:
            'Ip address tracker is a website where it can display to the visitor his ip address ' +
            'and his location on a map. This website was made using react\n' +
            'Ip address tracker is a website where it can display to the visitor his ip address' +
            'and his location on a map. This website was made using react',
        demo: '/',
        repo: '/',
        tags: ['React', 'Scss', 'Axios'],
    },
    {
        image: (await import('../assets/techs/express.svg')).default,
        title: 'IP address tracker',
        description:
            'Ip address tracker is a website where it can display to the visitor his ip address ' +
            'and his location on a map. This website was made using react\n' +
            'Ip address tracker is a website where it can display to the visitor his ip address' +
            'and his location on a map. This website was made using react',
        demo: '/',
        repo: '/',
        tags: ['React', 'Scss', 'Axios'],
    },
];

export default projects;
