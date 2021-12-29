const weatherData = [
    { 
      temperature:0, 
      weather:"sunny", 
      windDirection: "NNE", 
      windSpeed:24
    },
    { 
      temperature:10, 
      weather:"cloudy", 
      windDirection: "NNE", 
      windSpeed:9 
    }
] 
const getWindSpeed = (weatherData) => {
    return weatherData.map(x => x.windSpeed) // add windSpreed entries to an array and return it; x is arbitrary
}

const averageWindSpeed = () => {
    let windSpeedList = getWindSpeed(weatherData); 

    // reduce function sums windspeed and then average is calc'd by # of entries
    return Math.round((windSpeedList.reduce((a, b) => a + b))/windSpeedList.length); 
}

console.log(averageWindSpeed())