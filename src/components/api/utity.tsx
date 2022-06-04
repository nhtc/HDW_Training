export const getListApi = async (url: string) => {
  const temp = await fetch(url);
  return await temp.json();
};
