/* eslint-disable camelcase */
import { getComments, saveComment } from './savecomments.js';
import UserDetails from './userdetails.js';

const displayComment = (id) => {
  const submitComment = document.querySelector('button[type="button"]');

  submitComment.addEventListener('click', async () => {
    const name = document.querySelector('.username');
    const comment = document.querySelector('.usercomment');
    const user = new UserDetails(name.value, comment.value);
    const commentsHolder = document.querySelector('.comments-holder');
    saveComment(id, user.name, user.comment);
    setTimeout(await getComments(id).then((data) => {
      console.log(data);
      console.log('ok');
      data.map((item) => {
        const temp = `<li>${item.creation_date} ${item.username} : ${item.comment} </li>`;
        commentsHolder.appendChild(temp);
        return '';
      });
    }), 2000);
  });
};

export default displayComment;
