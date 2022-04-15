import { BASE_URL, appId } from './save-get-comments.js';

const LikeItem = async (itemId) => {
  const URL = `${BASE_URL}apps/${appId}/likes`;
  const save = await fetch(URL, {
    method: 'POST',
    body: JSON.stringify({
      item_id: itemId,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((res) => res);
  return save;
};

const getLikes = async () => {
  const URL = `${BASE_URL}apps/${appId}/likes`;
  const likes = await fetch(URL, {
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((res) => (res.json()));
  return likes;
};

const displayLikes = async (result) => {
  const likes = document.querySelectorAll('.likes-num');
  getLikes().then((data) => {
    result.forEach((item, i) => {
      // eslint-disable-next-line camelcase
      const mov = data.find(({ item_id }) => item_id === item.id);
      if (mov !== undefined) {
        likes[i].textContent = mov.likes;
      }
      // console.log(mov);
      // likes[i].textContent = mov.likes;
    });
  });
};

const updateLikes = (result) => {
  displayLikes(result);
  const likes = document.querySelectorAll('.fa-heart');
  likes.forEach((like) => {
    like.addEventListener('click', async (e) => {
      e.preventDefault();
      const NAME = e.target.parentElement.parentElement.childNodes[2].textContent;
      result.map((item) => {
        if (NAME === item.name) {
          LikeItem(item.id).then((res) => {
            if (res.ok === true) {
              displayLikes(result);
            }
          });
        }
        return '';
      });
    });
    return '';
  });
};

export {
  LikeItem, getLikes, displayLikes, updateLikes,
};