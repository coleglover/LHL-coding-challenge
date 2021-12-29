const astronautRoster = [
    {
      firstName:"Chris",
      lastName: "Hadfield",
      nickname:"Space Oddity",
      prefix:"Astronaut",
      job:"Shuttle DJ"
    }
]

const countActiveAstronauts = (roster) => {
    return roster.length
}

console.log(countActiveAstronauts(astronautRoster));