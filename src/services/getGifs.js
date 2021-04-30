import { APIKEY, API_URL } from "./settings";

const formApiResponseToGifs = (res) => {
  const { data = [] } = res;

  if (Array.isArray(data)) {
    const gifs = data.map((image) => {
      const { images, title, id } = image;

      const { url } = images.downsized_medium;

      return { title, id, url };
    });
    return gifs;
  }
  return [];
};

export const getGifs = async ({ keyword, limit = 25 }) => {
  const endPoint = `${API_URL}/gifs/search?api_key=${APIKEY}=${keyword}&limit=${limit}&offset=0&rating=r&lang=en`;

  return await fetch(endPoint)
    .then((res) => res.json())
    .then((response) => formApiResponseToGifs(response));
};
