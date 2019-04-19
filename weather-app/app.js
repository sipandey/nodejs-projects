const request = require('request')

// const url = 'https://api.darksky.net/forecast/ca48cffff4a04643acd139e3ae014b49/37.8267,-122.4233?units=si'

// request({ url: url, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to weather service!')
//     } else if (response.body.error) {
//         console.log('Unable to find location')
//     } else {
//         const data = response.body.currently
//         console.log(response.body.daily.data[0].summary + ' It is currently ' + data.temperature + ' degrees out. There is a ' + data.precipProbability + '% chance of rain.')
//     }
// })

// Geocoding

const geocodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic2lwYW5kZXkiLCJhIjoiY2p1bzB0c25mMm9kdzQzcGduMzJqbGtpNyJ9.HRFMACYTW0hMnLldDjT31A&limit=1'

request({ url: geocodeUrl, json: true }, (error, response) => {
    if(error) {
        console.log('Unable to connect to location services!')
    } else if(!response.body.features || response.body.features.length === 0) {
        console.log('Unable to find location. Try another search.')
    } else {
        const latitude = response.body.features[0].center[1]
        const longitude = response.body.features[0].center[0]
        console.log(latitude, longitude)
    } 
})