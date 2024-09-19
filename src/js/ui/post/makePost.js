export const makePost = (userPosts, id) => {
    const outerContainer = document.getElementById(id);
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    const user = userInfo.name;


    //look through all code and check for parentheses and curly braces//
    
/*     userPosts.forEach((post) => {
        console.log("username: ", username);
        console.log("post username: ", post);

        const container = document.createElement("div");
        container.className = "postContainer";
        const countDiv = document.createElement("div");
        countDiv.className = "countDiv";

        const title = document.createElement("h2");
        title.innerText = post.title;
        title.className = "postTitle";
        

        const content = document.createElement("p");
        content.innerText = post.body;

        const imageDiv = document.createElement("div");
        imageDiv.className = "imageDiv";

        const image = document.createElement("img");
        image.src = post.media.url;
        image.alt = post.media.alt;
        image.className = "postImage";

        const editSection = document.createElement("div");
        editSection.className = "editSection";

        const editButton = document.createElement("button");
        editButton.innerText = "Edit";
        editButton.className = "editButton";

        const deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete";

        

        //reaction section//
        const reactionSection = document.createElement("div");
        reactionSection.className = "reactionSection";

        const likeButton = document.createElement("button");
        likeButton.innerText = "Like";
        likeButton.className = "likeButton";

        const dislikeButton = document.createElement("button");
        dislikeButton.innerText = "Dislike";

        const commentSection = document.createElement("div");
        commentSection.className = "commentSection";

        const commentInput = document.createElement("input");
        commentInput.placeholder = "Add a comment";
        commentInput.className = "commentInput";

        const commentButton = document.createElement("button");
        commentButton.innerText = "Comment";

        const commentsDiv = document.createElement("div");
        commentsDiv.className = "commentsDiv";

        const comments = post.comments;
        comments.forEach((comment) => {
            const commentDiv = document.createElement("div");
            commentDiv.className = "commentDiv";

            const commentUser = document.createElement("p");
            commentUser.innerText = comment.user;

            const commentContent = document.createElement("p");
            commentContent.innerText = comment.comment;

            commentDiv.appendChild(commentUser);
            commentDiv.appendChild(commentContent);
            commentsDiv.appendChild(commentDiv);
        });


        container.appendChild(title);
        container.appendChild(content);
        container.appendChild(imageDiv);
        imageDiv.appendChild(image);
        container.appendChild(editSection);
        editSection.appendChild(editButton);
        editSection.appendChild(deleteButton);
        container.appendChild(reactionSection);
        reactionSection.appendChild(likeButton);
        reactionSection.appendChild(dislikeButton);
        container.appendChild(commentSection);
        commentSection.appendChild(commentInput);
        commentSection.appendChild(commentButton);
        commentSection.appendChild(commentsDiv);

        outerContainer.appendChild(container);
    }

}); */


userPosts.forEach((post) => {
    console.log("username: ", username);
    console.log("post username: ", post);

    const container = document.createElement("div");
    container.className = "postContainer";
    const countDiv = document.createElement("div");
    countDiv.className = "countDiv";

    const title = document.createElement("h2");
    title.innerText = post.title;
    title.className = "postTitle";

    const content = document.createElement("p");
    content.innerText = post.body;

    const imageDiv = document.createElement("div");
    imageDiv.className = "imageDiv";

    const image = document.createElement("img");
    image.src = post.media.url;
    image.alt = post.media.alt;
    image.className = "postImage";

    const editSection = document.createElement("div");
    editSection.className = "editSection";

    const editButton = document.createElement("button");
    editButton.innerText = "Edit";
    editButton.className = "editButton";

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";

    //reaction section//
    const reactionSection = document.createElement("div");
    reactionSection.className = "reactionSection";

    const likeButton = document.createElement("button");
    likeButton.innerText = "Like";
    likeButton.className = "likeButton";

    const dislikeButton = document.createElement("button");
    dislikeButton.innerText = "Dislike";

    const commentSection = document.createElement("div");
    commentSection.className = "commentSection";

    const commentInput = document.createElement("input");
    commentInput.placeholder = "Add a comment";
    commentInput.className = "commentInput";

    const commentButton = document.createElement("button");
    commentButton.innerText = "Comment";

    const commentsDiv = document.createElement("div");
    commentsDiv.className = "commentsDiv";

    const comments = post.comments;
    comments.forEach((comment) => {
        const commentDiv = document.createElement("div");
        commentDiv.className = "commentDiv";

        const commentUser = document.createElement("p");
        commentUser.innerText = comment.user;

        const commentContent = document.createElement("p");
        commentContent.innerText = comment.comment;

        commentDiv.appendChild(commentUser);
        commentDiv.appendChild(commentContent);
        commentsDiv.appendChild(commentDiv);
    });

    container.appendChild(title);
    container.appendChild(content);
    container.appendChild(imageDiv);
    imageDiv.appendChild(image);
    container.appendChild(editSection);
    editSection.appendChild(editButton);
    editSection.appendChild(deleteButton);
    container.appendChild(reactionSection);
    reactionSection.appendChild(likeButton);
    reactionSection.appendChild(dislikeButton);
    container.appendChild(commentSection);
    commentSection.appendChild(commentInput);
    commentSection.appendChild(commentButton);
    commentSection.appendChild(commentsDiv);

    outerContainer.appendChild(container);
});