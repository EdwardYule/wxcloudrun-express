const { areaList } = require("@vant/area-data");
const countyList = Object.keys(areaList.county_list);
const length = countyList.length;

function getIdCard() {
  const areaCode = countyList[Math.floor(Math.random() * length)];
  const birthDay = getBirthDay();
  const randomCode = new Array(3).fill(0).map(e => Math.floor(Math.random() * 10)).join('');
  let idCard = `${areaCode}${birthDay}${randomCode}`;
  console.log(idCard);
  const validCode = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2].map((e, i) => e * idCard[i]).reduce((acu, e) => acu + e, 0);
  return `${idCard}${validCode}`;
}

function getBirthDay() {
  const offset = Math.floor(Math.random() * 171);
  const date = new Date(1000 * 60 * 60 * 24 * 365 * (-70 + offset));
  const [year, month, day] = [date.getFullYear(), date.getMonth() + 1, date.getDate()];
  return `${year}${month >= 10 ? month : `0${month}`}${day >= 10 ? day : `0${day}`}`;
}

module.exports = {
  getIdCard,
  getBirthDay,
}