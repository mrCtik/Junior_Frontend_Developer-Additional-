const POSTS_POST_URL = 'https://jsonplaceholder.typicode.com/posts';
const CONTENT_POST_URL = 'https://jsonplaceholder.typicode.com/comments';

const createPostElement = (postTitle, postText) => {
    const postElement = document.createElement('div');
    const headerElement = document.createElement('h1');
    const postTextElement = document.createElement('p');
    const commentElement = document.createElement('b');
    const postCommentElement = document.createElement('div');
    const innerPostCommentElement = document.createElement('div');
    // const authorsElement = document.createElement('span');
    // const textElement = document.createElement('span');
    postElement.setAttribute("id", "post");
    postElement.className = "post";
    headerElement.className = "post__title";
    headerElement.textContent = postTitle;
    postTextElement.className = "post__text";
    postTextElement.textContent = postText;
    commentElement.className = "post__comments-text";
    commentElement.textContent = "Комментарии";
    postCommentElement.className = "post__comments";
    innerPostCommentElement.className = "post-comment";
    // authorsElement.className = "post-comment__author";
    // authorsElement.textContent = "";
    // textElement.className = "post-comment__text";
    // textElement.textContent = "";
    postElement.append(headerElement);
    postElement.append(postTextElement);
    postElement.append(commentElement);
    postElement.append(postCommentElement);
    postCommentElement.append(innerPostCommentElement);
    // innerPostCommentElement.append(authorsElement);
    // innerPostCommentElement.append(textElement);
    return postElement;
}

const renderPost = async (id) => {

    const requestsPost = await fetch(`${POSTS_POST_URL}/${id}`);
    const post = await requestsPost.json();
    const HTML = createPostElement(post.title, post.body);
    document.body.append(HTML);

    const requestsComments = await fetch(`${CONTENT_POST_URL}?postId=${id}`);
    const comments = await requestsComments.json();
    console.log('comments', comments)
    const commentsContainer = document.querySelector('.post-comment');
    const textCommentsContainer = document.querySelector('.post-comment__text');
    const autorCommentsContainer = document.querySelector('.post-comment__author');

    comments.forEach(comment => {
        
        const authorsElement = document.createElement('span');
        const textElement = document.createElement('span');

        authorsElement.className = "post-comment__author";
        authorsElement.textContent = comment.email;
        commentsContainer.append(authorsElement);

        textElement.className = "post-comment__text";

        textElement.textContent = comment.body;
        commentsContainer.append(textElement);
    });

}

renderPost(2);

