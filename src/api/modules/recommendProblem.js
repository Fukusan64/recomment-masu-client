//------ for debug --------
const sleep =  (msec) => new Promise(
  (resolve) => setTimeout(resolve, msec)
);
//-------------------------
const getList = async (userName) => {
  await sleep(2000);
  // eslint-disable-next-line no-console
  console.log(userName);
  return [];
}

export default {
  getList,
}
