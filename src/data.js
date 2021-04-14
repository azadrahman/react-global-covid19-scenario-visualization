const data = {
  Global: {
    NewConfirmed: 435743,
    TotalConfirmed: 132924873,
    NewDeaths: 10720,
    TotalDeaths: 2885082,
    NewRecovered: 309592,
    TotalRecovered: 75648437,
    Date: "2021-04-13"
  }
};

const db = Object.entries(data.Global).reduce((arr, [key, value]) => {
  arr.push({
    name: key,
    value
  });

  return arr;
}, []);
db.pop();
//console.log(db);
export default db;
