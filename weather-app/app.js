const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const place = process.argv[2]

if (!place || place.length === 0) {
    return console.log('Please provide a place name');
}

geocode(place, (error, { latitude, longitude, location }) => {
    if (error) {
        return console.log('Error', error)
    }
    forecast(latitude, longitude, (error, forecastData) => {
        if (error) {
            return console.log('Error', error)
        }
        console.log(location)
        console.log(forecastData)
    })
})