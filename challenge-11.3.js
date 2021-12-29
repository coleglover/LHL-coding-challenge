const missionDate = "2021-12-12"
const platformList = [
  {
    name:"Platform A",
    bookDate:"2021-12-11"
  },
  {
    name:"Platform B",
    bookDate: undefined
  },
  {
    name:"Platform C",
    bookDate:undefined
  },
] 

// for each object in the list, identify if the bookDate is undefined and populate it with a missionDate
const bookFreePlatform = (list, date) => {

    for (var i = 0; i < list.length; i++){

        if (typeof list[i].bookDate == 'undefined'){                       
            list[i].bookDate = date
            break; // break the function once you'd used the date
        }      
    }
    
    return list
}

bookFreePlatform(platformList, missionDate)

// console.log("expected result 1: " + platformList[1].bookDate)
// console.log("expected result 2: " + platformList[2].bookDate)