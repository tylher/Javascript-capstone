const BASE_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';
const appId = 'jvrwtpOKv3EF9dzf4scl';

const saveComment = async (id, name, myComment) => {
  await fetch(`${BASE_URL}apps/${appId}/comments`, {
    method: 'POST',
    body: [
      JSON.stringify({
        item_id: id,
        username: name,
        comment: myComment,
      }),
    ],
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((resp) => resp.json());
};

const getComments = async (id) => {
  await fetch(
    `${BASE_URL}apps/${appId}/comments?item_id=${id}`, {
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    },
  ).then((res) => res.json());
};

export { saveComment, getComments };