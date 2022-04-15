/* eslint-disable camelcase */
import { getComments, saveComment } from './savecomments.js';
import UserDetails from './userdetails.js';

const displayComment = (id) => {
  const submitComment = document.querySelector('button[type="button"]');
  const name = document.querySelector('.username');
  const comment = document.querySelector('.usercomment');
  const user = new UserDetails(name, comment);

  submitComment.addEventListener('click', async () => {
    const commentsHolder = document.querySelector('.comments-holder');
    saveComment(id, user.name, user.comment);
    await getComments(id).then((data) => {
      data.map(({ username, comment, creation_date }) => {
        const temp = `<li>${creation_date} ${username} : ${comment} </li>`;
        commentsHolder.appendChild(temp);
        return '';
      });
    });
  });
};

export default displayComment;
