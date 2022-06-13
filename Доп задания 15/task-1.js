
const DATA_POST_URL = 'https://jsonplaceholder.typicode.com/posts';
const CONTENT_POST_URL = 'https://jsonplaceholder.typicode.com/posts';
// const dataContainer = document.querySelector('#data-container');

const createPostElement = () => {
    const postElement = document.createElement('div');
    const headerElement = document.createElement('h1');
    const postTextElement = document.createElement('p');
    const commentElement = document.createElement('b');
    const postCommentElement = document.createElement('div');
    const innerPostCommentElement = document.createElement('div');
    const authorsElement = document.createElement('span');
    const textElement = document.createElement('span');
    postElement.setAttribute("id", "post");
    postElement.className = "post";
    headerElement.className = "post__title";
    headerElement.textContent = "Название поста";
    postTextElement.className = "post__text";
    postTextElement.textContent = "Текст поста";
    commentElement.className = "post__comments-text";
    commentElement.textContent = "Комментарии";
    postCommentElement.className = "post__comments";
    innerPostCommentElement.className = "post-comment";
    authorsElement.className = "post-comment__author";
    authorsElement.textContent = "maxim@gmail.com";
    textElement.className = "post-comment__text";
    textElement.textContent = `laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo
    necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente
    accusantium`;

    postElement.append(headerElement);
    postElement.append(postTextElement);
    postElement.append(commentElement);
    postElement.append(postCommentElement);
    postCommentElement.append(innerPostCommentElement);
    innerPostCommentElement.append(authorsElement);
    innerPostCommentElement.append(textElement);

    return postElement;
}

const HTML = createPostElement();
document.body.append(HTML);
const renderPost = (postIdpostId) => {

}