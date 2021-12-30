const listOfReceivedData = [
  {type: "astro", data: "Saturn Data"},
  {type: "bio", data: "Space Potatoes"},
  {type: "physics", data: "Lagrange Points"},
  {type: "bio", data: "OMG Tardigrades"},
  {type: "physics", data: "Material reflectivity"},
  {type: "astro", data: "Mercury is not the hottest"},
  //{type: "astro", data: "Mercury is not the hottest222"},
]

const organizeData = (listOfReceivedData) => {

  const groupData = {};

  listOfReceivedData.forEach(i => {    
    groupData[i.type] = (groupData[i.type] || []);
    groupData[i.type].push(i.data)
  })
  console.log(groupData)

  for (i in groupData) {
    console.log(`Type: "${i}":  ${[groupData[i]]}`)
  }
}

organizeData(listOfReceivedData);