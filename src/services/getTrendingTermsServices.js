import { APIKEY, API_URL } from "./settings";

const formApiResponseToGifs = (res) => {
  const { data = [] } = res;

  if (Array.isArray(data)) return data;
  return ["jonh cena", ""];
};

export const getTrendingTerms = async () => {
  const endPoint = `${API_URL}/trending/searches?api_key=${APIKEY}`;

  return await fetch(endPoint)
    .then((res) => res.json())
    .then((response) => formApiResponseToGifs(response));
};
