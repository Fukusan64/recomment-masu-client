//------ for debug --------
const sleep =  (msec) => new Promise(
  (resolve) => setTimeout(resolve, msec)
);
//-------------------------
const getList = async () => {
	await sleep(2000);
	return ['unit', 'fukusan', 'masu'];
}

export default {
  getList,
}
