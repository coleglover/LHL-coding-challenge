const exampleAstronaut = {
    firstName:"Chris",
    lastName: "Hadfield",
    nickname:"Space Oddity",
    prefix:"Astronaut"
}

const job = "Shuttle DJ"

// add 'job' to each astronaut object
const addJobToAstronaut = (astronaut, job) => {
    let newAstro = {...astronaut} // duplicate the object so as to not override the original object
    newAstro["job"] = job // adds job to astronaut object
    return newAstro
}

console.log(addJobToAstronaut(exampleAstronaut,job));
  