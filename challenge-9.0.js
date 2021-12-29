const astronautRoster = [
    {
        firstName:"Chris",
        lastName: "Hadfield",
        nickname:"Space Oddity",
        prefix:"Astronaut",
        job: "Shuttle DJ"
    },
    {
        firstName:"Chris",
        lastName: "Hadfield",
        nickname:"Space Oddity",
        prefix:"Astronaut",
        job: "Shuttle Cook"
    }
]


const listAstronautJobs = (roster) => {

    let jobList = roster.map(x => String(x.job)) // x. is arbitrary; roster.map creates a new array with only the 'job' property
    //let jobList = roster.map(({job}) => String(job)) 
    
    return jobList

  }
  
  console.log(listAstronautJobs(astronautRoster))