const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/ca48cffff4a04643acd139e3ae014b49/' + latitude + ',' + longitude + '?units=si'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            const data = body.currently
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + data.temperature + ' degrees out. There is a ' + data.precipProbability + '% chance of rain. ' + 'Temperature High is: ' + body.daily.data[0].temperatureHigh + ' and Temperature Low is: ' + body.daily.data[0].temperatureLow)
        }
    })
}

module.exports = forecast