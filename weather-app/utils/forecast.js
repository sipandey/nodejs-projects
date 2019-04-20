const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/ca48cffff4a04643acd139e3ae014b49/' + latitude + ',' + longitude + '?units=si'

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (response.body.error) {
            callback('Unable to find location', undefined)
        } else {
            const data = response.body.currently
            callback(undefined,response.body.daily.data[0].summary + ' It is currently ' + data.temperature + ' degrees out. There is a ' + data.precipProbability + '% chance of rain.')
        }
    })
}

module.exports = forecast