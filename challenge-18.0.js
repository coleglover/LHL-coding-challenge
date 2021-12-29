const listOfChoices = [
  "Chicken Dinner",
  "Chicken Dinner",
  "Chicken Dinner",
  "Ice Cream Sandwich",
  "Ice Cream Sandwich",
];

const chooseLunchWinner = (listOfChoices) => {
  const counts = {};

  listOfChoices.forEach(i => {
    counts[i] = (counts[i] || 0) + 1;
  });

  console.log(counts);
  //NOTES:
  // we call forEach on listOfChoices with a callback that puts the array item `i` as a property of count
  // `i` is each array key value and NOT its index
  // counts[i] || 0 returns value of counts[i] if it is set, otherwise 0.

  return Object.keys(counts).reduce((a, b) => (counts[a] > counts[b] ? a : b))
};

console.log(chooseLunchWinner(listOfChoices));
