const launchDate = "2021-12-25";
//const fakeToday = "2021-12-01"
const missionName = "Moon visit";

const timeRemaining = (launchDate, missionName, fakeToday) => {
  const today = fakeToday || new Date(); // Do not alter this line!

  //const dateEx = new Date(fakeToday) <- makes an date object of the input

  console.log("today: " + today);

  return {
    missionName: missionName,
    daysRemaining: dateDifference(launchDate, today),
  };
};

const dateDifference = (futureDate, presentDate) => {
  let presentDateInt = convertDateToDays(presentDate);
  let futureDateInt = convertDateToDays(futureDate);

  console.log(`present date: ${presentDateInt}`);
  console.log(`future date: ${futureDateInt}`);

  return Math.round(futureDateInt - presentDateInt);
};

const convertDateToDays = (date) => {
  return Date.parse(date) / (1000 * 60 * 60 * 24);
};
console.log(timeRemaining(launchDate, missionName));
