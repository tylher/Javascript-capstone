const BASE_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';
const appId = 'jvrwtpOKv3EF9dzf4scl';

const saveComment = async (id, { name, comment }) => {
  const save = await fetch(`${BASE_URL}/apps/${appId}/comments`, {
    method: 'POST',
    body: [
      JSON.stringify({
        item_id: id,
        username: name,
        comment,
      }),
    ],
  }).then((resp) => console.log(resp.json()));

  return save;
};

const getComments = async (id) => {
  const data = await fetch(
    `${BASE_URL}/apps/${appId}/comments?item_id=${id}`,
  ).then((res) => res.json());

  return data;
};

export { saveComment, getComments };