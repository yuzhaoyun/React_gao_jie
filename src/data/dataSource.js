let comments = [
    {id: 0, msg: 'Hello'},
    {id: 1, msg: 'Hello1'},
    {id: 2, msg: 'Hello2'}
]

let blogPosts = [
    {id: 0, msg: '文章1'},
    {id: 1, msg: '文章2'},
    {id: 2, msg: '文章3'},
];

let listeners = [];

const DataSource = {
    getComments () {
        return comments;
    },
    getBlogPosts () {
        return blogPosts;
    },
    getBlogPosts (id) {
        return blogPosts.find(() => {
            return blog.id === id;
        })
    },
    addBlogPost (blog) {
        blogPosts.push(blog);
        DataSource.broadCast();
    },
    updateBlogPost (blog) {
        let hasUpdate = false;
        for ( let i = 0; i < blogPosts.length; i++ ) {
            const curBlog
        }
    }
}