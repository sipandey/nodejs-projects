const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoic2lwYW5kZXkiLCJhIjoiY2p1bzB0c25mMm9kdzQzcGduMzJqbGtpNyJ9.HRFMACYTW0hMnLldDjT31A&limit=1'

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (!response.body.features || response.body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            const latitude = response.body.features[0].center[1]
            const longitude = response.body.features[0].center[0]
            const placeName = response.body.features[0].place_name
            callback(undefined, { latitude: latitude, longitude: longitude, location: placeName })
        }
    })
}

module.exports = geocode