const apiKey = "hFv8OeXUU3hh5g3av7nTj9gMJZxGgcmL";

export default async function getTrendingGifs() {
  const apiURL = `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=5&rating=g`;

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
