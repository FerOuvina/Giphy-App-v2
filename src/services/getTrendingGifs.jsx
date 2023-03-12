import { API_KEY, API_URL } from "./setting";

export default async function getTrendingGifs() {
  const apiURL = `${API_URL}/gifs/trending?api_key=${API_KEY}&limit=5&rating=g`;

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
