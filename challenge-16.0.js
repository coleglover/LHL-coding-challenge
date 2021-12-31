const firstPosition = {
  time: 1637074462,
  altitude: 1100,
};
const secondPosition = {
  time: 1637074558,
  altitude: 2200,
};

const getAverageSpeed = (firstPosition, secondPosition) => {
  let newFirstPos = { ...firstPosition };
  let newSecondPos = { ...secondPosition };

  return Math.round(calcAverageSpeed(newFirstPos, newSecondPos) * 10) / 10;
};

const calcAverageSpeed = (newFirstPos, newSecondPos) => {
  return (
    (newSecondPos.altitude - newFirstPos.altitude) /
    (newSecondPos.time - newFirstPos.time)
  );
};

console.log(getAverageSpeed(firstPosition, secondPosition));
