// 接口

export {}

interface Post {
    title: string
    content: string
}

function printPost(post: Post) {
    console.log(post.title)
    console.log(post.content)
}

printPost({
    title: 'Hello TypeScript',
    content: 'A javascript superset'
})