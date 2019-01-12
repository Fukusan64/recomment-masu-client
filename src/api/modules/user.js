import axios from "axios";

const BASE_URL = process.env.VUE_APP_ATCODER_PROBLEM_RECOMMENDER_API_BASE_URL || '.';
const crossdomain = process.env.VUE_APP_API_IS_CROSSDOMAIN === 'CROSSDOMAIN';
const getList = async () => {
	const { data } = (await axios.get(`${BASE_URL}/Userlist.txt`, { crossdomain }));
	return data.split('\n');
}

export default {
  getList,
}
