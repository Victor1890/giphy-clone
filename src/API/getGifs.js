const APIKEY = "mBheQO3or9U76I6tuyxZSkWsZRSvgLix&q";

export const getGifs = async ({ keyword }) => {
  const endPoint = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}=${keyword}&limit=25&offset=0&rating=r&lang=en`;

  return await fetch(endPoint)
    .then((res) => res.json())
    .then((response) => {
      const { data = [] } = response;
      const gifs = data.map((image) => {
        const { images, title, id } = image;

        const { url } = images.downsized_medium;

        return {
          title,
          id,
          url,
        };
      });

      return gifs;
    });
};
