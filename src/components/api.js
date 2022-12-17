// https://api.rawg.io/api/games?key=74ed0a94f1394334ba786a7a30c8a8f2&dates=2019-09-01

//Base Url
const base="https://api.rawg.io/api/games?key=74ed0a94f1394334ba786a7a30c8a8f2";
const d = new Date();
const currYear=d.getFullYear();
let currMonth=d.getMonth()+1;
let currDay=d.getDate();
if(currMonth<10){
    currMonth=`0${currMonth}`
}
if(currDay<10){
    currDay=`0${currDay}`
}
const currDate=`${currYear}-${currMonth}-${currDay}`;
const lastYear=`${currYear-1}-${currMonth}-${currDay}`;
const nextYear=`${currYear+1}-${currMonth}-${currDay}`;
// console.log(process.env.REACT_APP_KEY)
// console.log(currYear)
// console.log(currMonth)
// console.log(currDay)
// console.log(currDate)
const gameList1=`&dates=${lastYear},${currDate}&ordering=-rating&genres=4,51  &page_size=10`;
const gameList2=`&dates=${currDate},${nextYear}&ordering=-added&page_size=10`;
const gameList3=`&dates=${lastYear},${currDate}&ordering=-released&page_size=10`;

export const popularGamesUrl=`${base}${gameList1}`;
export const upcomingGamesUrl=`${base}${gameList2}`;
export const newGamesUrl=`${base}${gameList3}`;

// https://api.rawg.io/api/games/10069?key=74ed0a94f1394334ba786a7a30c8a8f2
// const api = () => 

// `${base}${gameList}`;


// export default api;