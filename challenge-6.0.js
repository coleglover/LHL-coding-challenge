const exampleRoster = []
const exampleAstronaut = {
  firstName:"Chris",
  lastName: "Hadfield",
  nickname:"Space Oddity",
  prefix:"Astronaut"
}

const addAstronautToRoster = (roster, astronaut) => {
    roster.push(astronaut); // add Astronaut object to roster array
    return roster;
}

console.log(addAstronautToRoster(exampleRoster,exampleAstronaut))
