const post = {
    username : "Haroon",
    content : "Love the way you lie",
    likes : 0,
    repost : 0,
    tags : ["@hK","@alexa"]
};
console.table(post);

post.likes = 23;
post.tags  = 44;
post.repost = 4;

console.table(post);