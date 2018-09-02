import { getDataFromApi } from "../utils/http";

const fetchData = async (query = "") => {
  const res = await getDataFromApi(query);
  return res;
};

export default fetchData;
