//Get All Images By Title and Tag
export default (datas = [], text = '') => {
  if(Object.values(text).length == 0 ) return datas;
  return datas.filter((data) => {
    const matchData = data.title.toLowerCase().includes(text) ? data : false;
    const matchTag = data.tags.filter((tag) => {
      return tag.includes(text) ? tag : false
    });
    return matchData && matchTag
  })
}
