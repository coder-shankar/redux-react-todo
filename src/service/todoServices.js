import { getDataFromApi, refreshTokenHandler } from "../utils/http";

const fetchData = async (query = "") => {
  // refreshTokenHandler();
  const res = await getDataFromApi(query);
  return res;
};

export default fetchData;
