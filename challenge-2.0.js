
const astronaut = {
    firstName: "Yuri",
    lastName: "Gagarin",
    nickname: "First!",
    prefix: "Cosmonaut"
}

const astronaut2 = {
    firstName: "Neil",
    lastName: "Armstrong",
    nickname: "Steps",
    prefix: "Astronaut"
  }

const generateAstronautTag = (astronaut) => {
  
    console.log(`${astronaut.prefix}: ${astronaut.firstName} "${astronaut.nickname}" ${astronaut.lastName}`)
    
    return `${astronaut.prefix}: ${astronaut.firstName} "${astronaut.nickname}" ${astronaut.lastName}`
    //return astronaut.prefix + ": " + astronaut.firstName + " \" " +  astronaut.nickname + " \" " + " " + astronaut.lastName

}

generateAstronautTag(astronaut);
generateAstronautTag(astronaut2);