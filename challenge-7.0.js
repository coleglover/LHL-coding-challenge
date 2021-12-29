const temperature = 32
const condition = "Sunny with small clouds"
const windSpeed = 20
const windDirection = "NNE"

const storeWeatherConditions = (temperatureF, condition, windSpeed, windDirection) => {   

    const weatherConditions = {
        temperature: convertTemperature(temperatureF),
        windSpeed: convertSpeed(windSpeed), 
        windDirection: windDirection,
        condition: condition  
    };

    console.log(weatherConditions)
    return weatherConditions
}

const convertTemperature = (tempF) => {
    return Math.round((tempF - 32) * (5/9))
}

const convertSpeed = (speedMph) => {
    return Math.round(speedMph / 2.237)
}

console.log(storeWeatherConditions(temperature, condition, windSpeed, windDirection))