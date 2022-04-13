const BASE_URL = 'https://api.tvmaze.com';
const getShow = async (id) => {
  const show = await fetch(`${BASE_URL}/shows/${id}`).then((resp) => resp.json());
  return show;
};
export default getShow;
