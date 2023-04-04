import { API_KEY, API_URL } from "./setting";
export default async function getGifs({ keyword, page = 0 } = {}) {
  const GIF__AMOUNT = 11;
  const apiURL = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${GIF__AMOUNT}&offset=${page * GIF__AMOUNT}&rating=g&lang=en`;

  const res = await fetch(apiURL);
  const response = await res.json();
  const { data = [] } = response;
  if (Array.isArray(data)) {
    const gifs = data.map((image) => {
      const { images, title, id } = image;
      const { url } = images.downsized_medium;
      return { title, id, url };
    });
    return gifs;
  }
}
