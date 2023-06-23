import image1 from '../assets/techs/express.svg';
import image2 from '../assets/techs/express.svg';

interface Post {
    image: string;
    title: string;
    description: string;
    link: string;
}

const posts: Post[] = [
    {
        image: image1,
        title: 'IP address tracker',
        description:
            'Ip address tracker is a website where it can display to the visitor his ip address ' +
            'and his location on a map. This website was made using react\n' +
            'Ip address tracker is a website where it can display to the visitor his ip address' +
            'and his location on a map. This website was made using react',
        link: '/',
    },
    {
        image: image2,
        title: 'IP address tracker',
        description:
            'Ip address tracker is a website where it can display to the visitor his ip address ' +
            'and his location on a map. This website was made using react\n' +
            'Ip address tracker is a website where it can display to the visitor his ip address' +
            'and his location on a map. This website was made using react',
        link: '/',
    },
];

export default posts;
