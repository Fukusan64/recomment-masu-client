import axios from "axios";

const BASE_URL = process.env.VUE_APP_ATCODER_PROBLEM_RECOMMENDER_API_BASE_URL || '.';
const crossdomain = process.env.VUE_APP_API_IS_CROSSDOMAIN === 'CROSSDOMAIN';


const getList = async (userName) => {
  // eslint-disable-next-line no-console
  const { data } = (await axios.get(`${BASE_URL}/Recommend_for_${userName}.txt`, { crossdomain }));
  return data.split('\n').map(e => {
    const [problem, evaluationValue] = e.split(' ');
    const contestName = problem.replace(/_[^_]*$/,'').replace('_','-');
    return {
      problem,
      evaluationValue,
      link: `https://atcoder.jp/contests/${contestName}/tasks/${problem}`
    }
  });
}

export default {
  getList,
}
