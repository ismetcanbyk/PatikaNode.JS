let post = [
    "post-1",
    "post-2",
    "post-3",
    "post-4"
]



function postList() {

    for (let i = 0; i < post.length; i++) {
        console.log(post[i]);

    }
}


const addPost = (addPost) => {
    const promise = new Promise((resolve, reject) => {
        if (addPost == "") {
            reject("Boş post atılamaz !");
        } else {
            let postLenght = post.length;
            resolve(post[postLenght] = addPost);
            console.log("\nYeni Post Eklendi !!\n")
        }
    })
    return promise;
}

async function asyncPost() {
    postList();
    try {
        await addPost("New post");
        postList();
    } catch (error) {
        console.log(error);
    }
}

asyncPost();