const listOfReceivedData = [
  { type: "astro", data: "Saturn Data" },
  { type: "bio", data: "Space Potatoes" },
  { type: "physics", data: "Lagrange Points" },
  { type: "bio", data: "OMG Tardigrades" },
  { type: "physics", data: "Material reflectivity" },
  { type: "astro", data: "Mercury is not the hottest" },
  //{type: "astro", data: "Mercury is not the hottest222"},
];

const organizeData = (listOfReceivedData) => {
  const groupData = {};

  listOfReceivedData.forEach((i) => {
    groupData[i.type] = groupData[i.type] || []; 
    groupData[i.type].push(i.data);

    // if the Object keys are not equal, create a new key-value array based on the new type
    // add the corresponding value data to that array  
  });

  return groupData;
};

organizeData(listOfReceivedData);
