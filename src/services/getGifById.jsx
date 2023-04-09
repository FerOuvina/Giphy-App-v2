import { API_KEY, API_URL } from "./settings";

const fromResToGif = (apiRes) => {
  const { data } = apiRes;
  const { images, title, id } = data;
  const { url } = images.downsized_medium;
  return { title, id, url };
};

export default function getGifById({ id }) {
  return fetch(`${API_URL}/gifs/${id}?api_key=${API_KEY}`)
    .then((res) => res.json())
    .then(fromResToGif);
};
