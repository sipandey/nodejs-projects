const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const place = process.argv[2]

if (!place || place.length === 0) {
    return console.log('Please provide a place name');
}

geocode(place, (error, data) => {
    if (error) {
        return console.log('Error', error)
    }
    forecast(data.latitude, data.longitude, (error, forecastData) => {
        if (error) {
            return console.log('Error', error)
        }
        console.log(data.location)
        console.log(forecastData)
    })
})