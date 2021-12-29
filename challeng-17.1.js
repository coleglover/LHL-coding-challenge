const toggleList = [
  {
    name: "toggleA",
    isOn: false,
  },
  {
    name: "toggleB",
    isOn: true,
  },
];

const specificToggle = "toggleA";

const switchSpecificToggle = (toggleList, specificToggle) => {
  const updatedToggleList = [...toggleList];

  for (var i = 0; i < updatedToggleList.length; i++) {
    if (updatedToggleList[i].name == specificToggle) {
      updatedToggleList[i].isOn = true;
    }
  }

  return updatedToggleList;
};

console.log(switchSpecificToggle(toggleList, specificToggle));
