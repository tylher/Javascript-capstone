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

const displayLikes = (id) => {
  getLikes().then((data) => {
    // eslint-disable-next-line camelcase
    const mov = data.find(({ item_id }) => item_id === id);
    const itemIndex = data.indexOf(mov);
    const numLikes = document.querySelectorAll('.likes-num');
    numLikes[itemIndex].textContent = mov.likes;
  });
};

const updateLikes = (result, id) => {
  const likes = document.querySelectorAll('.fa-heart');
  likes.forEach((like) => {
    like.addEventListener('click', async (e) => {
      const NAME = e.target.parentElement.parentElement.childNodes[2].textContent;
      result.map(async (item) => {
        if (NAME === item.name) {
          await LikeItem(item.id).then((res) => {
            if (res.ok === true) {
              displayLikes(id);
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