/* eslint-disable camelcase */
import { getComments, saveComment } from './savecomments.js';
import UserDetails from './userdetails.js';
import displayCommentLength from './commentlength.js';

const displayComment = (id) => {
  const submitComment = document.querySelector('button[type="button"]');
  const commentsHolder = document.querySelector('.comments-holder');
  getComments(id).then((data) => {
    data.map((item) => {
      const temp = `<li class='comment-item'>${item.creation_date} ${item.username} : ${item.comment} </li>`;
      commentsHolder.innerHTML += temp;
      return '';
    });
    displayCommentLength();
  });
  submitComment.addEventListener('click', async () => {
    const name = document.querySelector('.username');
    const comment = document.querySelector('.usercomment');
    if (name.value.trim().length !== 0 && comment.value.trim().length !== 0) {
      const user = new UserDetails(name.value, comment.value);
      name.value = '';
      comment.value = '';
      saveComment(id, user.name, user.comment).then((res) => {
        if (res.ok) {
          commentsHolder.innerHTML = '';
          getComments(id).then((data) => {
            data.map((item) => {
              const temp = `<li>${item.creation_date} ${item.username} : ${item.comment} </li>`;
              commentsHolder.innerHTML += temp;
              return '';
            });
          });
        }
      });
    }
  });
};

export default displayComment;
