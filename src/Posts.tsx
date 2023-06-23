import blogPosts from './data/blogPosts';

const Posts = () => {
    return (
        <div
            className="scroll-mt-20   rounded-md bg-gray-50 p-8 dark:bg-gray-900  dark:text-white md:w-2/6"
            id="blog"
        >
            <h1 className="text-xl font-bold">Featured Blog Posts</h1>
            {blogPosts.map((post, index) => (
                <div className="mx-auto" key={index}>
                    <img
                        src={post.image}
                        alt=""
                        className="mb-4 mt-7 max-h-40 w-full rounded-md bg-gray-200 object-cover"
                    />
                    <h2 className="text-md font-semibold">{post.title}</h2>
                    <p className="my-2 text-sm">{post.description}</p>
                    <a
                        href={post.link}
                        className="text-md text-green-500 underline"
                    >
                        Read This Article
                    </a>
                </div>
            ))}
            <a
                href="/"
                className="mt-6 block w-full rounded-md bg-green-500 py-2 text-center font-semibold text-white  dark:text-gray-900 "
            >
                View All Articles
            </a>
        </div>
    );
};

export default Posts;
